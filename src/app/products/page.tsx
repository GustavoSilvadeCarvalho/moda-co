import { ProductGrid } from '@/components/ProductGrid'
import { products } from "@/data/products";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className='container mx-auto px-4 py-16'>
        <ProductGrid products={products} isSticky={true} />
      </section>  
      <Footer />
    </div>
  );
}
