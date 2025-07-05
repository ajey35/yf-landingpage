"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const TEAM = [
  {
    name: "Mikhail",
    role: "Co-Founder & CEO",
    desc: "ex. founder @ miki.digital, ex. Ooga Booga, AirCanada",
    img: "/placeholder-user.jpg",
  },
  {
    name: "Vlad",
    role: "Co-Founder & CTO",
    desc: "5+ years building complex DeFi on EVM & TON.",
    img: "/placeholder-user.jpg",
  },
  {
    name: "Alex",
    role: "Strategic Advisor",
    desc: "Co-Founder @ EVAA Protocol",
    img: "/placeholder-user.jpg",
  },
  {
    name: "Kevin",
    role: "Strategic Advisor",
    desc: "Co-Founder @ Ooga Booga",
    img: "/placeholder-user.jpg",
  },
  {
    name: "Dina",
    role: "Strategic Advisor",
    desc: "Partner @ Agnostic Fund. Ex-Bridgewater & Goldman Quant",
    img: "/placeholder-user.jpg",
  },
  {
    name: "Mark Hee",
    role: "Legal Advisor",
    desc: "Co-Founder @ Outlaw School of Law @ NYU & NUS",
    img: "/placeholder-user.jpg",
  },
]

export default function TeamSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    let isUserInteracting = false
  
    const handleMouseEnter = () => (isUserInteracting = true)
    const handleMouseLeave = () => (isUserInteracting = false)
  
    track?.addEventListener("mouseenter", handleMouseEnter)
    track?.addEventListener("mouseleave", handleMouseLeave)
  
    const interval = setInterval(() => {
      if (!track || isUserInteracting) return
      track.scrollLeft += 1
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0
      }
    }, 20)
  
    return () => {
      clearInterval(interval)
      track?.removeEventListener("mouseenter", handleMouseEnter)
      track?.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])
  

  const scrollBy = (amount: number) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: amount, behavior: "smooth" })
    }
  }

  return (
    <section
      id="team"
      className="relative w-full bg-gradient-to-br from-[#101a10] via-[#181c13] to-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-20 overflow-hidden"
    >
      {/* Enhanced Blurred & Animated Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-24 w-96 h-96 bg-[#C9F299]/20 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#A8E063]/20 rounded-full blur-[100px] animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 w-[60vw] h-[40vw] -translate-x-1/2 -translate-y-1/2 bg-white/5 rounded-full blur-[120px] opacity-40" />
        <div className="absolute top-10 right-1/4 w-40 h-40 bg-[#C9F299]/30 rounded-full blur-[60px] opacity-60 animate-float" />
        <div className="absolute bottom-10 left-1/4 w-32 h-32 bg-[#A8E063]/30 rounded-full blur-[50px] opacity-50 animate-float" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-[#C9F299] to-white bg-clip-text text-transparent">
              Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Exceptional talent driving innovation in decentralized finance
          </p>
        </div>

        
        {/* Team Carousel */}
        <div className="relative">
        <div
            id="team-track"
            ref={trackRef}
            className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide no-scrollbar"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)',
            }}
          >

            {/* Duplicate the array for infinite scroll */}
            {[...TEAM, ...TEAM].map((member, idx) => (
              <div
                key={`${member.name}-${idx}`}
                className="flex-shrink-0 w-80 group"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C9F299]/10">
                  {/* Avatar */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-[#C9F299]/50 bg-gradient-to-br from-[#C9F299]/20 to-white/10 flex items-center justify-center group-hover:border-[#C9F299] transition-colors duration-300">
                        {member.img && member.img !== "/placeholder-user.jpg" ? (
                          <Image
                            src={member.img}
                            alt={member.name}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <span className="text-2xl font-bold text-[#C9F299] group-hover:text-white transition-colors duration-300">
                            {member.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      {/* Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-[#C9F299]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </div>
                  </div>
                  
                  {/* Content - Fixed height containers to prevent overlap */}
                  <div className="text-center space-y-3">
                    <div className="h-7">
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#C9F299] transition-colors duration-300">
                        {member.name}
                      </h3>
                    </div>
                    
                    <div className="h-6">
                      <p className="text-[#C9F299] font-semibold text-sm">
                        {member.role}
                      </p>
                    </div>
                    
                    <div className="h-12 flex items-center justify-center">
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                        {member.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Bottom Accent */}
                  <div className="mt-6 h-1 w-full bg-gradient-to-r from-transparent via-[#C9F299]/30 to-transparent group-hover:via-[#C9F299] transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <div className="w-2 h-2 bg-[#C9F299] rounded-full animate-pulse" />
            <span>Auto-scrolling</span>
          </div>
        </div>
      </div>
    </section>
  )
}