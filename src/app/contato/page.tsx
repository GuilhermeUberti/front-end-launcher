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
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  const onSubmit = async (data: FormData) => {
    try {
      setErro("");
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/email/contato`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Fale com a gente</h1>

      {enviado ? (
        <div className="bg-green-100 text-green-800 p-4 rounded">
          ✅ Mensagem enviada com sucesso!
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">Nome</label>
            <input
              {...register("nome")}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              {...register("email")}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Mensagem</label>
            <textarea
              {...register("mensagem")}
              className="w-full border border-gray-300 p-2 rounded h-32 resize-none"
            />
            {errors.mensagem && <p className="text-red-500 text-sm">{errors.mensagem.message}</p>}
          </div>

          {erro && <p className="text-red-600">{erro}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}
