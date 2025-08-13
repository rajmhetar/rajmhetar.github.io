"use client"

import { useState } from "react"
import { Menu, X } from 'lucide-react'
import Link from "next/link"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-muted/20">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#65B891]">
          RM
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex gap-8 items-center">
          {["About", "Education", "Experience", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#65B891] transition-colors"
            >
              {item}
            </Link>
          ))}
          <div className="ml-4 w-8 h-8 rounded-full bg-[#65B891] flex items-center justify-center text-white font-bold">
            RM
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-[#65B891] flex items-center justify-center text-white font-bold text-xs">
            RM
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 border-b border-muted/20 md:hidden">
            <div className="flex flex-col p-4">
              {["About", "Education", "Experience", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="py-2 hover:text-[#65B891] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

