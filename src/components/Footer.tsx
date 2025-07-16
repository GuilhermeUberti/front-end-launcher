'use client'

import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import Link from "next/link"

export default function Footer() { 

  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-gray-800 mt-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Marca e direitos */}
        <div className="text-center md:text-left text-sm">
          <div className="text-neonBlue font-semibold text-lg">GiftPlay</div>
          <div className="text-gray-400 mt-1">&copy; {new Date().getFullYear()} Todos os direitos reservados.</div>
        </div>

        {/* Links legais */}
        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition">Termos de Uso</Link>
          <Link href="/" className="hover:text-white transition">Política de Privacidade</Link>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-6 text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <FaTiktok />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
            <FaYoutube />
          </a>
        </div>
      </div>

    </footer>
  )
}
