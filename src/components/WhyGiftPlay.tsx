'use client'

import Image from 'next/image'

export default function WhyGiftPlay() {
    const items = [
        {
            title: 'Mais Ganhos e Visibilidade',
            text: 'Nossos jogos são otimizados para atrair o máximo de espectadores e converter presentes em renda.',
            icon: '/cachorro.png',
        },
        {
            title: 'Fácil de Configurar',
            text: 'Compatível com Tikfinity e Streamer.bot. Você configura em menos de 2 minutos.',
            icon: '/gato.png',
        },
        {
            title: 'Acesso Vitalício',
            text: 'Ao comprar um jogo, você tem acesso vitalício, sem mensalidade ou assinatura.',
            icon: '/urso.png',
        },
    ]

    return (
        <section className="bg-darkBg py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
                Por que usar o <span className="text-neonBlue">GiftPlay</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
                {items.map(({ title, text, icon }) => (
                    <div key={title} className="flex flex-col items-center text-white">
                        <Image
                            src={icon}
                            alt={title}
                            width={100}
                            height={100}
                            className="mb-6 object-contain"
                            style={{ maxHeight: '100px' }}
                        />

                        <h3 className="text-xl font-bold mb-4">{title}</h3>
                        <p className="text-gray-300">{text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
