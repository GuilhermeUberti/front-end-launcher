'use client'

import Image from 'next/image'
import { PackageSearch } from 'lucide-react'

import { useRouter } from "next/navigation"

export default function PromoPackSection() {
  const router = useRouter()

  return (
    <section className="bg-[#f9f9f6] text-zinc-900 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto à esquerda */}
        <div className="flex-1 text-left">
          <p className="text-sm font-semibold flex items-center gap-2 mb-2 uppercase tracking-wider text-pink-600">
            <PackageSearch size={18} /> Oferta Especial
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Baixe o Launcher<br className="hidden md:block" /> e leve sua live a outro nível
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Transforme suas lives no TikTok com jogos interativos feitos sob medida para engajar sua audiência em tempo real! <br />
            Com nosso launcher exclusivo, você instala, atualiza e joga com total praticidade — tudo em um só lugar. <br />
            E o melhor: ao assinar, você garante <strong className="text-neonPink">acesso ilimitado a todos os jogos futuros</strong>, sem pagar nada a mais por isso!
          </p>

          <button
            onClick={() => router.push("/pacote-launcher")}
            className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all"
          >
            Baixar agora →
          </button>
        </div>

        {/* Imagem à direita */}
        <div className="flex-1">
          <Image
            src="/promo.png"
            alt="Pacote Promocional"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
