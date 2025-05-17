"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  texts: string[]
  delay?: number
}

export function Typewriter({ texts, delay = 150 }: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentFullText = texts[currentTextIndex]

        if (!isDeleting) {
          // Typing
          setCurrentText(currentFullText.substring(0, currentText.length + 1))

          // If we've typed the full text, start deleting after a pause
          if (currentText === currentFullText) {
            setTimeout(() => {
              setIsDeleting(true)
            }, 1000)
          }
        } else {
          // Deleting
          setCurrentText(currentFullText.substring(0, currentText.length - 1))

          // If we've deleted everything, move to the next text
          if (currentText === "") {
            setIsDeleting(false)
            setCurrentTextIndex((currentTextIndex + 1) % texts.length)
          }
        }
      },
      isDeleting ? delay / 2 : delay,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, delay, isDeleting, texts])

  return (
    <div className="inline-block">
      {currentText}
      <span className="animate-blink">|</span>
    </div>
  )
}
