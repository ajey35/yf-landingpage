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
      className="group scroll-reveal flex flex-col items-center text-center bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-3xl shadow-[0_8px_40px_rgba(201,242,153,0.05)] p-6 sm:p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_10px_60px_rgba(201,242,153,0.1)]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C9F299]/10 text-[#C9F299] font-bold text-xl mb-4 shadow-inner">
        {step.number}
      </div>

      <div className="relative w-[240px] h-[500px] sm:w-[260px] sm:h-[540px] lg:w-[300px] lg:h-[580px] overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-inner mb-6">
        <img
          src={step.imgSrc}
          alt={step.imgAlt}
          className="w-full h-full object-contain transition duration-300 ease-in-out"
        />
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{step.title}</h3>
      <p className="text-base sm:text-lg text-gray-400 max-w-sm">{step.description}</p>
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
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-16 leading-tight scroll-reveal">
          Effortless <span className="text-gradient">User Flow</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <StepCard key={step.number} step={step} delay={idx * 200} />
          ))}
        </div>
      </div>
    </section>
  )
}
