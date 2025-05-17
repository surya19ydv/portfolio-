"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function GraphicDesignProject() {
  const [activeTab, setActiveTab] = useState("food")

  const categories = [
    { id: "food", label: "Food & Restaurant" },
    { id: "hospitality", label: "Hospitality" },
    { id: "marketing", label: "Marketing" },
    { id: "digital", label: "Digital Services" },
    { id: "business", label: "Business Cards" },
    { id: "finance", label: "Finance" },
  ]

  const designs = {
    food: [
      { src: "/images/gallery/img3.png", alt: "Food Menu" },
      { src: "/images/gallery/img9.png", alt: "Special Food" },
      { src: "/images/gallery/img14.png", alt: "Special Food Menu" },
    ],
    hospitality: [
      { src: "/images/gallery/img5.png", alt: "Hotel Longding" },
      { src: "/images/gallery/img12.png", alt: "Hotels Longding" },
      { src: "/images/gallery/img15.png", alt: "Beach Resort" },
    ],
    marketing: [
      { src: "/images/gallery/img1.png", alt: "Delivery Service" },
      { src: "/images/gallery/img2.png", alt: "Zomato Delivery" },
      { src: "/images/gallery/img11.png", alt: "Free Delivery" },
    ],
    digital: [
      { src: "/images/gallery/img7.png", alt: "DigiHand Web Development" },
      { src: "/images/gallery/img13.png", alt: "Digital Marketing Agency" },
      { src: "/images/gallery/img16.png", alt: "Website Development" },
    ],
    business: [
      { src: "/images/gallery/img29.jpeg", alt: "Imran Sable - CypherSOL" },
      { src: "/images/gallery/img30.jpeg", alt: "CypherSOL Fintech" },
      { src: "/images/gallery/img31.jpeg", alt: "Creative FinServe" },
      { src: "/images/gallery/img32.jpeg", alt: "Sumit Rawal - Sales Executive" },
      { src: "/images/gallery/img33.png", alt: "Financial Services" },
      { src: "/images/gallery/img34.png", alt: "Investment Solutions" },
      { src: "/images/gallery/img35.png", alt: "Banking Services" },
    ],
    finance: [
      { src: "/images/gallery/img36.png", alt: "Marketing Campaign" },
      { src: "/images/gallery/img37.png", alt: "Digital Promotion" },
      { src: "/images/gallery/img38.png", alt: "Web Design Concept" },
      { src: "/images/gallery/img9.png", alt: "Special Food" },
      { src: "/images/gallery/img39.png", alt: "Mobile App Design" },
      { src: "/images/gallery/img40.png", alt: "Branding Materials" },
      { src: "/images/gallery/img41.png", alt: "Corporate Identity" },
    ],
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-[#626F47] mb-6">Marketing & Branding Portfolio</h2>

      <p className="text-gray-700 mb-8">
        A comprehensive collection of marketing materials, promotional designs, and branding work for restaurants,
        hotels, and digital services. These designs showcase my ability to create visually appealing and effective
        marketing collateral that drives customer engagement and business growth.
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-[#626F47] data-[state=active]:text-white"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {designs[category.id as keyof typeof designs].map((design, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={design.src || "/placeholder.svg"}
                      alt={design.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#626F47]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-medium text-lg">{design.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8 bg-[#F5F5F5] p-6 rounded-lg">
        <h3 className="text-xl font-bold text-[#626F47] mb-4">Design Process</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#FFCF50] rounded-full flex items-center justify-center mb-3">
              <span className="font-bold text-[#626F47]">1</span>
            </div>
            <h4 className="font-bold text-[#626F47] mb-2">Research</h4>
            <p className="text-sm text-gray-600">Understanding client needs and target audience</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#FFCF50] rounded-full flex items-center justify-center mb-3">
              <span className="font-bold text-[#626F47]">2</span>
            </div>
            <h4 className="font-bold text-[#626F47] mb-2">Concept</h4>
            <p className="text-sm text-gray-600">Creating initial design concepts and mockups</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#FFCF50] rounded-full flex items-center justify-center mb-3">
              <span className="font-bold text-[#626F47]">3</span>
            </div>
            <h4 className="font-bold text-[#626F47] mb-2">Refinement</h4>
            <p className="text-sm text-gray-600">Iterating based on feedback and improving designs</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#FFCF50] rounded-full flex items-center justify-center mb-3">
              <span className="font-bold text-[#626F47]">4</span>
            </div>
            <h4 className="font-bold text-[#626F47] mb-2">Delivery</h4>
            <p className="text-sm text-gray-600">Finalizing designs and preparing for distribution</p>
          </div>
        </div>
      </div>
    </div>
  )
}
