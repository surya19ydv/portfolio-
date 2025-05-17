"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, LinkIcon, ExternalLink, X, ChevronLeft, ChevronRight, Maximize2, Download } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface PortfolioItem {
  id: number
  title: string
  category: string
  thumbnail: string
  description: string
  technologies: string[]
  images: string[]
  video?: string
  link?: string
  github?: string
}

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

export function PortfolioSection() {
  const [open, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("overview")
  const [galleryView, setGalleryView] = useState(false)
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<GalleryImage | null>(null)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)
  const [slideshow, setSlideshow] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  // Portfolio project items
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      thumbnail: "/images/gallery/image11.png",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, payment integration, and user authentication.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS S3"],
      images: ["/images/ecommerce-1.jpg", "/images/ecommerce-2.jpg", "/images/ecommerce-3.jpg"],
      video: "/videos/ecommerce-demo.mp4",
      link: "https://example.com/ecommerce",
      github: "https://github.com/username/ecommerce",
    },
    {
      id: 2,
      title: "Cloud Migration Project",
      category: "AWS",
      thumbnail: "/images/gallery/image11.png",
      description:
        "Migration of a legacy application to AWS cloud infrastructure with improved scalability, security, and performance.",
      technologies: ["AWS EC2", "RDS", "S3", "CloudFront", "Route53", "Terraform"],
      images: ["/images/cloud-1.jpg", "/images/cloud-2.jpg", "/images/cloud-3.jpg"],
      github: "https://github.com/username/cloud-migration",
    },
    {
      id: 3,
      title: "Task Management App",
      category: "Web Development",
      thumbnail: "/images/gallery/image11.png",
      description:
        "A responsive task management application with real-time updates, team collaboration, and progress tracking.",
      technologies: ["React", "Firebase", "Material UI", "PWA"],
      images: ["/images/task-1.jpg", "/images/task-2.jpg", "/images/task-3.jpg"],
      video: "/videos/task-app-demo.mp4",
      github: "https://github.com/username/task-manager",
      link: "https://example.com/task-app",
    },
    {
      id: 4,
      title: "Marketing & Branding Portfolio",
      category: "Graphic Design",
      thumbnail: "/images/gallery/img11.png",
      description:
        "A comprehensive collection of marketing materials, promotional designs, and branding work for restaurants, hotels, and digital services. These designs showcase my ability to create visually appealing and effective marketing collateral that drives customer engagement and business growth.",
      technologies: ["Photoshop", "Illustrator", "Canva", "InDesign", "Figma", "Brand Strategy"],
      images: [
        "/images/gallery/img11.png",
        "/images/gallery/img2.png",
        "/images/gallery/img14.png",
        "/images/gallery/img7.png",
        "/images/gallery/img9.png",
        "/images/gallery/img15.png",
        "/images/gallery/img12.png",
        "/images/gallery/img5.png",
        "/images/gallery/img29.jpeg",
        "/images/gallery/img30.jpeg",
        "/images/gallery/img31.jpeg",
        "/images/gallery/img32.jpeg",
        "/images/gallery/img33.png",
        "/images/gallery/img34.png",
        "/images/gallery/img35.png",
        "/images/gallery/img36.png",
        "/images/gallery/img37.png",
        "/images/gallery/img38.png",
        "/images/gallery/img9.png",
        "/images/gallery/img39.png",
        "/images/gallery/img40.png",
        "/images/gallery/img41.png",
        "/images/gallery/img6.png",
        "/images/gallery/img1.png",
        "/images/gallery/img17.png",
        "/images/gallery/img18.png",
        "/images/gallery/img19.png",
        "/images/gallery/img20.png",
        "/images/gallery/img21.png",
        "/images/gallery/img22.png",
        "/images/gallery/img23.png",
        "/images/gallery/img24.png",
        "/images/gallery/img25.png",
        "/images/gallery/img26.png",
      ],
      link: "https://example.com/design-portfolio",
    },
    {
      id: 5,
      title: "Video Editing Showcase",
      category: "Video Editing",
      thumbnail: "/images/gallery/image11.png",
      description: "A showcase of video editing projects including promotional videos, tutorials, and animations.",
      technologies: ["Filmora", "Premiere Pro", "After Effects", "DaVinci Resolve"],
      images: ["/images/video-1.jpg", "/images/video-2.jpg", "/images/video-3.jpg"],
      video: "/videos/video-editing-demo.mp4",
      link: "https://example.com/video-portfolio",
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "Web Development",
      thumbnail: "/images/gallery/image11.png",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      images: ["/images/portfolio-web-1.jpg", "/images/portfolio-web-2.jpg", "/images/portfolio-web-3.jpg"],
      link: "https://example.com/portfolio",
      github: "https://github.com/username/portfolio",
    },
  ]

  // Gallery images
  const galleryImages: GalleryImage[] = [
    { id: 1, src: "/images/gallery/img1.png", alt: "Delivery Service", category: "Marketing" },
    { id: 2, src: "/images/gallery/img2.png", alt: "Zomato Delivery", category: "Marketing" },
    { id: 3, src: "/images/gallery/img3.png", alt: "Food Menu", category: "Food" },
    { id: 4, src: "/images/gallery/img4.png", alt: "Home Loan", category: "Real Estate" },
    { id: 5, src: "/images/gallery/img5.png", alt: "Hotel Longding", category: "Hospitality" },
    { id: 6, src: "/images/gallery/img6.png", alt: "Home Delivery", category: "Marketing" },
    { id: 7, src: "/images/gallery/img7.png", alt: "DigiHand Web Development", category: "Digital Services" },
    { id: 8, src: "/images/gallery/img8.png", alt: "Hotel Booking", category: "Hospitality" },
    { id: 9, src: "/images/gallery/img9.png", alt: "Special Food", category: "Food" },
    { id: 10, src: "/images/gallery/img10.png", alt: "Weekend Menu", category: "Food" },
    { id: 11, src: "/images/gallery/img11.png", alt: "Free Delivery", category: "Marketing" },
    { id: 12, src: "/images/gallery/img12.png", alt: "Hotels Longding", category: "Hospitality" },
    { id: 13, src: "/images/gallery/img13.png", alt: "Digital Marketing Agency", category: "Digital Services" },
    { id: 14, src: "/images/gallery/img14.png", alt: "Special Food Menu", category: "Food" },
    { id: 15, src: "/images/gallery/img15.png", alt: "Beach Resort", category: "Hospitality" },
    { id: 16, src: "/images/gallery/img16.png", alt: "Website Development", category: "Digital Services" },
    { id: 17, src: "/images/gallery/img17.png", alt: "Home Decor", category: "Retail" },
    { id: 18, src: "/images/gallery/img18.png", alt: "CypherSOL Bank Statement Analyzer", category: "Finance" },
    { id: 19, src: "/images/gallery/img19.png", alt: "Mortgaged Loan", category: "Finance" },
    { id: 20, src: "/images/gallery/img20.png", alt: "Egg Rice Bowl", category: "Food" },
    { id: 21, src: "/images/gallery/img21.png", alt: "Small Business Loans", category: "Finance" },
    { id: 22, src: "/images/gallery/img22.png", alt: "School Admission", category: "Education" },
    { id: 23, src: "/images/gallery/img23.png", alt: "Brine Shell Resort", category: "Hospitality" },
    { id: 24, src: "/images/gallery/img24.png", alt: "Food Delivery Service", category: "Food" },
    { id: 25, src: "/images/gallery/img25.png", alt: "Uttam Snacks Menu", category: "Food" },
    { id: 26, src: "/images/gallery/img26.png", alt: "The Blooming Story", category: "Retail" },
    { id: 27, src: "/images/gallery/img29.jpeg", alt: "Imran Sable - CypherSOL", category: "Business Cards" },
    { id: 28, src: "/images/gallery/img30.jpeg", alt: "CypherSOL Fintech", category: "Business Cards" },
    { id: 29, src: "/images/gallery/img31.jpeg", alt: "Creative FinServe", category: "Business Cards" },
    { id: 30, src: "/images/gallery/img32.jpeg", alt: "Sumit Rawal - Sales Executive", category: "Business Cards" },
    { id: 31, src: "/images/gallery/img33.png", alt: "Financial Services", category: "Finance" },
    { id: 32, src: "/images/gallery/img34.png", alt: "Investment Solutions", category: "Finance" },
    { id: 33, src: "/images/gallery/img35.png", alt: "Banking Services", category: "Finance" },
    { id: 34, src: "/images/gallery/img36.png", alt: "Marketing Campaign", category: "Finance" },
    { id: 35, src: "/images/gallery/img37.png", alt: "Digital Promotion", category: "Finance" },
    { id: 36, src: "/images/gallery/img38.png", alt: "Web Design Concept", category: "Finance" },
    { id: 37, src: "/images/gallery/img39.png", alt: "Mobile App Design", category: "Finance" },
    { id: 38, src: "/images/gallery/img40.png", alt: "Branding Materials", category: "Finance" },
    { id: 39, src: "/images/gallery/img41.png", alt: "Corporate Identity", category: "Finance" },
  ]

  const categories = ["All", "Web Development", "AWS", "Graphic Design", ...new Set(portfolioItems.map((item) => item.category).filter(cat => cat !== "Web Development" && cat !== "AWS" && cat !== "Graphic Design"))]
  const galleryCategories = ["All", ...new Set(galleryImages.map((item) => item.category))]

  const [activeCategory, setActiveCategory] = useState("All")
  const [activeGalleryCategory, setActiveGalleryCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  const filteredGalleryImages =
    activeGalleryCategory === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeGalleryCategory)

  const handleItemClick = (item: PortfolioItem) => {
    // If it's a Graphic Design item, open the first image directly in lightbox
    if (item.category === "Graphic Design") {
      setSelectedItem(item)
      setCurrentImageIndex(0)
      setLightboxOpen(true)
    } else {
      // For other categories, open the modal with details
      setSelectedItem(item)
      setActiveTab("overview") // Reset to overview tab when opening a new item
      setOpen(true)
    }
  }

  const openLightbox = (index: number) => {
    if (selectedItem) {
      setCurrentImageIndex(index)
      setLightboxOpen(true)
    }
  }

  const openGalleryLightbox = (image: GalleryImage, index: number) => {
    setSelectedGalleryImage(image)
    setCurrentGalleryIndex(index)
    setLightboxOpen(true)
    setSlideshow(false)
  }

  const nextImage = () => {
    if (galleryView && filteredGalleryImages.length > 0) {
      setCurrentGalleryIndex((prev) => (prev + 1) % filteredGalleryImages.length)
      setSelectedGalleryImage(filteredGalleryImages[(currentGalleryIndex + 1) % filteredGalleryImages.length])
    } else if (selectedItem) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedItem.images.length)
    }
  }

  const prevImage = () => {
    if (galleryView && filteredGalleryImages.length > 0) {
      setCurrentGalleryIndex((prev) => (prev - 1 + filteredGalleryImages.length) % filteredGalleryImages.length)
      setSelectedGalleryImage(
        filteredGalleryImages[(currentGalleryIndex - 1 + filteredGalleryImages.length) % filteredGalleryImages.length],
      )
    } else if (selectedItem) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length)
    }
  }

  const toggleSlideshow = () => {
    setSlideshow(!slideshow)
  }

  useEffect(() => {
    let slideshowTimer: NodeJS.Timeout

    if (slideshow && lightboxOpen) {
      slideshowTimer = setTimeout(() => {
        nextImage()
      }, 3000)
    }

    return () => {
      if (slideshowTimer) clearTimeout(slideshowTimer)
    }
  }, [slideshow, lightboxOpen, currentGalleryIndex, currentImageIndex])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (lightboxOpen) {
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "s") toggleSlideshow()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [lightboxOpen, selectedItem, currentImageIndex, galleryView, currentGalleryIndex, filteredGalleryImages])

  const handleTabChange = (value: string) => {
    setActiveTab(value)

    // Add a small delay to ensure the tab content is rendered before scrolling
    setTimeout(() => {
      if (value === "gallery" && galleryRef.current) {
        galleryRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  const downloadImage = () => {
    const imageSrc =
      galleryView && selectedGalleryImage ? selectedGalleryImage.src : selectedItem?.images[currentImageIndex]

    if (imageSrc) {
      const link = document.createElement("a")
      link.href = imageSrc
      link.download = imageSrc.split("/").pop() || "image.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  // Function to organize gallery images by category for better display
  const organizeGalleryByCategory = () => {
    const categories = [...new Set(filteredGalleryImages.map((img) => img.category))]
    return categories.map((category) => ({
      category,
      images: filteredGalleryImages.filter((img) => img.category === category),
    }))
  }

  const organizedGallery = organizeGalleryByCategory()

  return (
    <section id="portfolio" className="py-20 bg-[#A4B465]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#626F47]">Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check out some of my recent projects showcasing my skills in web development, cloud architecture, graphic
            design, and video editing.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setGalleryView(false)}
              className={`px-4 py-2 rounded-md transition-colors ${!galleryView ? "bg-[#626F47] text-white" : "bg-transparent text-gray-700 hover:bg-gray-100"
                }`}
            >
              Projects
            </button>
            <button
              onClick={() => setGalleryView(true)}
              className={`px-4 py-2 rounded-md transition-colors ${galleryView ? "bg-[#626F47] text-white" : "bg-transparent text-gray-700 hover:bg-gray-100"
                }`}
            >
              Gallery
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-lg shadow-sm">
            {galleryView
              ? galleryCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveGalleryCategory(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${activeGalleryCategory === category
                    ? "bg-[#626F47] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {category}
                </button>
              ))
              : categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${activeCategory === category
                    ? "bg-[#626F47] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {category}
                </button>
              ))}
          </div>
        </div>

        {/* Portfolio Grid or Gallery Grid */}
        <AnimatePresence mode="wait">
          {galleryView ? (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeGalleryCategory === "All" ? (
                // Organized by category when showing "All"
                <div className="space-y-12">
                  {organizedGallery.map((categoryGroup, groupIndex) => (
                    <div key={groupIndex}>
                      <h3 className="text-xl font-bold text-[#626F47] mb-4 border-b border-[#A4B465]/30 pb-2">
                        {categoryGroup.category}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryGroup.images.map((image, index) => (
                          <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group relative overflow-hidden rounded-lg shadow-md bg-white cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                            onClick={() => openGalleryLightbox(image, filteredGalleryImages.indexOf(image))}
                          >
                            <div className="relative h-64 overflow-hidden">
                              <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-[#626F47]/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-[#FFCF50] mb-4">{image.category}</p>
                                <div className="flex space-x-2">
                                  <button className="bg-[#FFCF50] text-[#626F47] p-2 rounded-full">
                                    <Maximize2 size={16} />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="font-bold text-[#626F47]">{image.alt}</h3>
                              <p className="text-sm text-gray-500">{image.category}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Simple grid when filtered by category
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGalleryImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group relative overflow-hidden rounded-lg shadow-md bg-white cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                      onClick={() => openGalleryLightbox(image, index)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#626F47]/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-[#FFCF50] mb-4">{image.category}</p>
                          <div className="flex space-x-2">
                            <button className="bg-[#FFCF50] text-[#626F47] p-2 rounded-full">
                              <Maximize2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-[#626F47]">{image.alt}</h3>
                        <p className="text-sm text-gray-500">{image.category}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: item.id * 0.05 }}
                  className="group relative overflow-hidden rounded-lg shadow-md bg-white cursor-pointer transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#626F47]/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-xl font-bold text-center px-4">{item.title}</h3>
                      <p className="text-[#FFCF50] mb-4">{item.category}</p>
                      <div className="flex space-x-2">
                        <button className="bg-[#FFCF50] text-[#626F47] p-2 rounded-full">
                          {item.category === "Graphic Design" ? <Maximize2 size={16} /> : <Plus size={16} />}
                        </button>
                        {item.link && (
                          <button className="bg-[#FFCF50] text-[#626F47] p-2 rounded-full">
                            <LinkIcon size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#626F47]">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Portfolio Item Modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent ref={modalRef} className="max-w-4xl w-[90vw] max-h-[90vh] overflow-y-auto">
            {selectedItem && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-[#626F47]">{selectedItem.title}</DialogTitle>
                  <DialogDescription className="text-[#A4B465]">{selectedItem.category}</DialogDescription>
                </DialogHeader>

                <Tabs value={activeTab} onValueChange={handleTabChange} className="mt-4">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="gallery">Gallery</TabsTrigger>
                    {selectedItem.video && <TabsTrigger value="video">Video Demo</TabsTrigger>}
                  </TabsList>

                  <TabsContent value="overview" className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold mb-2 text-[#626F47]">Project Description</h4>
                        <p className="text-gray-700 mb-4">{selectedItem.description}</p>

                        <h4 className="text-lg font-semibold mb-2 text-[#626F47]">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {selectedItem.technologies.map((tech, index) => (
                            <span key={index} className="bg-[#A4B465]/20 text-[#626F47] px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                          {selectedItem.link && (
                            <a
                              href={selectedItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-[#626F47] text-white px-4 py-2 rounded-md hover:bg-[#A4B465] transition-colors"
                            >
                              <ExternalLink size={16} />
                              Visit Project
                            </a>
                          )}
                          {selectedItem.github && (
                            <a
                              href={selectedItem.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-[#FFCF50] text-[#626F47] px-4 py-2 rounded-md hover:bg-[#FFCF50]/80 transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-github"
                              >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                              </svg>
                              View Code
                            </a>
                          )}
                        </div>
                      </div>

                      <div>
                        <div className="relative h-48 rounded-lg overflow-hidden">
                          <Image
                            src={selectedItem.thumbnail || "/placeholder.svg"}
                            alt={selectedItem.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <button
                          onClick={() => handleTabChange("gallery")}
                          className="w-full mt-4 text-center text-[#626F47] hover:text-[#A4B465] transition-colors"
                        >
                          View Gallery →
                        </button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="gallery" className="mt-4" ref={galleryRef}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedItem.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative h-48 rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                          onClick={() => openLightbox(index)}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${selectedItem.title} screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Plus className="text-white" size={24} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  {selectedItem.video && (
                    <TabsContent value="video" className="mt-4">
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <video controls className="w-full h-full" poster={selectedItem.thumbnail}>
                          <source src={selectedItem.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </TabsContent>
                  )}
                </Tabs>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Lightbox for full-screen image viewing */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
            tabIndex={0}
          >
            <div className="absolute top-4 right-4 flex space-x-2 z-10">
              <button
                className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors flex items-center gap-2"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleSlideshow()
                }}
                title={slideshow ? "Pause slideshow" : "Start slideshow"}
              >
                {slideshow ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-pause"
                  >
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                )}
              </button>

              <button
                className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  downloadImage()
                }}
                title="Download image"
              >
                <Download size={24} />
              </button>

              <button
                className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setLightboxOpen(false)
                }}
                title="Close"
              >
                <X size={24} />
              </button>
            </div>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="relative w-full max-w-5xl h-[80vh] mx-4">
              {galleryView && selectedGalleryImage ? (
                <>
                  <Image
                    src={selectedGalleryImage.src || "/placeholder.svg"}
                    alt={selectedGalleryImage.alt}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm bg-black/50 py-2">
                    <p className="font-medium">{selectedGalleryImage.alt}</p>
                    <p className="text-xs mt-1">
                      {currentGalleryIndex + 1} / {filteredGalleryImages.length}
                    </p>
                  </div>
                </>
              ) : selectedItem ? (
                <>
                  <Image
                    src={selectedItem.images[currentImageIndex] || "/placeholder.svg"}
                    alt={`${selectedItem.title} full view`}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm bg-black/50 py-2">
                    <p className="font-medium">
                      {selectedItem.title} - Image {currentImageIndex + 1}
                    </p>
                    <p className="text-xs mt-1">
                      {currentImageIndex + 1} / {selectedItem.images.length}
                    </p>
                  </div>
                </>
              ) : null}
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
