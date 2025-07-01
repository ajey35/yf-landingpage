import { ArrowRight, Calendar, DollarSign, TrendingUp, Users, Building2, Zap } from "lucide-react"
import Navigation from "../components/Navigation"

export default function MerchantPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden scroll-reveal animate-fade-in-up">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#C9F299]/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#A8E063]/6 rounded-full blur-2xl animate-float"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center space-y-8">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-hero text-4xl sm:text-5xl lg:text-6xl text-white">
                Grow Sales, Lower Fees
                <br />
                <span className="text-gradient">Accept Crypto</span>
              </h1>
              <p className="text-body text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto">
                The BNPL solution that increases conversions while reducing costs
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <button className="group btn-primary w-full sm:w-auto px-8 py-3 rounded-full text-body focus-ring flex items-center justify-center space-x-2">
                <Calendar size={20} />
                <span>Book a Call</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-smooth" />
              </button>
              <button className="group btn-secondary w-full sm:w-auto px-8 py-3 rounded-full text-body focus-ring">
                <span>View Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-6 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-reveal animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl mb-6 text-white">
              Why Merchants Choose <span className="text-gradient">Yumi</span>
            </h2>
            <p className="text-body text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
              Replace your existing BNPL solution with one that actually benefits your customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-premium hover-lift scroll-reveal animate-fade-in-up">
              <div className="benefit-icon">
                <DollarSign size={24} className="text-black" />
              </div>
              <h3 className="text-title text-xl mb-4 text-white">Lower Transaction Costs</h3>
              <p className="text-body text-gray-400 leading-relaxed">
                Save up to 50% on processing fees compared to traditional BNPL providers
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-premium hover-lift scroll-reveal animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="benefit-icon">
                <Zap size={24} className="text-black" />
              </div>
              <h3 className="text-title text-xl mb-4 text-white">Seamless Integration</h3>
              <p className="text-body text-gray-400 leading-relaxed">
                Easy API integration with popular e-commerce platforms and custom solutions
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 hover:bg-white/5 transition-premium hover-lift scroll-reveal animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="benefit-icon">
                <Users size={24} className="text-black" />
              </div>
              <h3 className="text-title text-xl mb-4 text-white">Access to New Customers</h3>
              <p className="text-body text-gray-400 leading-relaxed">
                Tap into our growing user base of financially savvy consumers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 sm:py-20 lg:py-24 px-2 sm:px-4 lg:px-8 bg-white/[0.01] scroll-reveal animate-fade-in-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-display text-2xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-white">
              Trusted by <span className="text-gradient">Leading Brands</span>
            </h2>
          </div>

          <div className="grid  grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 text-center">
            <div className="scroll-reveal animate-fade-in-up">
              <div className="benefit-icon mx-auto mb-2">
                <Building2 size={30} className="text-black" />
              </div>
              <div className="text-display text-2xl sm:text-4xl lg:text-5xl text-gradient mb-2 sm:mb-3 lg:mb-4">100+</div>
              <p className="text-body text-gray-400 text-base sm:text-lg lg:text-xl">Partner Merchants</p>
            </div>

            <div className="scroll-reveal animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <div className="benefit-icon mx-auto mb-2">
                <TrendingUp size={30} className="text-black" />
              </div>
              <div className="text-display text-2xl sm:text-4xl lg:text-5xl text-gradient mb-2 sm:mb-3 lg:mb-4">₹50Cr+</div>
              <p className="text-body text-gray-400 text-base sm:text-lg lg:text-xl">Volume Processed</p>
            </div>

            <div className="scroll-reveal animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="benefit-icon mx-auto mb-2">
                <Users size={30} className="text-black" />
              </div>
              <div className="text-display text-2xl sm:text-4xl lg:text-5xl text-gradient mb-2 sm:mb-3 lg:mb-4">25%</div>
              <p className="text-body text-gray-400 text-base sm:text-lg lg:text-xl">Conversion Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 scroll-reveal animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display text-3xl sm:text-4xl lg:text-5xl mb-6 text-white">
              Ready to <span className="text-gradient">Get Started</span>?
            </h2>
            <p className="text-body text-lg lg:text-xl text-gray-400">
              Join hundreds of merchants already boosting sales with Yumi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8 hover-lift transition-premium scroll-reveal animate-fade-in-up">
              <h3 className="text-title text-2xl mb-4 text-white">Book a Demo</h3>
              <p className="text-body text-gray-400 mb-6">
                Schedule a personalized demo to see how Yumi can transform your checkout experience
              </p>
              <button className="btn-primary w-full py-3 rounded-full focus-ring">Schedule Demo</button>
            </div>

            <div className="glass-card rounded-2xl p-8 hover-lift transition-premium scroll-reveal animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <h3 className="text-title text-2xl mb-4 text-white">Start Integration</h3>
              <p className="text-body text-gray-400 mb-6">
                Access our developer docs and start integrating Yumi into your platform today
              </p>
              <button className="btn-secondary w-full py-3 rounded-full focus-ring">View Documentation</button>
            </div>
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
                Integration Docs
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/5 text-center text-gray-500 text-caption text-sm">
            <p>&copy; 2024 Yumi Finance. All rights reserved. The BNPL solution that pays customers back.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
