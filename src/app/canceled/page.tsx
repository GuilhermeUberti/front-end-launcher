"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function PagamentoCancelado() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/pacote-launcher")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-10 text-center">
      <h1 className="text-4xl font-bold text-red-500">❌ Pagamento cancelado</h1>
      <p className="mt-4 text-lg text-gray-300">
        Tudo bem, você pode tentar novamente quando estiver pronto :)
      </p>
      <p className="mt-2 text-gray-400">
        Você será redirecionado para a página do pacote em instantes...
      </p>
      <Link
        href="/pacote-launcher"
        className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
      >
        Ir agora manualmente →
      </Link>
    </div>
  )
}
