import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contate-nos</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Nome</label>
              <Input id="name" placeholder="Nome" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Email</label>
              <Input id="email" type="email" placeholder="Email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-1">Mensagem</label>
              <Textarea id="message" placeholder="Mensagem" rows={4} required />
            </div>
            <Button type="submit" className="w-full">Enviar Mensagem</Button>
          </form>
        </div>
      </div>
    </section>
  )
}