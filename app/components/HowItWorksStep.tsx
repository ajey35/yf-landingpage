interface HowItWorksStepProps {
  step: number
  title: string
  description: string
  delay?: number
}

export default function HowItWorksStep({ step, title, description, delay = 0 }: HowItWorksStepProps) {
  return (
    <div className="text-center scroll-reveal group" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative mb-8 lg:mb-12 flex justify-center">
        <div className="step-circle w-24 h-24 lg:w-28 lg:h-28 text-2xl lg:text-3xl group-hover:scale-105 transition-premium">
          {step}
        </div>
      </div>

      <h3 className="text-title text-2xl lg:text-3xl mb-6 lg:mb-8 text-white group-hover:text-gradient transition-smooth">
        {title}
      </h3>
      <p className="text-body text-gray-400 text-lg lg:text-xl max-w-sm mx-auto group-hover:text-gray-300 transition-smooth leading-relaxed">
        {description}
      </p>
    </div>
  )
}
