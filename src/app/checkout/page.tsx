'use client'

import { useCart } from '../../context/CartContext'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Checkout() {
  const { cart, clearCart } = useCart()
  const [showReceipt, setShowReceipt] = useState(false)
  const [receiptDetails, setReceiptDetails] = useState({
    receiptNumber: '',
    paymentMethod: '',
    amountPaid: 0,
    paymentDate: '',
    cardLastDigits: '',
  })

  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  })

  const [isFormValid, setIsFormValid] = useState(false)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePayment = async () => {
    const receiptNumber = Math.floor(Math.random() * 1000000)

    const today = new Date()
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    const paymentDate = today.toLocaleDateString('pt-BR', options)

    const cardLastDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0')

    const paymentMethod = 'Cartão de Crédito'
    const amountPaid = total

    setReceiptDetails({
      receiptNumber: `#${receiptNumber}`,
      paymentMethod,
      amountPaid,
      paymentDate,
      cardLastDigits,
    })

    setShowReceipt(true)

    clearCart()
  }

  const validateForm = () => {
    const { cardName, cardNumber, expirationDate, cvv } = formData
    const isValid = cardName !== '' && cardNumber !== '' && expirationDate !== '' && cvv !== ''
    setIsFormValid(isValid)
  }

  useEffect(() => {
    validateForm()
  }, [formData])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Pagamento</h1>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="object-cover" />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Detalhes de Pagamento</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">Nome no Cartão</label>
                  <input 
                    type="text" 
                    name="cardName" 
                    className="w-full p-2 border border-gray-300 rounded-md" 
                    value={formData.cardName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Número do Cartão</label>
                  <input 
                    type="text" 
                    name="cardNumber" 
                    className="w-full p-2 border border-gray-300 rounded-md" 
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Data de Expiração</label>
                  <input 
                    type="text" 
                    name="expirationDate" 
                    className="w-full p-2 border border-gray-300 rounded-md" 
                    value={formData.expirationDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">CVV</label>
                  <input 
                    type="text" 
                    name="cvv" 
                    className="w-full p-2 border border-gray-300 rounded-md" 
                    value={formData.cvv}
                    onChange={handleInputChange}
                  />
                </div>
                <Button 
                  className="mt-4 w-full" 
                  onClick={handlePayment}
                  disabled={!isFormValid}
                >
                  Pagar
                </Button>
              </form>
            </div>
          </>
        )}
      </main>

      {showReceipt && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-lg max-w-lg w-full">
            <div className='flex flex-col items-center w-full'>
              <div className='flex flex-col gap-5 items-center mb-16'>
                <Image 
                  src="/verificar.png"
                  alt='icone de confirmado'
                  width={100}
                  height={100}
                />           
                <div className='text-center flex flex-col gap-2'>
                  <p className='text-3xl font-bold'>R${receiptDetails.amountPaid.toFixed(2)}</p>
                  <p>{receiptDetails.paymentDate}</p>
                </div>
              </div>
              <div className='w-full flex flex-col gap-6'>
                <div className='flex justify-between w-full items-center'>
                  <p>Número do Recibo</p>
                  <p>{receiptDetails.receiptNumber}</p>
                </div>
                <div className='flex justify-between w-full items-center'>
                  <p>Método de Pagamento</p>
                  <div className='flex items-center gap-2'>
                    <Image
                      src="/visa.svg"
                      alt='Icone da visa'
                      width={45}
                      height={25}
                    />
                    <p>- {receiptDetails.cardLastDigits}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
              <Button variant="outline" onClick={() => setShowReceipt(false)}>Fechar</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
