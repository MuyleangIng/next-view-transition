"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, GraduationCap, Laptop, Brain, Verified, ArrowRight } from "lucide-react"
import { unstable_ViewTransition as ViewTransition } from "react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <ViewTransition name="profile">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/muyleanging.jpg-ZujCefrwCNoCCmxdrcGUoMmjcXv71S.jpeg"
                alt="Muyleang Ing"
                fill
                className="object-cover"
                priority
              />
            </div>
          </ViewTransition>

          <div className="text-center md:text-left">
            <ViewTransition name="name">
              <h1 className="text-4xl font-bold mb-2">Muyleang Ing</h1>
            </ViewTransition>

            <ViewTransition name="roles">
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Code2 className="w-3 h-3" /> DevOps Engineer
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Laptop className="w-3 h-3" /> Full-Stack Developer
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Brain className="w-3 h-3" /> AI Researcher
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Verified className="w-3 h-3" /> Verified
                </Badge>
              </div>
            </ViewTransition>

            <p className="text-muted-foreground">
              Exploring the intersection of DevOps, AI, and Full-Stack Development
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <ViewTransition name="education">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium">RUPP Alumni</div>
                  <div className="text-sm text-muted-foreground">Computer Science & Engineering</div>
                </div>
                <div>
                  <div className="font-medium">PKNU</div>
                  <div className="text-sm text-muted-foreground">AI Convergence (Current)</div>
                </div>
              </CardContent>
            </Card>
          </ViewTransition>

          <ViewTransition name="experience">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Laptop className="w-5 h-5" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium">DevOps Engineering Instructor</div>
                  <div className="text-sm text-muted-foreground">ISTAD</div>
                </div>
                <div>
                  <div className="font-medium">Full-Stack Development</div>
                  <div className="text-sm text-muted-foreground">Professional Developer</div>
                </div>
              </CardContent>
            </Card>
          </ViewTransition>
        </div>

        <ViewTransition name="research">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Research Interests
              </CardTitle>
              <CardDescription>Current research focus areas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge>Quantum Machine Learning</Badge>
                <Badge>AI Convergence</Badge>
              </div>
            </CardContent>
          </Card>
        </ViewTransition>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/portfolio">
              View Portfolio
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

