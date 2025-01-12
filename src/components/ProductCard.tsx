import { Product } from '../data/products'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useCart } from '../context/CartContext'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">R${product.price.toFixed(2)}</p>
        <Button className="mt-2 w-full" onClick={() => addToCart(product)}>Adionar ao carrinho</Button>
      </CardFooter>
    </Card>
  )
}

