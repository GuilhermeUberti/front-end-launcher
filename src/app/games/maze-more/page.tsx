'use client'

import Image from 'next/image'
import { useState } from 'react'
import AssinarButton from "@/components/AssinarButton"

const gameImages = [
    '/games/mazemore/maze1.png',
    '/games/mazemore/maze2.jpeg',
    '/games/mazemore/maze3.jpeg',
    '/games/mazemore/maze4.jpeg',
]

export default function MazeMorePage() {
    const [selectedImage, setSelectedImage] = useState(gameImages[0])

    const isLogo = selectedImage.includes('logo') || selectedImage.includes('goup')

    return (
        <div className="min-h-screen bg-black text-white px-6 py-10 md:px-20 pt-28">
            <div className="flex flex-col md:flex-row gap-10 items-start">
                {/* Galeria de imagens */}
                <div className="flex-1">
                    <div
                        className={`w-full h-[500px] rounded-xl overflow-hidden flex items-center justify-center 
            ${isLogo ? 'bg-white' : 'bg-black'}`}
                    >
                        <Image
                            src={selectedImage}
                            alt="Imagem do jogo"
                            width={800}
                            height={500}
                            className={`${isLogo ? 'object-contain' : 'object-cover'} w-full h-full`}
                        />
                    </div>

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
                    <h1 className="text-4xl font-bold">Fuja do Labirinto</h1>
                    <p className="text-xl text-gray-300 mt-4">
                        Você acorda preso em um labirinto sombrio... Mas não está sozinho. Sua audiência controla o caos: cada presente enviado pode abrir um caminho, ou invocar sua ruína. Corra, pense rápido e sobreviva.
                        Ganhe dinheiro enquanto tenta escapar. Se falhar... eles vencem.
                    </p>

                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center gap-2">🔥 Faça sua live bombar com interações em tempo real</li>
                        <li className="flex items-center gap-2">🔌 Integração fácil com TikFinity e STE — plug and play</li>
                        <li className="flex items-center gap-2">🎯 Jogo disponível direto no nosso launcher exclusivo</li>
                        <li className="flex items-center gap-2">⚙️ Sem dor de cabeça: instalou, jogou, lucrou</li>
                        <li className="flex items-center gap-2"></li>
                        <li className="flex items-center gap-2"></li>
                        <li className="flex items-center gap-2"></li>
                        <li className="flex items-center gap-2"></li>
                    </ul>

                    <AssinarButton />
                </div>
            </div>
        </div>
    )
}
