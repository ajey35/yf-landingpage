import React from "react"
import ProblemCard from "./ProblemCard"

const problems = [
  {
    title: "Opaque Terms",
    description: "Repayment schedules and conditions are often hidden or unclear.",
  },
  {
    title: "Slow Settlements",
    description: "Merchant payouts are delayed by 1-3 days, hurting cash flow.",
  },
  {
    title: "Phantom Debt",
    description: "Balances aren't updated in real-time, leading to missed payments.",
  },
  {
    title: "High Costs",
    description: "Unnecessary fees from legacy systems impact everyone.",
  },
  {
    title: "Merchant Squeeze",
    description: "High fees and low margins make it tough for merchants.",
  },
]

export default function BNPLProblemsSection() {
  return (
    <section className="w-full py-20 px-2 sm:px-6 lg:px-16 flex flex-col items-center relative overflow-hidden scroll-reveal" style={{ background: "linear-gradient(135deg, #101010 60%, #232323 100%)" }}>
      {/* Soft overlay for premium effect */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ background: "radial-gradient(ellipse at 30% 10%, rgba(201,242,153,0.08) 0%, transparent 70%), radial-gradient(ellipse at 80% 90%, rgba(168,224,99,0.07) 0%, transparent 70%)" }} />
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C9F299] mb-6 leading-tight drop-shadow-lg transition-smooth">
          Why Traditional BNPL <span className="text-gradient">Falls Short</span>
        </h2>
        <p className="text-center text-gray-400 text-lg sm:text-xl max-w-2xl mb-12 transition-smooth">
          Most Buy Now, Pay Later products still use outdated payment rails—causing friction for users and merchants alike. Here's what's broken:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full transition-smooth">
          {problems.map((problem) => (
            <ProblemCard
              key={problem.title}
              title={problem.title}
              description={problem.description}
              className="shadow-xl bg-[#181818]/80 border border-[#C9F299]/10 hover:border-[#C9F299]/30 hover:scale-[1.03] transition-all duration-300 scroll-reveal min-h-[130px]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
