'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar botão após rolagem
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-neonBlue text-black hover:bg-neonPink hover:text-white p-3 rounded-full shadow-lg transition-all"
      aria-label="Voltar ao topo"
    >
      <FaArrowUp />
    </button>
  )
}
