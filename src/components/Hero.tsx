import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="bg-gray-100 py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl text-white md:text-6xl font-bold mb-4">Moda-Co</h1>
        <p className="text-xl text-black md:text-2xl mb-8">
          Descubra as últimas tendências da moda</p>
        <Button size="lg" className="text-lg px-8 py-4">Compre Agora</Button>
      </div>
    </div>
  )
}