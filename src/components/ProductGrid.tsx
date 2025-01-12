'use client'

import { useState } from 'react'
import { Product } from '../data/products'
import { ProductCard } from './ProductCard'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface ProductGridProps {
  products: Product[]
  isSticky?: boolean
  limit?: number
  hideFilters?: boolean
}

export function ProductGrid({ products, isSticky = false, limit, hideFilters = false }: ProductGridProps) {
  const [filter, setFilter] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products
    .filter(product => !filter || product.category.toLowerCase() === filter.toLowerCase())
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts

  return (
    <div>
      {!hideFilters && (
        <div
          className={`flex flex-col space-y-4 mb-8 ${
            isSticky ? "sticky top-16 bg-white z-10 py-4" : ""
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={filter === null ? "default" : "outline"}
              onClick={() => setFilter(null)}
            >
              Todos
            </Button>
            <Button
              variant={filter === "shirts" ? "default" : "outline"}
              onClick={() => setFilter("shirts")}
            >
              Camisetas
            </Button>
            <Button
              variant={filter === "pants" ? "default" : "outline"}
              onClick={() => setFilter("pants")}
            >
              Calças
            </Button>
            <Button
              variant={filter === "shoes" ? "default" : "outline"}
              onClick={() => setFilter("shoes")}
            >
              Calçados
            </Button>
          </div>
          <div className="max-w-sm mx-auto w-full">
            <Input
              type="text"
              placeholder="Procurar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {displayedProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-8">Produto não encontrado.</p>
      )}
    </div>
  )
}
