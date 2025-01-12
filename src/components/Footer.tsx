import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Footer() {
    return (
      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Moda-Co</h3>
              <p className="w-60 text-gray-600">Sua loja completa para roupas modernas e cheias de estilo.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-md font-semibold mb-2">Link rápidos</h4>
              <ul className="text-gray-600">
                <li><Link href="/" className="text-foreground hover:text-primary">Home</Link></li>
                <li><Link href="/#about" className="text-foreground hover:text-primary">Sobre</Link></li>
                <li><Link href="/#contact" className="text-foreground hover:text-primary">Contato</Link></li>
                <li><Link href="/products" className="text-foreground hover:text-primary">Produtos</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-md font-semibold mb-2">Siga-nos</h4>
              <ul className="text-gray-600">
                <li><a href="#" className="hover:text-gray-800">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-800">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-800">Twitter</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4">
              <h4 className="text-md font-semibold mb-2">Newsletter</h4>
              <p className="text-gray-600 mb-2">Assine nosso newsletter para receber novidades</p>
              <input type="email" placeholder="Email" className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 mb-3" />
              <Button size="sm" className="text-sm px-8 py-4">Enviar</Button>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            <p>&copy; 2025 Moda-Co. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  