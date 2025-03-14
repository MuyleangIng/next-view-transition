import type React from "react"
import { Navigation } from "@/components/navigation"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 pt-16 pb-16 md:pt-24 md:pb-0">{children}</div>
    </div>
  )
}

