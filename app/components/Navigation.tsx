"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { ArrowRight, Menu, X, Sparkles } from "lucide-react"
import Link from "next/link"

const NAV_ITEMS = [
  { label: "Features", id: "features" },
  { label: "User Flow", id: "user-flow" },
  { label: "How it Works", id: "how-it-works-flow" },
  { label: "Why We Win", id: "why-we-win" },
  { label: "Go to Market", id: "go-to-market" },
  { label: "Our Team", id: "team" },
]
const MERCHANT_ITEM = { label: "For Merchants", href: "/merchant" }

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Helper to scroll to section after navigation
  const scrollToSectionAfterNav = (sectionId: string) => {
    setTimeout(() => {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const handleNavClick = (sectionId: string) => {
    if (pathname === "/") {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
        return
      }
    }
    // If not on home, navigate to home with hash, then scroll
    router.push(`/#${sectionId}`)
    setIsOpen(false)
    scrollToSectionAfterNav(sectionId)
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
            : 'bg-transparent'
        }`}
        style={{ 
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none' 
        }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer min-w-0" prefetch={false}>
              <div className="flex-shrink-0 flex items-center justify-center">
                <img
                  src="/image.png"
                  alt="Yumi Finance Logo"
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain drop-shadow-lg rounded-md bg-white/5 p-1 border border-white/10"
                  style={{ maxWidth: '2.5rem', height: 'auto' }}
                />
              </div>
              <div className="flex flex-col min-w-0 justify-center">
                <span className="text-title text-base sm:text-lg font-bold text-white group-hover:text-gradient transition-all duration-300 tracking-tight truncate">
                  Yumi Finance
                </span>
                <span className="text-caption text-xs text-[#C9F299]/70 font-medium tracking-wider hidden sm:block group-hover:text-[#C9F299] transition-colors duration-300 truncate">
                  BNPL REIMAGINED
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.id!)}
                  className="relative px-3 xl:px-4 py-2 text-xs sm:text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9F299] focus-visible:ring-offset-2"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#C9F299] to-[#A3E635] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </button>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* For Merchants - Desktop */}
              <Link
                href={MERCHANT_ITEM.href}
                className="hidden md:flex items-center px-4 py-2 text-xs sm:text-sm font-medium text-[#C9F299] border border-[#C9F299]/30 rounded-full hover:border-[#C9F299] hover:bg-[#C9F299]/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9F299] focus-visible:ring-offset-2"
              >
                {MERCHANT_ITEM.label}
              </Link>

              {/* Get Started Button - Desktop */}
              <button className="hidden md:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#C9F299] to-[#A3E635] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#C9F299]/25 hover:scale-105 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9F299] focus-visible:ring-offset-2">
                <span>Get Started</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative p-2 text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9F299] focus-visible:ring-offset-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-500 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-lg font-semibold text-white">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 px-6 py-6 space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.id!)}
                  className="group w-full text-left p-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.label}</span>
                    <ArrowRight 
                      size={16} 
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="p-6 space-y-4 border-t border-white/10">
              <Link
                href={MERCHANT_ITEM.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-center p-4 text-[#C9F299] border border-[#C9F299]/30 rounded-xl hover:border-[#C9F299] hover:bg-[#C9F299]/10 transition-all duration-300 font-medium"
              >
                {MERCHANT_ITEM.label}
              </Link>
              
              <button className="w-full flex items-center justify-center space-x-2 p-4 bg-gradient-to-r from-[#C9F299] to-[#A3E635] text-black font-semibold rounded-xl hover:shadow-lg hover:shadow-[#C9F299]/25 transition-all duration-300 group">
                <span>Get Started</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}