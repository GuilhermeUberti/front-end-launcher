"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { useState } from "react"

export default function AssinarButton() {
  const { email } = useAuth() // 👈 ajustado aqui
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleCheckout = async () => {
    if (!email) return alert("Você precisa estar logado.") // 👈 ajustado aqui

    setLoading(true)

    try {
      const response = await fetch("https://giftplay-backend.onrender.com/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }), // 👈 ajustado aqui
      })

      const data = await response.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert("Erro ao iniciar o pagamento.")
      }
    } catch (err) {
      console.error(err)
      alert("Erro inesperado.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-bold"
      onClick={handleCheckout}
      disabled={loading}
    >
      {loading ? "Redirecionando..." : "Assinar por R$19,90"}
    </button>
  )
}
