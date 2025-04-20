"use client"

import { User } from "lucide-react"

export function ProfileImage() {
  return (
    <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted flex items-center justify-center">
      <User className="h-32 w-32 text-muted-foreground/50" />
    </div>
  )
}

