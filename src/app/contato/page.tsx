"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  mensagem: z.string().min(1, "Mensagem obrigatória"),
});

type FormData = z.infer<typeof schema>;

export default function ContatoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  const onSubmit = async (data: FormData) => {
    try {
      setErro("");
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/contato`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (json.sucesso) {
        setEnviado(true);
      } else {
        setErro("Erro ao enviar mensagem.");
      }
    } catch (err) {
      console.error(err);
      setErro("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-16 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-zinc-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Fale com a gente</h1>

        {enviado ? (
          <div className="bg-green-700 text-white p-4 rounded text-center">
            ✅ Mensagem enviada com sucesso!
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Nome */}
            <div>
              <label className="block mb-1 font-medium">Nome</label>
              <input
                {...register("nome")}
                className="w-full bg-zinc-800 text-white border border-zinc-600 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.nome && (
                <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                {...register("email")}
                className="w-full bg-zinc-800 text-white border border-zinc-600 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Mensagem */}
            <div>
              <label className="block mb-1 font-medium">Mensagem</label>
              <textarea
                {...register("mensagem")}
                className="w-full bg-zinc-800 text-white border border-zinc-600 p-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.mensagem && (
                <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>
              )}
            </div>

            {/* Erro */}
            {erro && <p className="text-red-600 text-sm">{erro}</p>}

            {/* Botão */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
