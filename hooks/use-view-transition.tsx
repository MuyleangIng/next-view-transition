"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useCallback } from "react"

export function useViewTransition() {
  const router = useRouter()

  const startViewTransition = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Only proceed if the browser supports View Transitions API
      if (!document.startViewTransition) {
        return
      }

      e.preventDefault()
      const href = e.currentTarget.href

      // Use the View Transitions API
      document.startViewTransition(() => {
        router.push(href)
      })
    },
    [router],
  )

  return { startViewTransition }
}

