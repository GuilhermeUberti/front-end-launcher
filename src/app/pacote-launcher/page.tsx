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
        <h1 className="text-3xl font-bold mb-1 text-pink-600">Pacote GiftPlay 🎮</h1>
        <p className="text-sm text-gray-500 mb-4">
          Tudo o que você precisa para lives ainda mais interativas!
        </p>

        <p className="mb-4">
          Com o <strong>Pacote GiftPlay</strong>, você desbloqueia acesso total ao nosso <strong>launcher exclusivo</strong>,
          com todos os jogos atuais e <strong>todos os lançamentos futuros</strong> feitos para engajar sua audiência em tempo real!
        </p>

        <ul className="list-disc list-inside mb-6">
          <li><strong>MazeMore</strong> – Um labirinto sombrio cheio de perigos 🌀</li>
          <li><strong>GoUp</strong> – Corra contra o tempo em plataformas infinitas 🧗‍♂️</li>
          <li><em>LiveRally</em> (em breve!) – Corridas insanas com comandos da audiência 🏁</li>
        </ul>

        <p className="mb-6 text-lg">
          <strong className="text-pink-600">Preço promocional: R$47,90</strong>
        </p>

        <AssinarButton />
      </div>
    </div>
  )
}
