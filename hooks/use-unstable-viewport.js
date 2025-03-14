"use client"

import { useEffect } from "react"

export default function useUnstableViewport() {
  useEffect(() => {
    // Check if browser supports View Transitions
    const supportsViewTransition = typeof document.startViewTransition === "function"
    const supportEl = document.querySelector("[data-support]")

    if (supportEl) {
      if (supportsViewTransition) {
        supportEl.querySelector("[data-support-no]").style.display = "none"
        supportEl.querySelector("[data-support-yes]").style.display = "block"
      } else {
        supportEl.querySelector("[data-support-no]").style.display = "block"
        supportEl.querySelector("[data-support-yes]").style.display = "none"
      }
    }
  }, [])
}

