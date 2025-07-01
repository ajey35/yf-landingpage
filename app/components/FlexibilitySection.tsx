import { Check, CreditCard, TrendingUp } from "lucide-react"

export default function FlexibilitySection() {
  return (
    <section className="py-10 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Features */}
          <div className="scroll-reveal">

            <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl mb-12 text-white leading-tight">
              Complete <span className="text-gradient">Flexibility</span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9F299] to-[#A8E063] rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 group-hover:scale-105 transition-smooth">
                  <Check size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="text-title text-2xl mb-3 text-white group-hover:text-gradient transition-smooth">
                    4 Bi-Weekly Payments
                  </h3>
                  <p className="text-body text-gray-400 text-lg leading-relaxed">
                    Split any purchase into manageable payments over 6 weeks with complete transparency
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9F299] to-[#A8E063] rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 group-hover:scale-105 transition-smooth">
                  <Check size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="text-title text-2xl mb-3 text-white group-hover:text-gradient transition-smooth">
                    Longer-Term Plans
                  </h3>
                  <p className="text-body text-gray-400 text-lg leading-relaxed">
                    Extended financing options for larger purchases with flexible terms
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C9F299] to-[#A8E063] rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 group-hover:scale-105 transition-smooth">
                  <Check size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="text-title text-2xl mb-3 text-white group-hover:text-gradient transition-smooth">
                    No Hidden Fees
                  </h3>
                  <p className="text-body text-gray-400 text-lg leading-relaxed">
                    Complete transparency with no surprise charges or hidden costs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Example Purchase */}
          <div className="scroll-reveal" style={{ animationDelay: "200ms" }}>
            <div className="purchase-card hover-lift transition-premium">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C9F299] to-[#A8E063] rounded-2xl flex items-center justify-center mx-auto">
                  <CreditCard size={24} className="text-black" />
                </div>
                <h3 className="text-title text-2xl text-white">Example Purchase</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-body text-gray-400 text-lg">Total Purchase</span>
                    <span className="text-title text-white text-xl">$400</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-body text-gray-400 text-lg">4 Payments of</span>
                    <span className="text-title text-[#C9F299] text-xl">$100</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="text-body text-gray-400 text-lg">Interest</span>
                    <span className="text-title text-white text-xl">$0</span>
                  </div>
                  <div className="purchase-highlight">
                    <div className="flex justify-between items-center">
                      <span className="text-body text-gray-300 text-lg">Cashback Earned</span>
                      <span className="text-title text-[#C9F299] text-xl font-bold">+$12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
