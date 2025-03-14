"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, Info, Package } from "lucide-react"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: Info },
  { href: "/products", label: "Products", icon: Package },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4 bg-background border-t md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="flex space-x-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

          const Icon = item.icon

          return (
            <Button
              key={item.href}
              asChild
              variant={isActive ? "default" : "ghost"}
              size="sm"
              className={cn("flex items-center gap-1", isActive && "pointer-events-none")}
            >
              <Link href={item.href}>
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            </Button>
          )
        })}
      </div>
    </nav>
  )
}

