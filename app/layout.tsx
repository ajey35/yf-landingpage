import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Yumi Finance - The Future of Payments",
  description: "Pay in 6 weeks with 4 zero-interest installments. The first BNPL that rewards you with cashback.",
  keywords: "BNPL, Buy Now Pay Later, Zero Interest, Cashback, Fintech",
  openGraph: {
    title: "Yumi Finance - The Future of Payments",
    description: "Pay in 6 weeks with 4 zero-interest installments. The first BNPL that rewards you with cashback.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans text-white antialiased overflow-x-hidden bg-black">
        <div className="bg-glow bg-glow-1"></div>
        <div className="bg-glow bg-glow-2"></div>
        {children}
      </body>
    </html>
  )
}
