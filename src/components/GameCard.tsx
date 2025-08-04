import Image from 'next/image'
import { ReactNode } from 'react'

interface GameCardProps {
  title: string
  description?: string
  icon?: ReactNode
  imageSrc?: string
  footer?: ReactNode
  disabled?: boolean
}

export default function GameCard({ title, description, icon, imageSrc, footer, disabled }: GameCardProps) {
  return (
    <div
      className={`min-h-[360px] h-full flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 ${
        disabled
          ? 'bg-darkBg border border-gray-600 opacity-50 cursor-not-allowed'
          : 'bg-darkBg border border-neonBlue shadow-[0_0_20px_#00ffff40] hover:shadow-[0_0_40px_#00ffff80]'
      }`}
    >
      <div>
        <div className="mb-4 flex justify-center">
          {imageSrc ? (
            <Image src={imageSrc} alt={title} width={250} height={250} unoptimized />
          ) : (
            <div className="text-4xl text-neonBlue">{icon}</div>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>

      {footer && <div className="mt-3">{footer}</div>}
    </div>
  )
}
