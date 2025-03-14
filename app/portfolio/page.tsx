"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, GraduationCap, Laptop, Verified } from "lucide-react"
import { unstable_ViewTransition as ViewTransition } from "react"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <ViewTransition name="profile">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSSS81DNgGAwRQrPZ_DcPeYVNQb6_cN-0Vg&s"
                  alt="Muyleang Ing"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ViewTransition>
            <div>
              <ViewTransition name="name">
                <h1 className="text-2xl font-bold">Muyleang Ing</h1>
              </ViewTransition>
              <ViewTransition name="roles">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Verified className="w-3 h-3" /> Verified
                  </Badge>
                </div>
              </ViewTransition>
            </div>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back
            </Link>
          </Button>
        </div>

        <div className="grid gap-6">
          <ViewTransition name="research">
            <Card>
              <CardHeader>
                <CardTitle>Projects & Research</CardTitle>
                <CardDescription>Selected works and contributions</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-medium mb-2">Quantum Machine Learning Research</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Exploring the intersection of quantum computing and machine learning algorithms.
                  </p>
                  <Badge>Research</Badge>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-medium mb-2">DevOps Automation Platform</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Built automation tools and platforms for streamlining development workflows.
                  </p>
                  <Badge>DevOps</Badge>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-medium mb-2">AI Convergence Studies</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Research on integrating AI across different domains and applications.
                  </p>
                  <Badge>AI</Badge>
                </div>
              </CardContent>
            </Card>
          </ViewTransition>

          <div className="grid md:grid-cols-2 gap-6">
            <ViewTransition name="education">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Education Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium">Royal University of Phnom Penh (RUPP)</div>
                      <div className="text-sm text-muted-foreground">BSc in Computer Science & Engineering</div>
                      <div className="text-sm text-muted-foreground">Graduated with Honors</div>
                    </div>
                    <div>
                      <div className="font-medium">Pukyong National University (PKNU)</div>
                      <div className="text-sm text-muted-foreground">AI Convergence Program</div>
                      <div className="text-sm text-muted-foreground">Current Research Focus</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ViewTransition>

            <ViewTransition name="experience">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Laptop className="w-5 h-5" />
                    Professional Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium">ISTAD</div>
                      <div className="text-sm text-muted-foreground">DevOps Engineering Instructor</div>
                      <div className="text-sm text-muted-foreground">Teaching modern DevOps practices and tools</div>
                    </div>
                    <div>
                      <div className="font-medium">Full-Stack Development</div>
                      <div className="text-sm text-muted-foreground">Professional Developer</div>
                      <div className="text-sm text-muted-foreground">Building scalable web applications</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ViewTransition>
          </div>
        </div>
      </main>
    </div>
  )
}

