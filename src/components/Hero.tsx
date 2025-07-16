'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="pt-24 px-4 sm:px-8 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg-stars.png')" }}
    >
      {/* Camada escura para contraste */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto py-20">
        {/* Texto */}
        <div className="max-w-xl text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bem-vindo ao <span className="text-neonBlue">GiftPlay</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <strong className="text-white">Transforme suas lives em um verdadeiro espetáculo!</strong> Nossos jogos interativos foram criados para aumentar a participação do público, gerar momentos memoráveis e multiplicar seus presentes ao vivo. <strong className="text-neonBlue">Mais diversão para sua audiência, mais ganhos para você.</strong>
          </motion.p>

          <motion.a
            href="#jogos"
            className="mt-10 inline-block px-8 py-3 rounded-2xl text-lg font-bold text-white bg-neonBlue hover:bg-neonPink transition-all duration-300 shadow-[0_0_20px_#00ffff]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Conheça os Jogos
          </motion.a>
        </div>

        {/* Avatar */}
        <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]">
          <Image
            src="/avatar.png"
            alt="Mascote dançando"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
