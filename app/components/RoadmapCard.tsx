interface RoadmapCardProps {
  quarter: string
  title: string
  description: string
  delay?: number
}

export default function RoadmapCard({ quarter, title, description, delay = 0 }: RoadmapCardProps) {
  return (
    <div
      className="glass-card rounded-2xl p-6 hover:bg-white/5 hover:border-[#C9F299]/30 transition-premium hover-lift scroll-reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-display text-2xl text-gradient mb-3">{quarter}</h3>
      <h4 className="text-title text-lg text-white mb-3">{title}</h4>
      <p className="text-body text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
