"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useViewTransition } from "@/hooks/use-view-transition"

export default function CardPage() {
  const { startViewTransition } = useViewTransition()

  return (
    <div className="p-4 max-w-[960px] m-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-medium">Card Transition</h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/" onClick={(e) => startViewTransition(e)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="w-full view-transition-card">
          <CardHeader>
            <CardTitle>View Transitions API</CardTitle>
            <CardDescription>Transform elements between pages</CardDescription>
          </CardHeader>
          <CardContent>
            <p>The View Transitions API allows for smooth transitions between different states of your UI.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-muted-foreground">By Ing Muyleang</div>
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs view-transition-profile-image">
              IM
            </div>
          </CardFooter>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-medium">How it works</h2>
          <p>
            The View Transitions API provides a way to animate changes in your web application's UI. It works by
            capturing the before and after states of your UI and automatically creating a transition between them.
          </p>
          <p>In Next.js 15.2, this is implemented through the experimental View Transitions feature.</p>
          <div className="mt-4">
            <div className="font-medium view-transition-author-name">Ing Muyleang</div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="inline-block font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full view-transition-experimental-label">
          View Transitions Demo
        </div>
      </div>
    </div>
  )
}

