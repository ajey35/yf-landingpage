"use client"
import React, { useEffect } from "react"

const features = [
  {
    text: "2× less fees than VISA and 3× than Klarna/Affirm — bypassing all the middlemen.",
  },
  {
    text: "Non-custodial, secure, transparent, blazing fast settlement with capital efficiency.",
  },
  {
    text: "Robust underwriting via zkTLS and novel data sources — unmatched risk profiling.",
  },
]

export default function WhyWeWinSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("revealed")) {
            const delay = entry.target.getAttribute("data-delay")
            setTimeout(() => {
              entry.target.classList.add("revealed")
            }, parseInt(delay || "0"))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    )

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative w-full bg-black py-24 px-4 sm:px-6 lg:px-20 overflow-hidden font-sans">
      {/* Ambient Glow */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#C9F299]/10 rounded-full blur-[120px] opacity-60 animate-float-slow z-0" />
      <div className="absolute bottom-0 -right-20 w-64 h-64 bg-[#A8E063]/10 rounded-full blur-[100px] opacity-50 animate-float-slower z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2
          className="text-[#C9F299] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 scroll-reveal"
          data-delay="0"
        >
          Why We Win
        </h2>

        <p
          className="text-white text-base sm:text-lg lg:text-xl mb-16 max-w-3xl mx-auto scroll-reveal"
          data-delay="100"
        >
          Yumi is a fully on-chain “Buy Now, Pay Later” solution — letting you never pay full price again,
          powered by decentralized yield.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out 
                rounded-2xl bg-white/[0.025] border border-white/10 backdrop-blur-lg 
                shadow-[0_8px_30px_rgba(201,242,153,0.04)] px-6 py-8 md:px-8 md:py-10 
                hover:bg-white/[0.05] hover:shadow-[0_12px_40px_rgba(201,242,153,0.08)] 
                transform hover:-translate-y-1"
              data-delay={150 + idx * 150}
            >
              <span className="text-[#C9F299] text-3xl lg:text-4xl font-semibold mb-4 block leading-none">*</span>
              <p className="text-white text-base sm:text-lg font-medium leading-relaxed tracking-tight">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
