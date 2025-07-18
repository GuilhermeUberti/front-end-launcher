'use client'

import Image from 'next/image'
import { useState } from 'react'
import AssinarButton from "@/components/AssinarButton"

const gameImages = [
  '/games/goup.png',
  '/games/goup1.jpeg',
  '/games/goup2.jpeg',
  '/games/goup3.jpeg',
]

export default function CorridaAoCeuPage() {
  const [selectedImage, setSelectedImage] = useState(gameImages[0])

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 md:px-20 pt-28">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Galeria de imagens */}
        <div className="flex-1">
          <Image
            src={selectedImage}
            alt="Imagem Corrida ao Céu"
            width={800}
            height={600}
            className={`rounded-xl shadow-lg w-full max-h-[500px] object-contain ${selectedImage.includes('goup.png') ? 'bg-white' : 'bg-transparent'}`}
          />

          <div className="flex gap-4 mt-4 flex-wrap">
            {gameImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`border-2 rounded ${selectedImage === img ? 'border-neonPink' : 'border-transparent'}`}
              >
                <Image
                  src={img}
                  alt={`Imagem ${i + 1}`}
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px] object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Informações do jogo */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold">Corrida ao Céu</h1>
          <p className="text-xl text-gray-300 mt-4">
            Suba degraus enquanto sua audiência tenta te atrapalhar ao vivo!
          </p>

          <ul className="mt-6 space-y-2">
            <li className="flex items-center gap-2">🔥 Faça sua live bombar com interações em tempo real</li>
            <li className="flex items-center gap-2">🔌 Integração fácil com TikFinity e STE — plug and play</li>
            <li className="flex items-center gap-2">🎯 Jogo disponível direto no nosso launcher exclusivo</li>
            <li className="flex items-center gap-2">⚙️ Sem dor de cabeça: instalou, jogou, lucrou</li>
          </ul>

          {/* Botão Stripe */}
          <AssinarButton />
        </div>
      </div>
    </div>
  )
}
