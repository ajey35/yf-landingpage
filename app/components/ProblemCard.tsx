interface ProblemCardProps {
  title: string
  description?: string
  className?: string
}

export default function ProblemCard({ title, description, className = "" }: ProblemCardProps) {
  return (
    <div className={`bg-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-2xl px-6 py-4 ${className}`}>
      <h3 className="text-white font-medium text-center">{title}</h3>
      {description && <p className="text-gray-400 text-sm text-center mt-2">{description}</p>}
    </div>
  )
}
