'use client'

import { useState } from 'react'

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [status, setStatus] = useState<'idle' | 'enviando' | 'enviado' | 'erro'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('enviando')

    try {
      const res = await fetch('/api/contato-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('enviado')
        setForm({ nome: '', email: '', mensagem: '' })
      } else {
        setStatus('erro')
      }
    } catch (err) {
      setStatus('erro')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-gray-900 p-6 rounded-lg shadow"
      >
        <h1 className="text-xl font-bold mb-4 text-neonBlue">Fale com a gente</h1>

        <input
          type="text"
          placeholder="Seu nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 border border-gray-700"
          required
        />

        <input
          type="email"
          placeholder="Seu email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 border border-gray-700"
          required
        />

        <textarea
          placeholder="Sua mensagem"
          value={form.mensagem}
          onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
          className="w-full mb-4 px-4 py-2 rounded bg-gray-800 border border-gray-700"
          rows={5}
          required
        />

        <button
          type="submit"
          className="w-full bg-neonBlue text-black font-bold py-2 rounded hover:bg-cyan-400 disabled:opacity-50"
          disabled={status === 'enviando'}
        >
          {status === 'enviando' ? 'Enviando...' : 'Enviar'}
        </button>

        {status === 'enviado' && (
          <p className="text-green-400 mt-4">Mensagem enviada com sucesso!</p>
        )}
        {status === 'erro' && (
          <p className="text-red-400 mt-4">Ocorreu um erro ao enviar. Tente novamente.</p>
        )}
      </form>
    </div>
  )
}
