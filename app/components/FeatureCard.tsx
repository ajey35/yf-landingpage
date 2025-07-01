import { CheckCircle, Zap, CreditCard, Gift, Shield, TrendingUp } from "lucide-react"

interface FeatureCardProps {
  iconType: "instant" | "zero-interest" | "cashback" | "network" | "security" | "yield"
  title: string
  description: string
  delay?: number
}

const iconMap = {
  instant: Zap,
  "zero-interest": CreditCard,
  cashback: Gift,
  network: CheckCircle,
  security: Shield,
  yield: TrendingUp,
}

const iconColors = {
  instant: "from-blue-400 to-blue-600",
  "zero-interest": "from-green-400 to-green-600",
  cashback: "from-purple-400 to-purple-600",
  network: "from-orange-400 to-orange-600",
  security: "from-red-400 to-red-600",
  yield: "from-yellow-400 to-yellow-600",
}

export default function FeatureCard({ iconType, title, description, delay = 0 }: FeatureCardProps) {
  const IconComponent = iconMap[iconType]
  const iconColor = iconColors[iconType]

  return (
    <div
      className="group glass-card rounded-2xl p-6 hover:bg-white/5 transition-premium hover-lift scroll-reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${iconColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-smooth`}
        >
          <IconComponent size={20} className="text-white" />
        </div>
        <h3 className="text-title text-lg mb-3 text-white group-hover:text-gradient transition-smooth">{title}</h3>
        <p className="text-body text-gray-400 group-hover:text-gray-300 transition-smooth text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
