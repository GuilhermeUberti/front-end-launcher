import GameCard from './GameCard'
import { MousePointerClickIcon, Wrench } from 'lucide-react'
import Link from 'next/link'

export default function GameSection() {
  return (
    <section id="jogos" className="py-20 px-6 bg-darkBg text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-neonPink mb-4">Jogos Interativos</h2>
        <p className="text-gray-300 mb-12">
          Crie experiências únicas para suas lives com jogos criados para engajar seu público!
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* GoUp - jogo ativo */}
          <Link href="/games/corrida-ao-ceu" className="block">
            <GameCard
              title="GoUp"
              description="Suba degraus enquanto sua audiência tenta te atrapalhar ao vivo!"
              imageSrc="/GoUp-gif.gif"
            />
          </Link>

          {/* MazeMore - jogo ativo */}
          <Link href="/games/maze-more" className="block">
            <GameCard
              title="MazeMore"
              description="Escape do labirinto antes que sua audiência te vença!"
              imageSrc="/maze-gif.gif"
            />
          </Link>

          {/* LiveRally - jogo em desenvolvimento (desabilitado visualmente) */}
          <GameCard
            title="LiveRally"
            imageSrc="/LiveRally.png"
            icon={<MousePointerClickIcon />}
            disabled
            footer={
              <div className="flex items-center justify-center text-yellow-400 gap-2 text-sm">
                <Wrench size={18} />
                Em desenvolvimento
              </div>
            }
          />
        </div>
      </div>
    </section>
  )
}
