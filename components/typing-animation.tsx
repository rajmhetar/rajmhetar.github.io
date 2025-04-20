"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  phrases: string[]
}

export function TypingAnimation({ phrases }: TypingAnimationProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex]
    
    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        return
      }

      const timer = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1))
      }, Math.random() * 50 + 30) // Random delete speed between 30-80ms

      return () => clearTimeout(timer)
    } else {
      if (currentText === phrase) {
        const timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2000) // Wait 2s before starting to delete

        return () => clearTimeout(timer)
      }

      const timer = setTimeout(() => {
        setCurrentText(phrase.slice(0, currentText.length + 1))
      }, Math.random() * 100 + 50) // Random typing speed between 50-150ms

      return () => clearTimeout(timer)
    }
  }, [currentText, isDeleting, currentPhraseIndex, phrases])

  return (
    <div className="min-h-[2em] flex items-center justify-center">
      <span className="text-2xl md:text-3xl font-medium">
        I am a{" "}
        <span className="text-[#65B891] font-bold relative">
          {currentText}
          <span className="absolute -right-1 top-0 border-r-2 border-[#65B891] h-full animate-blink" />
        </span>
      </span>
    </div>
  )
}

