"use client"
import React, { useEffect } from "react"
import Image from "next/image"

const liquidity = [
  {
    title: "Pre-launch TVL commits",
    desc: "Secure $500k+ in TVL commits from Hedge Funds & Family offices.",
  },
  {
    title: "Early LP benefits",
    desc: "Attract DeFi yield farmers & liquid funds post-launch. LPs earn double points in Season 1.",
  },
]

const merchant = [
  {
    title: "Initial Merchants",
    desc: "Target merchants that already accept crypto, as the easiest group to acquire. Focus on AI/SaaS subscriptions to showcase 'pay with yield'.",
  },
  {
    title: "Crypto card & payment providers partnerships",
    desc: "Partner with major crypto cards and payment platforms like OKX Pay, Gnosis Circles to offer BNPL to supported merchants.",
  },
  {
    title: "Klarna vampire attack",
    desc: "Users: Invite 5 Klarna users, we pay your last installment (up to $25). Merchants: earn 0.1% fee rebate for 6 months per referral.",
  },
]

const partners = [
  {
    category: "Crypto cards",
    items: ["ether.fi", "holyheld", "Holders", "COCA"],
  },
  {
    category: "Payment solutions",
    items: ["Gnosis", "Pay"],
  },
  {
    category: "Yield infrastructure",
    items: ["Sprout", "Superform", "CapMoney"],
  },
  {
    category: "Underwriting & servicing protocols",
    items: ["3Jane", "credifi"],
  },
]

export default function GoToMarketSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative bg-black py-24 px-6 lg:px-24 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 scroll-reveal transition-all duration-700 translate-y-8 opacity-0">
          Go to Market & Strategic Partnerships
        </h2>

        {/* Liquidity Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="md:col-span-1">
            <h3 className="text-[#C9F299] text-2xl font-semibold scroll-reveal transition-all duration-700 translate-y-8 opacity-0">
              Liquidity Acquisition
            </h3>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {liquidity.map((item, idx) => (
              <div
                key={item.title}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6"
              >
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-white/10 my-12" />

        {/* Merchant Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-24">
          <div className="md:col-span-1">
            <h3 className="text-[#C9F299] text-2xl font-semibold scroll-reveal transition-all duration-700 translate-y-8 opacity-0">
              Merchant & User Acquisition
            </h3>
          </div>
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {merchant.map((item) => (
              <div
                key={item.title}
                className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6"
              >
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((group) => (
            <div
              key={group.category}
              className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6"
            >
              <h5 className="text-[#C9F299] text-sm font-semibold mb-4">{group.category}</h5>
              <ul className="space-y-3">
                {group.items.map((name) => (
                  <li key={name} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                      {/* Placeholder Logo */}
                      <Image
                        src="/placeholder-logo.png"
                        alt={name}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-white text-sm font-medium">{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
