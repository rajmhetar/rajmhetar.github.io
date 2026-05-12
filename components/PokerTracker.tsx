"use client"
import { useState, useEffect, useCallback } from "react"
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, ReferenceLine
} from "recharts"

const PASSWORD = "jacktenhearts"
const AUTH_KEY  = "poker_auth_v1"
const API_URL   = "https://script.google.com/macros/s/AKfycbwLz66QHgEiPbwRM87P80iWYDXtEux-JsAoAfu4bp0tfIPdh2GG7h6vOc_qhSN-3fEN/exec"

const STAKES_OPTIONS = [
  { label: "0.10/0.20", bb: 0.20 },
  { label: "0.25/0.50", bb: 0.50 },
  { label: "0.50/1.00", bb: 1.00 },
  { label: "1/2",       bb: 2.00 },
  { label: "1/3",       bb: 3.00 },
  { label: "2/5",       bb: 5.00 },
  { label: "5/5",       bb: 5.00 },
  { label: "5/10",      bb: 10.00 },
]

interface Session {
  id: string
  date: string
  stakes: string
  bb: number
  buyIn: number
  cashOut: number
  hours: number
  notes: string
}

const emptyForm = {
  date: new Date().toISOString().split("T")[0],
  stakes: "1/2",
  buyIn: "",
  cashOut: "",
  hours: "",
  notes: "",
}

// ── API helpers ──────────────────────────────────────────────────────────────

async function apiGet(): Promise<Session[]> {
  const res = await fetch(`${API_URL}?action=get`, { redirect: "follow" })
  const data = await res.json()
  return (data as Session[]).map(s => ({
    ...s,
    bb:      Number(s.bb),
    buyIn:   Number(s.buyIn),
    cashOut: Number(s.cashOut),
    hours:   Number(s.hours),
  }))
}

async function apiAdd(session: Session): Promise<void> {
  const params = new URLSearchParams({ action: "add", session: JSON.stringify(session) })
  await fetch(`${API_URL}?${params}`, { redirect: "follow" })
}

async function apiUpdate(session: Session): Promise<void> {
  const params = new URLSearchParams({ action: "update", session: JSON.stringify(session) })
  await fetch(`${API_URL}?${params}`, { redirect: "follow" })
}

async function apiDelete(id: string): Promise<void> {
  const params = new URLSearchParams({ action: "delete", id })
  await fetch(`${API_URL}?${params}`, { redirect: "follow" })
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return (n >= 0 ? "+$" : "-$") + Math.abs(n).toFixed(2)
}

function StatCard({
  label, value, sub, positive,
}: {
  label: string; value: string; sub?: string; positive?: boolean
}) {
  const color =
    positive === undefined ? "text-gray-800"
    : positive            ? "text-green-600"
    :                        "text-red-500"
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white space-y-1">
      <div className="text-xs text-gray-400 uppercase tracking-widest">{label}</div>
      <div className={`text-xl font-bold font-mono ${color}`}>{value}</div>
      {sub && <div className="text-xs text-gray-400">{sub}</div>}
    </div>
  )
}

function Spinner() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-800 rounded-full animate-spin" />
    </div>
  )
}

// ── Component ────────────────────────────────────────────────────────────────

