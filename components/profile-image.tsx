"use client"

import Image from "next/image"

export function ProfileImage() {
  return (
    <div className="flex items-center justify-center h-[400px]">
      <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#65B891]">
        <Image 
          src="/images/profile.jpeg" 
          alt="Raj Mhetar" 
          fill 
          className="object-cover" 
          priority 
          sizes="(max-width: 768px) 100vw, 256px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
    </div>
  )
}

