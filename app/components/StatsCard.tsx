interface StatsCardProps {
  value: string
  label: string
  delay?: number
}

export default function StatsCard({ value, label, delay = 0 }: StatsCardProps) {
  return (
    <div className="text-center scroll-reveal group" style={{ animationDelay: `${delay}ms` }}>
      <div className="text-display text-4xl lg:text-5xl text-gradient mb-2 group-hover:scale-105 transition-smooth">
        {value}
      </div>
      <p className="text-body text-gray-400 group-hover:text-gray-300 transition-smooth">{label}</p>
    </div>
  )
}
