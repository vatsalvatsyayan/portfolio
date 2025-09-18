import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "vatsal-portfolio",
  description: "Software/AI Engineer & Researcher - Portfolio showcasing projects, publications, and experience",
  keywords: ["software engineer", "researcher", "portfolio", "full-stack developer", "ai engineer"],
  authors: [{ name: "Vatsal Vatsyayan" }],
  openGraph: {
    title: "Vatsal Vatsyayan - Portfolio",
    description: "Software/AI Engineer & Researcher Portfolio",
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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
