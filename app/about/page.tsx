import Link from "next/link"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">About Us</h1>
          <p className="text-lg text-muted-foreground mb-8">
            This page demonstrates a smooth transition from the home page.
          </p>
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </PageTransition>
  )
}

