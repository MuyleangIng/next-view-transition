"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useViewTransition } from "@/hooks/use-view-transition"

const posts = [
  {
    id: 1,
    title: "Understanding View Transitions in React",
    excerpt: "Learn how the new View Transitions API works in React and Next.js",
    date: "March 14, 2025",
  },
  {
    id: 2,
    title: "Building Smooth UI Transitions",
    excerpt: "Create engaging user experiences with the View Transitions API",
    date: "March 10, 2025",
  },
  {
    id: 3,
    title: "The Future of Web Animations",
    excerpt: "How View Transitions are changing the way we think about web animations",
    date: "March 5, 2025",
  },
]

export default function BlogPage() {
  const { startViewTransition } = useViewTransition()

  return (
    <div className="p-4 max-w-[960px] m-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-medium">Blog</h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/" onClick={(e) => startViewTransition(e)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold view-transition-profile-image">
          IM
        </div>
        <div>
          <div className="font-medium view-transition-author-name">Ing Muyleang</div>
          <div className="text-sm text-muted-foreground">Web Developer</div>
        </div>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-medium mb-2">{post.title}</h2>
            <p className="text-muted-foreground mb-2">{post.excerpt}</p>
            <div className="text-sm text-muted-foreground">{post.date}</div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="inline-block font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full view-transition-experimental-label">
          View Transitions Demo
        </div>
      </div>
    </div>
  )
}

