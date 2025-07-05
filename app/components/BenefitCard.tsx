import { CreditCard, Shield, TrendingUp, Zap } from "lucide-react"

interface BenefitCardProps {
  iconType: "zero-interest" | "security" | "earn" | "instant"
  title: string
  description: string
  delay?: number
}

const iconMap = {
  "zero-interest": CreditCard,
  security: Shield,
  earn: TrendingUp,
  instant: Zap,
}

export default function BenefitCard({ iconType, title, description, delay = 0 }: BenefitCardProps) {
  const IconComponent = iconMap[iconType]

  return (
    <div
      className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center hover:bg-white/5 transition-premium hover-lift scroll-reveal group w-full h-full min-h-[220px]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="benefit-icon group-hover:scale-105 transition-smooth mb-3">
        <IconComponent size={28} className="text-black" />
      </div>
      <h3 className="text-title text-lg sm:text-xl mb-2 sm:mb-4 text-white group-hover:text-gradient transition-smooth leading-tight">{title}</h3>
      <p className="text-body text-gray-400 group-hover:text-gray-300 transition-smooth leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </div>
  )
}
