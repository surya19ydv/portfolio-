"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } bg-[#FFCF50] hover:bg-[#626F47] hover:text-white text-[#626F47] p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  )
}
