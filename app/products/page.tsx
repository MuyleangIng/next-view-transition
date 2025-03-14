import Link from "next/link"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { id: 1, name: "Product 1", description: "This is product 1" },
  { id: 2, name: "Product 2", description: "This is product 2" },
  { id: 3, name: "Product 3", description: "This is product 3" },
  { id: 4, name: "Product 4", description: "This is product 4" },
]

export default function ProductsPage() {
  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
        <div className="max-w-5xl w-full mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Products</h1>
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle>{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  )
}

