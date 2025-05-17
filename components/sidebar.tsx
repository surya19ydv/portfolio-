"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SocialIcons } from "./social-icons"
import { Home, User, FileText, Briefcase, Server, Mail } from "lucide-react"

export function Sidebar() {
  const [activeLink, setActiveLink] = useState("home")

  const navLinks = [
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "resume", label: "Resume", icon: <FileText size={20} /> },
    { id: "portfolio", label: "Portfolio", icon: <Briefcase size={20} /> },
    { id: "services", label: "Services", icon: <Server size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ]

  return (
    <aside className="hidden lg:flex flex-col fixed top-0 left-0 bottom-0 w-[280px] bg-[#626F47] text-white z-50">
      <div className="flex flex-col items-center py-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#FFCF50] mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 hover:border-white">
          <Image
            src="/images/profile.jpeg"
            alt="Suryakala Yadav"
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-2xl font-bold">Suryakala Yadav</h1>
        <p className="text-sm text-white/80 mt-1">Software Developer & Designer</p>
        <div className="flex mt-4 space-x-2">
          <SocialIcons />
        </div>
      </div>

      <nav className="mt-8 flex-1">
        <ul className="space-y-2 px-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  activeLink === link.id ? "bg-[#A4B465] text-[#626F47] font-medium" : "hover:bg-[#A4B465]/20"
                }`}
                onClick={() => setActiveLink(link.id)}
              >
                <span className="mr-3">{link.icon}</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 text-sm text-center">© {new Date().getFullYear()} Suryakala Yadav</div>
    </aside>
  )
}
