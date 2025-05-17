"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SocialIcons } from "./social-icons"
import { Home, User, FileText, Briefcase, Server, Mail, Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "resume", label: "Resume", icon: <FileText size={20} /> },
    { id: "portfolio", label: "Portfolio", icon: <Briefcase size={20} /> },
    { id: "services", label: "Services", icon: <Server size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ]

  return (
    <div className="lg:hidden">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#626F47] text-white z-50 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#FFCF50] mr-3">
            <Image
              src="/images/profile.jpeg"
              alt="Suryakala Yadav"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-xl font-bold">Suryakala Yadav</h1>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="p-2" aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#626F47] z-40 pt-16 pb-6 px-4 overflow-y-auto">
          <nav className="mt-8">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`#${link.id}`}
                    className="flex items-center px-4 py-3 rounded-lg hover:bg-[#A4B465]/20 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-3">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 flex justify-center">
            <SocialIcons />
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16"></div>
    </div>
  )
}
