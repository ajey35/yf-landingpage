"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled ? "glass-nav backdrop-blur-xl bg-black/80 border-b border-white/10 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Enhanced Logo */}
          <div className="flex items-center group cursor-pointer min-w-0">
            {/* Logo Icon */}
            <div className="relative mr-3 flex-shrink-0 flex items-center justify-center">
              <img
                src="/image.png"
                alt="Yumi Finance Logo"
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain drop-shadow-lg rounded-md bg-white/5 p-1 border border-white/10"
                style={{ maxWidth: '3rem', height: 'auto' }}
              />
            </div>

            {/* Logo Text */}
            <div className="flex flex-col min-w-0">
              <span className="text-title text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300 tracking-tight truncate">
                Yumi Finance
              </span>
              <span className="text-caption text-xs text-[#C9F299]/70 font-medium tracking-wider hidden sm:block group-hover:text-[#C9F299] transition-colors duration-300 truncate">
                BNPL REIMAGINED
              </span>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { label: "Features", id: "features" },
              { label: "How it Works", id: "how-it-works" },
              { label: "For Merchants", href: "/merchant" },
            ].map((item, index) => (
              <div key={item.label} className="relative group">
                {item.href ? (
                  <a
                    href={item.href}
                    className="relative px-4 lg:px-6 py-2 lg:py-3 text-body text-sm lg:text-base font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 group"
                  >
                    {item.label}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#C9F299] to-[#A8E063] group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                  </a>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id!)}
                    className="relative px-4 lg:px-6 py-2 lg:py-3 text-body text-sm lg:text-base font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 group"
                  >
                    {item.label}
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#C9F299] to-[#A8E063] group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                  </button>
                )}
              </div>
            ))}

            {/* Enhanced CTA Button */}
            <div className="ml-4 lg:ml-6">
              <button className="group relative overflow-hidden btn-primary px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-body text-sm lg:text-base font-semibold focus-ring shadow-lg hover:shadow-[#C9F299]/30 transition-all duration-300">
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-3 rounded-xl hover:bg-white/5 transition-all duration-300 focus-ring group"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 top-2" : "top-0"
                }`}
              ></span>
              <span
                className={`absolute block w-5 h-0.5 bg-white rounded-full transition-all duration-300 top-2 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-2" : "top-4"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
          } overflow-hidden`}
        >
          <div className="glass-card border-t border-white/10 mt-4 rounded-2xl mx-2 mb-4 shadow-2xl">
            <div className="py-6 space-y-2">
              {[
                { label: "Features", id: "features" },
                { label: "How it Works", id: "how-it-works" },
                { label: "For Merchants", href: "/merchant" },
              ].map((item, index) => (
                <div key={item.label} className="relative group">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 text-body font-medium group"
                    >
                      <div className="flex items-center justify-between">
                        {item.label}
                        <ArrowRight
                          size={16}
                          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        />
                      </div>
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.id!)}
                      className="block w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 text-body font-medium group"
                    >
                      <div className="flex items-center justify-between">
                        {item.label}
                        <ArrowRight
                          size={16}
                          className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        />
                      </div>
                    </button>
                  )}
                </div>
              ))}

              <div className="px-6 pt-4">
                <button className="group relative overflow-hidden btn-primary w-full py-4 rounded-xl text-body font-semibold focus-ring shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
