"use client"

import type React from "react"

interface ButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

export default function Button({ children, variant = "primary", size = "md", className = "", onClick }: ButtonProps) {
  const baseClasses = "font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center"

  const variants = {
    primary: "bg-[#C9F299] text-black hover:bg-[#B8E085] hover:scale-105",
    secondary: "border-2 border-[#C9F299] text-[#C9F299] hover:bg-[#C9F299] hover:text-black",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
