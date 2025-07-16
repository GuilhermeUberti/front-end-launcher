import Link from "next/link"

export default function PagamentoCancelado() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-10 text-center">
      <h1 className="text-4xl font-bold text-red-500">❌ Pagamento cancelado</h1>
      <p className="mt-4 text-lg text-gray-300">
        Tudo bem, você pode tentar novamente quando estiver pronto :)
      </p>
      <Link
        href="/"
        className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
      >
        Voltar à loja
      </Link>
    </div>
  )
}
