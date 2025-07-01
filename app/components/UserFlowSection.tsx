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
      className="group scroll-reveal flex flex-col items-center text-center bg-gradient-to-br from-[#232323]/80 to-[#181818]/80 border border-white/10 backdrop-blur-xl rounded-3xl shadow-[0_8px_40px_rgba(201,242,153,0.08)] p-5 sm:p-7 transition-all duration-500 hover:scale-[1.04] hover:shadow-[0_10px_60px_rgba(201,242,153,0.13)] relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative mb-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#C9F299] to-[#A8E063] shadow-lg animate-pulse">
          <span className="text-black font-bold text-2xl drop-shadow-lg">{step.number}</span>
        </div>
        <div className="absolute -inset-1 rounded-full border-2 border-[#C9F299]/30 animate-spin-slow pointer-events-none" />
      </div>

      <div className="relative w-[180px] h-[320px] sm:w-[220px] sm:h-[400px] lg:w-[260px] lg:h-[440px] overflow-hidden rounded-xl border border-white/10 bg-[#1a1a1a] shadow-inner mb-5">
        <img
          src={step.imgSrc}
          alt={step.imgAlt}
          className="w-full h-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 leading-tight">{step.title}</h3>
      <p className="text-sm sm:text-base text-gray-400 max-w-xs mx-auto leading-relaxed">{step.description}</p>
    </div>
  )
}

export default function UserFlowSection() {
  return (
    <section className="relative w-full bg-black py-20 sm:py-32 px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Ambient blur blobs */}
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#C9F299]/10 rounded-full blur-[120px] opacity-60 animate-float-slow z-0"></div>
      <div className="absolute bottom-0 -right-20 w-64 h-64 bg-[#A8E063]/10 rounded-full blur-[100px] opacity-50 animate-float-slower z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight scroll-reveal">
          Effortless <span className="text-gradient">User Flow</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto scroll-reveal">
          Experience a seamless journey from checkout to earning yield. Yumi makes every step intuitive and rewarding.
        </p>
        <div className="relative w-full">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#C9F299]/30 via-[#A8E063]/20 to-transparent -z-10" style={{transform: 'translateY(-50%)'}}></div>
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
