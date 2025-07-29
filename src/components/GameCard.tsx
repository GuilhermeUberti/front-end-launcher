import Image from 'next/image'
import { ReactNode } from 'react'

interface GameCardProps {
  title: string
  description?: string
  icon?: ReactNode
  imageSrc?: string
  footer?: ReactNode // <-- novo
}

export default function GameCard({ title, description, icon, imageSrc, footer }: GameCardProps) {
  return (
    <div className="bg-darkBg border border-neonBlue rounded-2xl p-6 shadow-[0_0_20px_#00ffff40] hover:shadow-[0_0_40px_#00ffff80] transition-all duration-300">
      <div className="mb-4 flex justify-center">
        {imageSrc ? (
          <Image src={imageSrc} alt={title} width={250} height={250} unoptimized />
        ) : (
          <div className="text-4xl text-neonBlue">{icon}</div>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
      {footer && <div className="mt-3">{footer}</div>}
    </div>
  )
}
