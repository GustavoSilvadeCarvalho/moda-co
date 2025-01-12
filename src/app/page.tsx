import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { ProductGrid } from '../components/ProductGrid'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { products } from '../data/products'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-grow">
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
          Produtos em destaque</h2>
          <ProductGrid products={products} limit={4} />
        </section>
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