export default function PokerTracker() {
  const [authenticated, setAuthenticated] = useState(false)
  const [pwInput, setPwInput]             = useState("")
  const [pwError, setPwError]             = useState("")

  const [sessions, setSessions]           = useState<Session[]>([])
  const [loading, setLoading]             = useState(false)
  const [saving, setSaving]               = useState(false)
  const [fetchError, setFetchError]       = useState("")

  const [showForm, setShowForm]           = useState(false)
  const [editingId, setEditingId]         = useState<string | null>(null)
  const [form, setForm]                   = useState(emptyForm)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  // ── Auth ───────────────────────────────────────────────────────────────────

  useEffect(() => {
    if (sessionStorage.getItem(AUTH_KEY) === "true") setAuthenticated(true)
  }, [])

  const handleLogin = () => {
    if (pwInput === PASSWORD) {
      setAuthenticated(true)
      sessionStorage.setItem(AUTH_KEY, "true")
    } else {
      setPwError("Incorrect password.")
    }
  }

  // ── Data loading ───────────────────────────────────────────────────────────

  const loadSessions = useCallback(async () => {
    setLoading(true)
    setFetchError("")
    try {
      const data = await apiGet()
      setSessions(data)
    } catch {
      setFetchError("Could not connect to Google Sheets. Check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (authenticated) loadSessions()
  }, [authenticated, loadSessions])

  // ── Form helpers ───────────────────────────────────────────────────────────

  const openAdd = () => {
    setForm(emptyForm)
    setEditingId(null)
    setShowForm(true)
  }

  const openEdit = (s: Session) => {
    setForm({
      date:    s.date,
      stakes:  s.stakes,
      buyIn:   String(s.buyIn),
      cashOut: String(s.cashOut),
      hours:   String(s.hours),
      notes:   s.notes,
    })
    setEditingId(s.id)
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
    setEditingId(null)
    setForm(emptyForm)
  }

  const handleSubmit = async () => {
    const stakeOpt = STAKES_OPTIONS.find(o => o.label === form.stakes) ?? STAKES_OPTIONS[3]
    const session: Session = {
      id:      editingId ?? Date.now().toString(),
      date:    form.date,
      stakes:  form.stakes,
      bb:      stakeOpt.bb,
      buyIn:   parseFloat(form.buyIn),
      cashOut: parseFloat(form.cashOut),
      hours:   parseFloat(form.hours),
      notes:   form.notes.trim(),
    }
    setSaving(true)
    closeForm()
    try {
      if (editingId) {
        await apiUpdate(session)
      } else {
        await apiAdd(session)
      }
      await loadSessions()
    } catch {
      setFetchError("Failed to save session. Check your connection and try again.")
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: string) => {
    setDeleteConfirm(null)
    setSaving(true)
    try {
      await apiDelete(id)
      await loadSessions()
    } catch {
      setFetchError("Failed to delete session.")
    } finally {
      setSaving(false)
    }
  }

  // ── Stats ──────────────────────────────────────────────────────────────────

  const totalProfit  = sessions.reduce((sum, s) => sum + (s.cashOut - s.buyIn), 0)
  const totalHours   = sessions.reduce((sum, s) => sum + s.hours, 0)
  const hourlyRate   = totalHours > 0 ? totalProfit / totalHours : 0
  const totalBBWon   = sessions.reduce((sum, s) => sum + (s.cashOut - s.buyIn) / s.bb, 0)
  const bbPerHour    = totalHours > 0 ? totalBBWon / totalHours : 0
  const wins         = sessions.filter(s => s.cashOut > s.buyIn).length
  const winRate      = sessions.length > 0 ? (wins / sessions.length) * 100 : 0
  const profits      = sessions.map(s => s.cashOut - s.buyIn)
  const bestSession  = profits.length > 0 ? Math.max(...profits) : 0
  const worstSession = profits.length > 0 ? Math.min(...profits) : 0

  // ── Chart ──────────────────────────────────────────────────────────────────

  const sorted = [...sessions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )
  let cumulative = 0
  const chartData = sorted.map(s => {
    cumulative += s.cashOut - s.buyIn
    return { date: s.date, profit: parseFloat(cumulative.toFixed(2)) }
  })

  const formValid =
    form.date && form.buyIn && form.cashOut && form.hours &&
    !isNaN(parseFloat(form.buyIn)) && !isNaN(parseFloat(form.cashOut)) &&
    !isNaN(parseFloat(form.hours)) && parseFloat(form.hours) > 0

  // ── Password gate ──────────────────────────────────────────────────────────

  if (!authenticated) {
    return (
      <div className="mt-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-xs space-y-5">
          <div className="text-center space-y-1">
            <div className="text-4xl mb-3">♠</div>
            <h2 className="text-2xl font-bold text-blue-800">Poker Tracker</h2>
            <p className="text-sm text-gray-400">Private — enter password to access</p>
          </div>
          <input
            type="password"
            value={pwInput}
            onChange={e => { setPwInput(e.target.value); setPwError("") }}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-center font-mono focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800"
            autoFocus
          />
          {pwError && <p className="text-red-500 text-sm text-center">{pwError}</p>}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-800 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition-colors"
          >
            Enter
          </button>
        </div>
      </div>
    )
  }

  // ── Dashboard ──────────────────────────────────────────────────────────────

  return (
    <div className="mt-10 space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-800">Poker Tracker</h2>
        <div className="flex items-center gap-3">
          {saving && (
            <span className="text-xs text-gray-400 flex items-center gap-1.5">
              <div className="w-3 h-3 border-2 border-gray-300 border-t-blue-800 rounded-full animate-spin" />
              Saving…
            </span>
          )}
          <button
            onClick={loadSessions}
            disabled={loading || saving}
            className="text-xs text-gray-400 hover:text-blue-800 transition-colors disabled:opacity-40"
            title="Refresh"
          >
            ↻ Refresh
          </button>
          <button
            onClick={openAdd}
            disabled={loading || saving}
            className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-40"
          >
            + Log Session
          </button>
        </div>
      </div>

      {/* Error banner */}
      {fetchError && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 flex justify-between items-center">
          <span>{fetchError}</span>
          <button onClick={() => setFetchError("")} className="text-red-400 hover:text-red-600 ml-4">✕</button>
        </div>
      )}

      {/* Loading */}
      {loading ? <Spinner /> : (
        <>
          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <StatCard
              label="Total Profit"
              value={sessions.length > 0 ? fmt(totalProfit) : "—"}
              sub={`${sessions.length} session${sessions.length !== 1 ? "s" : ""}`}
              positive={sessions.length > 0 ? totalProfit >= 0 : undefined}
            />
            <StatCard
              label="Hourly Rate"
              value={totalHours > 0 ? `${hourlyRate >= 0 ? "+" : ""}$${Math.abs(hourlyRate).toFixed(2)}/hr` : "—"}
              sub={`${totalHours.toFixed(1)} hrs total`}
              positive={totalHours > 0 ? hourlyRate >= 0 : undefined}
            />
            <StatCard
              label="BB / hr"
              value={totalHours > 0 ? `${bbPerHour >= 0 ? "+" : ""}${bbPerHour.toFixed(2)}` : "—"}
              sub="weighted across stakes"
              positive={totalHours > 0 ? bbPerHour >= 0 : undefined}
            />
            <StatCard
              label="Win Rate"
              value={sessions.length > 0 ? `${winRate.toFixed(0)}%` : "—"}
              sub={sessions.length > 0 ? `${wins}W – ${sessions.length - wins}L` : ""}
              positive={sessions.length > 0 ? winRate >= 50 : undefined}
            />
            <StatCard
              label="Best Session"
              value={sessions.length > 0 ? fmt(bestSession) : "—"}
              positive={sessions.length > 0 ? bestSession >= 0 : undefined}
            />
            <StatCard
              label="Worst Session"
              value={sessions.length > 0 ? fmt(worstSession) : "—"}
              positive={sessions.length > 0 ? worstSession >= 0 : undefined}
            />
          </div>

          {/* Cumulative profit chart */}
          {chartData.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-5 bg-white">
              <h3 className="font-semibold text-gray-700 mb-4 text-sm uppercase tracking-wide">
                Cumulative Profit
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={chartData} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    tickFormatter={d => d.slice(5)}
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    tickFormatter={v => `$${v}`}
                    width={55}
                  />
                  <Tooltip
                    formatter={(v: unknown) => [`$${(v as number).toFixed(2)}`, "Profit"]}
                    contentStyle={{ fontSize: 12, borderRadius: 8 }}
                  />
                  <ReferenceLine y={0} stroke="#d1d5db" strokeDasharray="4 2" />
                  <Line
                    type="monotone"
                    dataKey="profit"
                    stroke="#1e3a8a"
                    strokeWidth={2.5}
                    dot={{ r: 3.5, fill: "#1e3a8a" }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Session list */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Sessions ({sessions.length})
            </h3>

            {sessions.length === 0 && !fetchError && (
              <div className="text-center py-12 text-gray-400 text-sm border border-dashed border-gray-200 rounded-xl">
                No sessions logged yet. Hit <strong>+ Log Session</strong> to get started.
              </div>
            )}

            {[...sessions]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map(s => {
                const profit      = s.cashOut - s.buyIn
                const sessionBBHr = profit / s.bb / s.hours
                const isWin       = profit >= 0
                return (
                  <div
                    key={s.id}
                    className="border border-gray-200 rounded-xl p-4 bg-white flex items-start justify-between gap-4"
                  >
                    <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${isWin ? "bg-green-400" : "bg-red-400"}`} />
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm">{s.date}</span>
                        <span className="text-xs bg-blue-50 text-blue-800 border border-blue-100 px-2 py-0.5 rounded-full">
                          {s.stakes} NLH
                        </span>
                        <span className={`font-bold font-mono text-sm ${isWin ? "text-green-600" : "text-red-500"}`}>
                          {fmt(profit)}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400 flex flex-wrap gap-x-4 gap-y-0.5">
                        <span>Buy-in ${s.buyIn}</span>
                        <span>Cash-out ${s.cashOut}</span>
                        <span>{s.hours}h played</span>
                        <span>${(profit / s.hours).toFixed(2)}/hr</span>
                        <span>{sessionBBHr.toFixed(1)} BB/hr</span>
                      </div>
                      {s.notes && <p className="text-xs text-gray-400 italic truncate">{s.notes}</p>}
                    </div>
                    <div className="flex flex-col gap-1 flex-shrink-0 text-right">
                      <button onClick={() => openEdit(s)} className="text-xs text-blue-700 hover:underline">
                        Edit
                      </button>
                      {deleteConfirm === s.id ? (
                        <div className="flex gap-1">
                          <button onClick={() => handleDelete(s.id)} className="text-xs text-red-600 font-semibold hover:underline">
                            Confirm
                          </button>
                          <button onClick={() => setDeleteConfirm(null)} className="text-xs text-gray-400 hover:underline">
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => setDeleteConfirm(s.id)} className="text-xs text-red-400 hover:underline">
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                )
              })}
          </div>
        </>
      )}

      {/* Add / Edit modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl space-y-5">
            <h3 className="text-lg font-bold text-blue-800">
              {editingId ? "Edit Session" : "Log Session"}
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wide">Date</label>
                <input
                  type="date"
                  value={form.date}
                  onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wide">Stakes</label>
                <select
                  value={form.stakes}
                  onChange={e => setForm(f => ({ ...f, stakes: e.target.value }))}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800"
                >
                  {STAKES_OPTIONS.map(o => (
                    <option key={o.label} value={o.label}>{o.label} NLH</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide">Buy-in ($)</label>
                  <input
                    type="number" min="0"
                    value={form.buyIn}
                    onChange={e => setForm(f => ({ ...f, buyIn: e.target.value }))}
                    placeholder="200"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wide">Cash-out ($)</label>
                  <input
                    type="number" min="0"
                    value={form.cashOut}
                    onChange={e => setForm(f => ({ ...f, cashOut: e.target.value }))}
                    placeholder="350"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800"
                  />
                </div>
              </div>

              {/* Live P&L preview */}
              {form.buyIn && form.cashOut && (
                <div className={`text-center text-sm font-mono font-semibold rounded-lg py-2 ${
                  parseFloat(form.cashOut) - parseFloat(form.buyIn) >= 0
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-500"
                }`}>
                  {fmt(parseFloat(form.cashOut) - parseFloat(form.buyIn))}
                </div>
              )}

              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wide">Duration (hours)</label>
                <input
                  type="number" min="0.5" step="0.5"
                  value={form.hours}
                  onChange={e => setForm(f => ({ ...f, hours: e.target.value }))}
                  placeholder="4"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800"
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wide">Notes (optional)</label>
                <textarea
                  value={form.notes}
                  onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                  placeholder="How'd it go?"
                  rows={2}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <button
                onClick={closeForm}
                className="flex-1 border border-gray-300 rounded-lg py-2.5 text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={!formValid}
                className="flex-1 bg-blue-800 text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {editingId ? "Save Changes" : "Log Session"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
