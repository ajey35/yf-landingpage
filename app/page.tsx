"use client"

import { useEffect } from "react"
import { ArrowRight } from "lucide-react"
import Navigation from "./components/Navigation"
import HowItWorksStep from "./components/HowItWorksStep"
import BenefitCard from "./components/BenefitCard"
import FlexibilitySection from "./components/FlexibilitySection"
import BNPLProblemsSection from "./components/BNPLProblemsSection"
import UserFlowSection from "./components/UserFlowSection"
import HowItWorksFlow from "./components/HowItWorksFlow"
import WhyWeWinSection from "./components/WhyWeWinSection"

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
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden px-2 sm:px-4">
        {/* Background Elements */}
        <div className="absolute top-10 left-2 w-28 h-28 sm:w-40 sm:h-40 bg-[#C9F299]/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-2 w-24 h-24 sm:w-32 sm:h-32 bg-[#A8E063]/6 rounded-full blur-2xl animate-float"></div>

        <div className="relative z-10 w-full max-w-3xl sm:max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 pt-16 pb-10 sm:pt-20 sm:pb-16">
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6 animate-fade-in-up">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-hero">
                The Future of <span className="text-gradient">Payments</span>
              </h1>
              <p className="text-body text-base sm:text-lg lg:text-2xl text-gray-300 max-w-2xl sm:max-w-4xl mx-auto">
                Buy Now , Pay Later + Pay with Yield           </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center max-w-xs sm:max-w-none mx-auto animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <button className="group btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full text-body focus-ring">
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
                </span>
              </button>
              <button className="group btn-secondary w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full text-body focus-ring">
                <span>Learn More</span>
              </button>
            </div>

            <div
              className="grid  grid-cols-3 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-16 max-w-xs pt-6 sm:max-w-4xl mx-auto mt-20 sm:mt-20 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="text-center">
                <div className="text-display text-3xl sm:text-4xl lg:text-5xl text-gradient mb-2">0%</div>
                <p className="text-body text-gray-400 text-sm sm:text-base">Interest Rate</p>
              </div>
              <div className="text-center">
                <div className="text-display text-3xl sm:text-4xl lg:text-5xl text-gradient mb-2">100%</div>
                <p className="text-body text-gray-400 text-sm sm:text-base">On-Chain</p>
              </div>
              <div className="text-center">
                <div className="text-display text-3xl sm:text-4xl lg:text-5xl text-gradient mb-2">24/7</div>
                <p className="text-body text-gray-400 text-sm sm:text-base">Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-12 sm:py-20 lg:py-24 px-2 sm:px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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

      <BNPLProblemsSection/>

      <div className="scroll-reveal animate-fade-in-up">
        <UserFlowSection />
      </div>

      <div className="scroll-reveal animate-fade-in-up">
        <HowItWorksFlow />
      </div>

      <div className="scroll-reveal animate-fade-in-up">
        <WhyWeWinSection />
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-20 lg:py-24 px-2 sm:px-4 lg:px-8 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16 scroll-reveal px-2">
            <p className="text-body text-gray-400 mb-2 sm:mb-4 text-sm sm:text-base break-words">Three simple steps to start earning while you pay</p>
            <h2 className="text-display text-2xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-white break-words">
              How It <span className="text-gradient">Works</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 lg:gap-16 max-w-full px-2">
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
      <section className="py-12 sm:py-20 lg:py-24 px-2 sm:px-4 lg:px-8">
        <div className="max-w-2xl sm:max-w-4xl mx-auto text-center">
          <div className="scroll-reveal">
            <h2 className="text-display text-2xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-white">
              Ready to Start <span className="text-gradient">Earning</span>?
            </h2>
            <p className="text-body text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto">
              Join thousands of smart shoppers who are already earning cashback on their purchases
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center max-w-xs sm:max-w-none mx-auto">
              <button className="group btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full text-body focus-ring">
                <span className="flex items-center justify-center space-x-2">
                  <span>Get Early Access</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
                </span>
              </button>
              <button className="btn-secondary w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full text-body focus-ring">
                Join Waitlist
              </button>
            </div>

            <p className="text-caption text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6">
              No credit check required • Available in 50+ countries • Launch Q2 2025
            </p>
          </div>
        </div>
      </section>
    

      {/* Footer */}
      <footer className="py-8 px-2 sm:py-12 sm:px-4 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center min-w-0">
              <img src="/image.png" alt="Yumi Finance Logo" className="h-8 w-8 sm:h-10 sm:w-10 md:h-10 md:w-8 mr-2 object-contain" />
              <span className="text-title text-base sm:text-lg font-semibold text-white truncate">Yumi Finance</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-gray-400 w-full md:w-auto">
              <a href="#" className="text-body hover:text-white transition-smooth text-xs sm:text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-body hover:text-white transition-smooth text-xs sm:text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-body hover:text-white transition-smooth text-xs sm:text-sm">
                Support
              </a>
              <a href="#" className="text-body hover:text-white transition-smooth text-xs sm:text-sm">
                Documentation
              </a>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5 text-center text-gray-500 text-caption text-xs sm:text-sm">
            <p>&copy; 2024 Yumi Finance. All rights reserved. The first BNPL that pays you back.</p>
          </div>
        </div>
      </footer>

      
    </>
  )
}
