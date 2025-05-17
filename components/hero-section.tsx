"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Typewriter } from "./typewriter"
import { Github, Linkedin, Mail, ArrowDown, ExternalLink, User } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true)

    // Mouse move effect for subtle parallax
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.3}px)`,
  }
  
  const mouseParallaxStyle = {
    transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Gradient Background with more dynamic elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#626F47]/90 via-[#A4B465]/80 to-[#FFCF50]/30">
        {/* Animated shapes with improved animations */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#FFCF50]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#A4B465]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-1/3 w-56 h-56 bg-[#FFCF50]/5 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={parallaxStyle}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent bg-[size:50px_50px] bg-[position:0_0] [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div
            className="lg:col-span-3 space-y-6"
            style={{
              transform: isVisible ? "translateY(0)" : "translateY(2rem)",
              opacity: isVisible ? 1 : 0,
              transition: "all 0.8s ease-out",
            }}
          >
            <div className="inline-block px-5 py-1.5 bg-[#FFCF50]/20 backdrop-blur-sm rounded-full text-[#FFCF50] font-medium mb-3 border border-[#FFCF50]/30 shadow-lg transform hover:scale-105 transition-transform duration-300">
              <span className="animate-pulse-subtle mr-2">✦</span>Welcome to my portfolio<span className="animate-pulse-subtle ml-2">✦</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Suryakala Yadav</h1>
            <div className="text-xl md:text-3xl font-light mb-4 h-12">
              <Typewriter
                texts={["I'm a Software Developer", "I'm a Web Developer", "I'm a Graphic Designer"]}
                delay={150}
              />
            </div>
            <p className="text-lg text-white/80 mb-6 max-w-2xl">
              Software developer specializing in modern web applications and full-stack development. Focused on building scalable and efficient solutions.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#about"
                className="bg-gradient-to-r from-[#FFCF50] to-[#FFE082] hover:from-[#A4B465] hover:to-[#C5E1A5] text-[#626F47] font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <User size={18} />
                About Me
              </a>
              <a
                href="#portfolio"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/60 font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <ExternalLink size={18} />
                My Portfolio
              </a>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/surya19ydv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFCF50] transition-all duration-300 bg-white/10 hover:bg-white/20 p-3 rounded-full transform hover:scale-110 hover:rotate-6"
                aria-label="GitHub Profile"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/suryakala-y-86a9171a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FFCF50] transition-all duration-300 bg-white/10 hover:bg-white/20 p-3 rounded-full transform hover:scale-110 hover:rotate-6"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="mailto:yadavsuryakala517@gmail.com" 
                className="text-white hover:text-[#FFCF50] transition-all duration-300 bg-white/10 hover:bg-white/20 p-3 rounded-full transform hover:scale-110 hover:rotate-6"
                aria-label="Email Contact"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Enhanced Profile Image Section */}
          <div
            className="lg:col-span-2 relative transition-all duration-800 ease-out delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              ...(isVisible ? mouseParallaxStyle : { transform: "translateY(2rem)" })
            }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated background effects */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FFCF50] to-[#A4B465] blur-xl opacity-30 animate-pulse"></div>

              {/* Circular decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-[#FFCF50]/40 backdrop-blur-sm"></div>

              {/* Animated border */}
              <div className="absolute inset-4 rounded-full border-4 border-dashed border-[#FFCF50]/30 animate-spin-slow"></div>

              {/* Image container with rounded shape */}
              <div className="absolute inset-8 overflow-hidden rounded-full bg-[#626F47]/10 backdrop-blur-sm">
                <Image
                  src="/images/gallery/img.avif"
                  alt="Portfolio Landing Image"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#626F47]/40"></div>
              </div>

              {/* Decorative elements - small circles instead of squares */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#FFCF50] rounded-full shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#A4B465] rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-white/70 mb-2 tracking-wider font-light">Scroll Down</span>
          <div className="relative h-10 w-6 border-2 border-[#FFCF50]/50 rounded-full flex justify-center">
            <span className="absolute top-1 w-1.5 h-1.5 bg-[#FFCF50] rounded-full animate-scroll-down"></span>
          </div>
        </div>
      </div>
    </section>
  )
}
