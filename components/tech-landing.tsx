"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Typewriter } from "./typewriter"

export function TechLanding() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = `rgba(164, 180, 101, ${Math.random() * 0.5 + 0.2})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, Math.floor((canvas.width * canvas.height) / 9000))

    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle())
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = "rgba(164, 180, 101, 0.05)"
      ctx.lineWidth = 1
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] z-0"></canvas>

      {/* Cloud Infrastructure Illustration */}
      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-70 pointer-events-none">
        <div className="relative w-full max-w-3xl aspect-video">
          <Image src="/images/cloud-infra.png" alt="Cloud Infrastructure" fill className="object-contain" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Cloud Solutions</h1>
        <div className="text-xl md:text-3xl font-light mb-8 h-12 text-[#FFCF50]">
          <Typewriter
            texts={["Infrastructure as Code", "CI/CD Pipelines", "Cloud Architecture", "DevOps Solutions"]}
            delay={150}
          />
        </div>
        <p className="text-[#FEFAE0] max-w-2xl mx-auto mb-8 text-lg">
          Specialized in building scalable, resilient cloud infrastructure and implementing modern DevOps practices for
          seamless deployment and operation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#FFCF50] hover:bg-[#A4B465] text-[#1a1a2e] font-bold py-3 px-8 rounded-full transition-colors duration-300">
            View Projects
          </button>
          <button className="bg-transparent hover:bg-[#A4B465]/20 text-[#FEFAE0] border-2 border-[#A4B465] font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}
