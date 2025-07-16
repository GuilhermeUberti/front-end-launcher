'use client'

import Image from 'next/image'
import { PackageSearch } from 'lucide-react'

export default function PromoPackSection() {
  return (
    <section className="bg-[#f9f9f6] text-zinc-900 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Texto à esquerda */}
        <div className="flex-1 text-left">
          <p className="text-sm font-semibold flex items-center gap-2 mb-2 uppercase tracking-wider text-pink-600">
            <PackageSearch size={18} /> Economize 40%
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Um Pacote,<br className="hidden md:block" /> Uma Aventura
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Aproveite nossa oferta exclusiva e ganhe <strong>4 jogos com 40% de desconto</strong>!
            Ideal para turbinar suas lives ou começar sua jornada com estilo no TikTok.
          </p>
          <button className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition-all">
            Descubra agora →
          </button>
        </div>

        {/* Imagem à direita */}
        <div className="flex-1">
          <Image
            src="/promo.png" // <- substitua pelo nome real da imagem no `public`
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
