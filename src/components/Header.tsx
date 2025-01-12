'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { ShoppingBag, Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from '../context/CartContext'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleTheme = () => {
    if (mounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <header className="bg-background shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Moda-Co
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li><Link href="/" className="text-foreground hover:text-primary">Home</Link></li>
            <li><Link href="/#about" className="text-foreground hover:text-primary">Sobre</Link></li>
            <li><Link href="/#contact" className="text-foreground hover:text-primary">Contato</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="hidden md:flex">
            {mounted && theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Link href="/cart" className="p-2 rounded-full bg-secondary hover:bg-secondary/80 relative">
            <ShoppingBag className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {itemCount}
              </span>
            )}
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block text-foreground hover:text-primary" onClick={toggleMenu}>Home</Link>
            <Link href="/#about" className="block text-foreground hover:text-primary" onClick={toggleMenu}>Sobre</Link>
            <Link href="/#contact" className="block text-foreground hover:text-primary" onClick={toggleMenu}>Contato</Link>
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="w-full justify-start">
              {mounted && theme === 'light' ? (
                <>
                  <Moon className="h-5 w-5 mr-2" /> Dark Mode
                </>
              ) : (
                <>
                  <Sun className="h-5 w-5 mr-2" /> Light Mode
                </>
              )}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}