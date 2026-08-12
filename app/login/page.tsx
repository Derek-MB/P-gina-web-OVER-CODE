"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function iniciarSesion() {
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 py-8 text-white">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-5 shadow-xl sm:p-8">

        <h1 className="mb-6 text-center text-2xl font-bold sm:text-3xl">
          Iniciar sesión
        </h1>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full mb-4 p-3 rounded-lg bg-slate-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full mb-6 p-3 rounded-lg bg-slate-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-400 mb-4">{error}</p>
        )}

        <button
          onClick={iniciarSesion}
          className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-3"
        >
          Iniciar sesión
        </button>

        <p className="mt-5 text-center text-sm text-slate-300">
          ¿No tienes cuenta? <Link className="font-semibold text-cyan-300 hover:underline" href="/register">Crear cuenta</Link>
        </p>

      </div>
    </main>
  );
}
