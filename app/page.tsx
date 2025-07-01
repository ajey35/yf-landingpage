"use client"

import { useEffect } from "react"
import { ArrowRight } from "lucide-react"
import Navigation from "./components/Navigation"
import HowItWorksStep from "./components/HowItWorksStep"
import BenefitCard from "./components/BenefitCard"
import FlexibilitySection from "./components/FlexibilitySection"

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll(".scroll-reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#C9F299]/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#A8E063]/6 rounded-full blur-2xl animate-float"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center space-y-8">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-hero text-4xl sm:text-5xl lg:text-6xl text-white">
                The Future of <span className="text-gradient">Payments</span>
              </h1>
              <p className="text-body text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
                Experience the first on-chain Buy Now, Pay Later platform that pays you back through yield generation
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <button className="group btn-primary w-full sm:w-auto px-8 py-3 rounded-full text-body focus-ring">
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
                </span>
              </button>
              <button className="group btn-secondary w-full sm:w-auto px-8 py-3 rounded-full text-body focus-ring">
                <span>Learn More</span>
              </button>
            </div>

            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 max-w-4xl mx-auto mt-16 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="text-center">
                <div className="text-display text-4xl lg:text-5xl text-gradient mb-2">0%</div>
                <p className="text-body text-gray-400">Interest Rate</p>
              </div>
              <div className="text-center">
                <div className="text-display text-4xl lg:text-5xl text-gradient mb-2">100%</div>
                <p className="text-body text-gray-400">On-Chain</p>
              </div>
              <div className="text-center">
                <div className="text-display text-4xl lg:text-5xl text-gradient mb-2">24/7</div>
                <p className="text-body text-gray-400">Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <BenefitCard
              iconType="zero-interest"
              title="Zero Interest"
              description="Split any purchase into 4 bi-weekly payments with absolutely no interest or hidden fees"
              delay={0}
            />
            <BenefitCard
              iconType="security"
              title="Fully Secured"
              description="Built on blockchain technology for complete transparency and unmatched security"
              delay={100}
            />
            <BenefitCard
              iconType="earn"
              title="Earn While You Pay"
              description="Your deposits generate yield through our innovative DeFi protocols during payment periods"
              delay={200}
            />
            <BenefitCard
              iconType="instant"
              title="Instant Approval"
              description="Get approved in seconds with our streamlined verification process and start shopping immediately"
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <p className="text-body text-gray-400 mb-4">Three simple steps to start earning while you pay</p>
            <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl mb-6 text-white">
              How It <span className="text-gradient">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <HowItWorksStep
              step={1}
              title="Sign Up & Verify"
              description="Complete our quick 2-minute verification process with instant approval and security"
              delay={0}
            />
            <HowItWorksStep
              step={2}
              title="Shop & Split"
              description="Choose Yumi at checkout and automatically split into 4 bi-weekly payments"
              delay={200}
            />
            <HowItWorksStep
              step={3}
              title="Earn Cashback"
              description="Get rewarded with cashback through our yield system while completing payments"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Complete Flexibility Section */}
      <FlexibilitySection />

      {/* CTA Section */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal">
            <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl mb-6 text-white">
              Ready to Start <span className="text-gradient">Earning</span>?
            </h2>
            <p className="text-body text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of smart shoppers who are already earning cashback on their purchases
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto">
              <button className="group btn-primary w-full sm:w-auto px-8 py-3 rounded-full text-body focus-ring">
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Early Access</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
                </span>
              </button>
              <button className="btn-secondary w-full sm:w-auto px-8 py-3 rounded-full text-body focus-ring">
                Join Waitlist
              </button>
            </div>

            <p className="text-caption text-gray-500 text-sm mt-6">
              No credit check required • Available in 50+ countries • Launch Q2 2025
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center">
              <span className="text-title text-lg font-semibold text-white">Yumi Finance</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-400">
              <a href="#" className="text-body hover:text-white transition-smooth text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-body hover:text-white transition-smooth text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-body hover:text-white transition-smooth text-sm">
                Support
              </a>
              <a href="#" className="text-body hover:text-white transition-smooth text-sm">
                Documentation
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 text-center text-gray-500 text-caption text-sm">
            <p>&copy; 2024 Yumi Finance. All rights reserved. The first BNPL that pays you back.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
