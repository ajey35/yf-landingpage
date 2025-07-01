import React from "react"

const steps = [
  { label: "User", description: "KYC and AI-underwriting", icon: "👤" },
  { label: "Deposit", description: "Deposits money to a yield vault", icon: "💸" },
  { label: "Yumi Yield SDK", description: "Handles vault deposit and strategy", icon: "💰" },
  { label: "Pay 250$ upfront", description: "", icon: "💵" },
  { label: "Yumi's Operational Capital", description: "", icon: "🏦" },
  { label: "Pay Merchant 1000$ Instantly", description: "", icon: "🏪" },
  {
    label: "Issue $ysUSD and $yrUSD",
    description: "$yrUSD is riskier with higher APY. $ysUSD is safer with lower APY.",
    icon: "💳",
  },
  { label: "Replenish", description: "", icon: "🔄" },
  {
    label: "Pay two 250$ instalments",
    description: "20 & 40 days later",
    icon: "🗓️",
  },
  {
    label: "Pay 0$ or 250$ - yield",
    description: "60 days later",
    icon: "💹",
  },
  {
    label: "Pay off last installment with yield",
    description: "",
    icon: "✅",
  },
]

export default function HowItWorksFlow() {
  return (
    <section className="w-full bg-black py-20 px-4 sm:px-8 lg:px-16 flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 leading-tight">
        How it works
      </h2>
      <p className="text-center text-[#C9F299] text-lg sm:text-xl mb-12">
        $1000 purchase example
      </p>

      {/* Desktop: image flow */}
      <div className="hidden md:flex w-full max-w-6xl justify-center items-center animate-fade-up transition-all duration-1000">
        <img
          src="/how-it-works-flow.png"
          alt="How it works flow"
          className="rounded-xl shadow-2xl border border-[#C9F299]/10"
        />
      </div>

      {/* Mobile: Stepper style */}
      <div className="md:hidden flex flex-col gap-6 w-full max-w-md mx-auto mt-10">
        {[
          {
            title: "1. Deposit",
            desc: "User deposits money to a yield vault via Yumi Yield SDK.",
          },
          {
            title: "2. Pay 250$ upfront",
            desc: "User pays 250$ upfront after KYC and AI-underwriting.",
          },
          {
            title: "3. Pay Merchant 1000$ Instantly",
            desc: "Yumi pays the merchant instantly from operational capital.",
          },
          {
            title: "4. Issue $ysUSD and $yrUSD",
            desc: "$yrUSD is a junior tranche (higher APY, more risk), $ysUSD is safer (lower APY).",
          },
          {
            title: "5. Pay two 250$ instalments",
            desc: "User pays two more 250$ instalments at 20 & 40 days.",
          },
          {
            title: "6. Pay 0$ or 250$ - yield",
            desc: "At 60 days, user pays either 0$ or 250$ minus yield earned.",
          },
        ].map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start bg-[#111111] rounded-2xl p-5 shadow-lg border border-[#C9F299]/10 transition-transform duration-500 ease-in-out hover:scale-[1.01] animate-fade-up"
            style={{ animationDelay: `${idx * 150}ms`, animationFillMode: "both" }}
          >
            <div className="flex items-center mb-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C9F299]/20 text-[#C9F299] font-bold mr-3">
                {idx + 1}
              </span>
              <span className="text-lg font-semibold text-white">{step.title}</span>
            </div>
            <p className="text-sm text-gray-400">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
