interface TeamCardProps {
  name: string
  role: string
  description: string
  delay?: number
}

export default function TeamCard({ name, role, description, delay = 0 }: TeamCardProps) {
  return (
    <div
      className="glass-card rounded-2xl p-6 text-center hover:bg-white/5 transition-premium hover-lift scroll-reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-[#C9F299] to-[#A8E063] rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-black font-semibold text-lg">{name.charAt(0)}</span>
      </div>
      <h3 className="text-title text-lg mb-2 text-white">{name}</h3>
      <p className="text-[#C9F299] text-body mb-3 text-sm">{role}</p>
      <p className="text-gray-400 text-body text-sm leading-relaxed">{description}</p>
    </div>
  )
}
