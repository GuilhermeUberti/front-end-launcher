"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function PagamentoSucesso() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/minha-conta")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-10 text-center">
      <h1 className="text-4xl font-bold text-green-400">✅ Pagamento realizado com sucesso!</h1>
      <p className="mt-4 text-lg text-gray-300">
        Obrigado por adquirir o jogo <strong>Corrida ao Céu</strong> 🎮
      </p>

      <p className="mt-2 text-gray-400">
        Você será redirecionado para sua conta em instantes...
      </p>

      <Link
        href="/minha-conta"
        className="mt-6 inline-block bg-neonBlue hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
      >
        Ir agora manualmente →
      </Link>
    </div>
  )
}
