import Link from "next/link"
import { PageTransition } from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a database or API
const getProductData = (id: string) => {
  const productId = Number.parseInt(id)
  return {
    id: productId,
    name: `Product ${productId}`,
    description: `This is product ${productId}`,
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductData(params.id)

  return (
    <PageTransition>
      <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
        <div className="max-w-3xl w-full mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <Button asChild variant="outline">
              <Link href="/products">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <p className="text-muted-foreground">Product Image</p>
              </div>
              <p>{product.description}</p>
              <p>{product.details}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Add to Cart</Button>
              <Button>Buy Now</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </PageTransition>
  )
}

