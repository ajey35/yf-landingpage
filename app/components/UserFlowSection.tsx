import React from "react"

interface Step {
  number: number
  title: string
  description: string
  imgAlt: string
  imgSrc: string
}

const steps: Step[] = [
  {
    number: 1,
    title: "Select Yumi at Checkout",
    description: "Choose 'Pay in 4 with crypto' as your method during checkout. Simple and secure.",
    imgAlt: "Step 1: Checkout",
    imgSrc: "/userflow1.png",
  },
  {
    number: 2,
    title: "Instant Credit Check",
    description: "Get soft-checked with no score impact. Instant eligibility with DeFi security.",
    imgAlt: "Step 2: Credit Check",
    imgSrc: "/userflow2.png",
  },
  {
    number: 3,
    title: "Split & Earn Yield",
    description: "Pay in 4 interest-free installments while earning yield on deposits.",
    imgAlt: "Step 3: Installments & Yield",
    imgSrc: "/userflow3.png",
  },
]

function StepCard({ step, delay }: { step: Step; delay: number }) {
  return (
    <div
      className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center transition-premium hover:scale-[1.03] hover:shadow-[0_10px_60px_rgba(201,242,153,0.13)] group scroll-reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-[#C9F299]/60 to-[#A8E063]/60 text-[#232323] font-bold text-xl mb-4 shadow-inner border-2 border-[#C9F299]/30">
        {step.number}
      </div>
      <div className="relative w-[240px] h-[480px] sm:w-[280px] sm:h-[560px] lg:w-[320px] lg:h-[640px] overflow-hidden rounded-xl bg-[#1a1a1a]/70 shadow-inner mb-6">
        <img
          src={step.imgSrc}
          alt={step.imgAlt}
          className="w-full h-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 leading-tight group-hover:text-gradient transition-smooth">{step.title}</h3>
      <p className="text-sm sm:text-base text-gray-400 max-w-xs mx-auto leading-relaxed group-hover:text-gray-300 transition-smooth">{step.description}</p>
    </div>
  )
}

export default function UserFlowSection() {
  return (
    <section className="relative w-full bg-black py-24 sm:py-32 px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Ambient blur blobs */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#C9F299]/10 rounded-full blur-[120px] opacity-60 animate-float-slow z-0"></div>
      <div className="absolute bottom-0 -right-20 w-64 h-64 bg-[#A8E063]/10 rounded-full blur-[100px] opacity-50 animate-float-slower z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight scroll-reveal">
          Effortless <span className="text-gradient">User Flow</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-16 max-w-2xl mx-auto scroll-reveal">
          Experience a seamless journey from checkout to earning yield. Yumi makes every step intuitive and rewarding.
        </p>
        <div className="relative w-full">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#C9F299]/20 via-[#A8E063]/10 to-transparent -z-10" style={{transform: 'translateY(-50%)'}}></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {steps.map((step, idx) => (
              <StepCard key={step.number} step={step} delay={idx * 200} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}