"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  image: string
  text: string
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "CEO",
      company: "TechStart India",
      image: "/images/testimonial-1.jpg",
      text: "Suryakala delivered an exceptional website for our company. Her attention to detail and ability to understand our requirements was impressive. The design was modern and the functionality was exactly what we needed.",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Marketing Director",
      company: "Creative Solutions",
      image: "/images/testimonial-2.jpg",
      text: "Working with Suryakala was a pleasure. She created beautiful graphics and edited videos for our marketing campaign that exceeded our expectations. Her creativity and technical skills are top-notch.",
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Project Manager",
      company: "InnovateX",
      image: "/images/testimonial-3.jpg",
      text: "Suryakala's software development skills are exceptional. She built a complex application for us that was both user-friendly and robust. Her problem-solving abilities and attention to detail made the project a success.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-[#FEFAE0]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#626F47]">Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What my clients say about my work and collaboration experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="absolute top-6 left-6 text-[#FFCF50] opacity-20">
              <Quote size={60} />
            </div>

            <div className="relative z-10">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gray-700 text-lg mb-8 italic"
              >
                "{testimonials[currentIndex].text}"
              </motion.p>

              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#FFCF50]">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#626F47]">{testimonials[currentIndex].name}</h4>
                  <p className="text-[#A4B465]">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-[#626F47] text-white p-2 rounded-full hover:bg-[#A4B465] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#FFCF50]" : "bg-gray-300"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="bg-[#626F47] text-white p-2 rounded-full hover:bg-[#A4B465] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
