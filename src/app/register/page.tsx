"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";

// Schema de validação
const registerSchema = z
  .object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 letras"),
    email: z
      .string()
      .min(1, { message: "Email é obrigatório" })
      .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
        message: "Email inválido",
      }),
    password: z.string().min(6, "Senha precisa ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setFeedback("");

    const cleanData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanData),
      });

      const result = await response.json();
      if (response.ok && result.sucesso) {
        setFeedback("✅ Conta criada com sucesso!");
        setTimeout(() => router.push("/login"), 2000);
      } else {
        setFeedback("❌ Erro: " + (result?.mensagem || "Tente novamente"));
      }
    } catch (error) {
      if (error instanceof Error) {
        setFeedback("❌ Erro de rede: " + error.message);
      } else {
        setFeedback("❌ Erro de rede desconhecido");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-darkBg flex items-center justify-center px-4">
      <div className="bg-zinc-900 p-8 rounded-lg shadow-xl w-full max-w-md border border-neonBlue">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Criar Conta</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nome completo"
              {...register("name")}
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-neonBlue"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-neonBlue"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-neonBlue"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirmar senha"
              {...register("confirmPassword")}
              className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-neonBlue"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-neonBlue text-black py-3 rounded font-bold hover:bg-cyan-400 transition-colors"
          >
            {loading ? "Criando..." : "Criar Conta"}
          </button>
        </form>

        {feedback && <p className="text-white text-center mt-4">{feedback}</p>}

        <p className="text-gray-400 text-center mt-4">
          Já tem uma conta?{" "}
          <a href="/login" className="text-neonBlue hover:underline">
            Entrar
          </a>
        </p>
      </div>
    </main>
  );
}
