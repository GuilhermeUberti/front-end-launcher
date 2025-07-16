"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Usuario {
  name: string;
  email: string;
  assinatura_ativa: boolean;
}

export default function MinhaConta() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login"); // Evita voltar no botão "voltar"
      return;
    }

    const buscarPerfil = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Falha ao buscar perfil");
        }

        const json = await res.json();

        if (json?.sucesso && json.usuario) {
          setUsuario(json.usuario);
        } else {
          throw new Error(json?.msg || "Erro inesperado");
        }
      } catch (e: unknown) {
        if (e instanceof Error) {
          setErro(e.message || "Erro ao carregar dados");
        } else {
          setErro("Erro desconhecido");
        }
        localStorage.clear(); // remove dados corrompidos
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    buscarPerfil();
  }, [router]);

  if (loading) return <p className="text-white text-center mt-20">Carregando...</p>;

  if (erro) return <p className="text-red-500 text-center mt-20">{erro}</p>;

  if (!usuario) return null;

  return (
    <div className="min-h-screen bg-darkBg text-white flex flex-col items-center justify-center px-4">
      <div className="bg-black bg-opacity-40 p-8 rounded-lg shadow-lg border border-neonBlue max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-neonBlue">Minha Conta</h1>

        <p><strong>Nome:</strong> {usuario.name}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p>
          <strong>Assinatura:</strong>{" "}
          {usuario.assinatura_ativa ? "Ativa ✅" : "Inativa ❌"}
        </p>

        {usuario.assinatura_ativa ? (
          <a
            href="http://localhost:5000/api/download-launcher"
            className="block mt-6 bg-neonBlue text-black font-semibold py-2 px-4 rounded text-center hover:bg-cyan-400"
            download
          >
            Baixar Launcher
          </a>
        ) : (
          <p className="mt-6 text-yellow-400 text-center">
            Para baixar o launcher, ative sua assinatura!
          </p>
        )}
      </div>
    </div>
  );
}
