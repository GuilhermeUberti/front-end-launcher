"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { API_URL } from "@/lib/api"; 

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email é obrigatório" })
    .email("Email inválido"),
  password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("URL usada:", `${API_URL}/auth/register`);
    setLoading(true);
    setFeedback("");

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.sucesso) {
        // Armazena os dados no localStorage
        localStorage.setItem("token", result.token);
        localStorage.setItem("acesso", result.acesso.toString());
        localStorage.setItem("assinatura_ativa", result.assinatura_ativa.toString());

        // Atualiza o contexto para refletir o login na UI
        login(result.name, data.email);

        setFeedback("✅ Login bem-sucedido!");
        router.push("/");
      } else {
        setFeedback("❌ " + (result?.msg || "Falha no login"));
      }
    } catch {
      setFeedback("❌ Erro de rede");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkBg text-white px-4">
      <div className="w-full max-w-md bg-black bg-opacity-40 p-8 rounded-lg shadow-lg border border-neonBlue">
        <h1 className="text-2xl font-bold mb-6 text-neonBlue">Entrar na sua conta</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded mt-1"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Senha
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="w-full p-2 bg-gray-800 border border-gray-700 rounded mt-1"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-neonBlue hover:bg-cyan-500 text-black font-semibold py-2 rounded transition-colors"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          {feedback && <p className="text-center mt-4 text-sm">{feedback}</p>}

          <p className="text-sm text-center mt-4">
            Não tem uma conta?{" "}
            <Link href="/register" className="text-neonPink hover:underline">
              Crie uma aqui
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
