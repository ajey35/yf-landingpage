import { Check, CreditCard, TrendingUp } from "lucide-react"

export default function FlexibilitySection() {
  return (
    <section className="py-10 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Column - Features */}
          <div className="scroll-reveal">

            <h2 className="text-display text-3xl sm:text-5xl lg:text-6xl mb-8 sm:mb-12 text-white leading-tight">
              Complete <span className="text-gradient">Flexibility</span>
            </h2>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4 sm:space-x-6 group transition-all duration-300 hover:scale-[1.02]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#C9F299] to-[#A8E063] rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 group-hover:scale-105 transition-smooth shadow-lg">
                  <Check size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="text-title text-lg sm:text-2xl mb-2 sm:mb-3 text-white group-hover:text-gradient transition-smooth">
                    4 Bi-Weekly Payments
                  </h3>
                  <p className="text-body text-gray-400 text-sm sm:text-lg leading-relaxed">
                    Split any purchase into manageable payments over 6 weeks with complete transparency
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6 group transition-all duration-300 hover:scale-[1.02]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#C9F299] to-[#A8E063] rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 group-hover:scale-105 transition-smooth shadow-lg">
                  <Check size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="text-title text-lg sm:text-2xl mb-2 sm:mb-3 text-white group-hover:text-gradient transition-smooth">
                    Longer-Term Plans
                  </h3>
                  <p className="text-body text-gray-400 text-sm sm:text-lg leading-relaxed">
                    Extended financing options for larger purchases with flexible terms
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 sm:space-x-6 group transition-all duration-300 hover:scale-[1.02]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#C9F299] to-[#A8E063] rounded-2xl flex items-center justify-center flex-shrink-0 mt-2 group-hover:scale-105 transition-smooth shadow-lg">
                  <Check size={20} className="text-black" />
                </div>
                <div>
                  <h3 className="text-title text-lg sm:text-2xl mb-2 sm:mb-3 text-white group-hover:text-gradient transition-smooth">
                    No Hidden Fees
                  </h3>
                  <p className="text-body text-gray-400 text-sm sm:text-lg leading-relaxed">
                    Complete transparency with no surprise charges or hidden costs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Example Purchase */}
          <div className="scroll-reveal" style={{ animationDelay: "200ms" }}>
            <div className="purchase-card hover-lift transition-premium shadow-2xl rounded-2xl p-6 sm:p-8 bg-white/5">
              <div className="text-center space-y-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#C9F299] to-[#A8E063] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <CreditCard size={24} className="text-black" />
                </div>
                <h3 className="text-title text-lg sm:text-2xl text-white">Example Purchase</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                    <span className="text-body text-gray-400 text-sm sm:text-lg">Total Purchase</span>
                    <span className="text-title text-white text-base sm:text-xl">$400</span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                    <span className="text-body text-gray-400 text-sm sm:text-lg">4 Payments of</span>
                    <span className="text-title text-[#C9F299] text-base sm:text-xl">$100</span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-white/10">
                    <span className="text-body text-gray-400 text-sm sm:text-lg">Interest</span>
                    <span className="text-title text-white text-base sm:text-xl">$0</span>
                  </div>
                  <div className="purchase-highlight">
                    <div className="flex justify-between items-center">
                      <span className="text-body text-gray-300 text-sm sm:text-lg">Cashback Earned</span>
                      <span className="text-title text-[#C9F299] text-base sm:text-xl font-bold">+$12</span>
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
