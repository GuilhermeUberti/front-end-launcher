"use client"

import { User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "../context/AuthContext"

const Navbar = () => {
  const { name, isLoggedIn, logout, loading } = useAuth()

  if (loading) return null // ou um spinner opcional

  const firstName = name?.split(" ")[0] || ""

  return (
    <header className="fixed top-0 w-full z-50 bg-darkBg bg-opacity-90 backdrop-blur-sm border-b border-neonBlue shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        {/* LOGO COM IMAGEM */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="GiftPlay logo"
            width={50}
            height={50}
            className="w-[60px] h-auto drop-shadow-[0_0_8px_#00ffff] rounded-lg"
          />
          <span className="text-xl font-extrabold text-neonBlue hidden sm:inline">GiftPlay</span>
        </Link>

        {/* LINKS */}
        <ul className="flex gap-6 text-white font-semibold text-sm sm:text-base items-center overflow-x-auto max-w-full whitespace-nowrap scrollbar-hide pl-16 sm:pl-0">
          <li>
            <Link href="/" className="hover:text-neonPink transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link href="#jogos" className="hover:text-neonPink transition-colors duration-300">Jogos</Link>
          </li>
          <li>
            <Link href="#contato" className="hover:text-neonPink transition-colors duration-300">Contato</Link>
          </li>

          {!isLoggedIn ? (
            <>
              <li>
                <Link href="/login" className="hover:text-neonBlue transition-colors duration-300">Entrar</Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-neonBlue transition-colors duration-300">Criar uma conta</Link>
              </li>
            </>
          ) : (
            <li className="flex items-center gap-3 text-sm text-white">
              <span className="hidden sm:inline">Olá, {firstName}</span>
              <Link
                href={"/"}
                onClick={logout}
                className="text-red-400 hover:text-red-500 text-ml underline"
              >
                Logout
              </Link>
              <Link
                href="/minha-conta"
                title="Minha Conta"
                className="hover:text-neonPink transition-colors duration-300"
              >
                <User size={20} />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
