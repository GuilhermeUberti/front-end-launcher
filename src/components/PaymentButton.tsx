'use client'
//const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function BotaoPagamento({ product }: { product: { name: string, price: number, description: string } }) {
  const handleCheckout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      body: JSON.stringify({ product }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <button
      onClick={handleCheckout}
      className="mt-6 bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-3 rounded-lg"
    >
      Comprar agora — R$ 47,50
    </button>
  )
}
