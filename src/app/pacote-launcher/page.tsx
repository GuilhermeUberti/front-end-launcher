"use client"

import AssinarButton from "@/components/AssinarButton"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function PacoteLauncherPage() {
  const { email } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!email) router.push("/login")
  }, [email, router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9f6] px-4 py-20 text-zinc-900">
      <div className="bg-white p-10 rounded-lg shadow-md max-w-2xl w-full border">
        <h1 className="text-3xl font-bold mb-4 text-pink-600">Pacote GiftPlay 🎮</h1>
        <p className="mb-4">
          Com este pacote você terá acesso ao nosso launcher exclusivo com 4 jogos especiais para lives interativas!
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Jogo Corrida ao Céu 🚀</li>
          <li>Tik-Obby Race 🎯</li>
          <li>Desafio da Verdade 🔍</li>
          <li>Runner do Caos 💥</li>
        </ul>
        <p className="mb-6 text-lg">
          <strong className="text-pink-600">Preço promocional: R$19,90</strong>
        </p>

        <AssinarButton />
      </div>
    </div>
  )
}
