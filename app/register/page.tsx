"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Register() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function register(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");
    const name = displayName.trim();
    if (!name || !email.trim() || !password || !confirmation) return setError("Completa todos los campos.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Ingresa un correo electrónico válido.");
    if (password.length < 8) return setError("La contraseña debe tener al menos 8 caracteres.");
    if (password !== confirmation) return setError("Las contraseñas no coinciden.");

    setIsSubmitting(true);
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: { display_name: name, username: name },
        emailRedirectTo: `${window.location.origin}/login`,
      },
    });
    setIsSubmitting(false);
    if (signUpError) return setError(signUpError.message);
    if (data.session) return router.replace("/dashboard");
    setNotice("Cuenta creada. Revisa tu correo para confirmar tu cuenta antes de iniciar sesión.");
  }

  return <main className="flex min-h-screen items-center justify-center bg-[var(--oc-background)] px-5 py-10 text-[var(--oc-text)]"><section className="w-full max-w-md rounded-3xl border border-[var(--oc-border)] bg-[var(--oc-surface)] p-7 shadow-2xl"><p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[var(--oc-accent)]">Nueva misión</p><h1 className="mt-2 text-center text-3xl font-black">Crear cuenta</h1><p className="mt-3 text-center text-sm text-[var(--oc-muted)]">Guarda tu avance y continúa aprendiendo dentro de OVER CODE.</p><form className="mt-7 space-y-4" onSubmit={register}><label className="block text-sm font-semibold">Nombre de jugador<input autoComplete="nickname" className="mt-2 w-full rounded-xl border border-[var(--oc-border)] bg-[var(--oc-surface-raised)] px-4 py-3 outline-none transition focus:border-[var(--oc-accent)]" onChange={(event) => setDisplayName(event.target.value)} value={displayName} /></label><label className="block text-sm font-semibold">Correo electrónico<input autoComplete="email" className="mt-2 w-full rounded-xl border border-[var(--oc-border)] bg-[var(--oc-surface-raised)] px-4 py-3 outline-none transition focus:border-[var(--oc-accent)]" onChange={(event) => setEmail(event.target.value)} type="email" value={email} /></label><label className="block text-sm font-semibold">Contraseña<input autoComplete="new-password" className="mt-2 w-full rounded-xl border border-[var(--oc-border)] bg-[var(--oc-surface-raised)] px-4 py-3 outline-none transition focus:border-[var(--oc-accent)]" onChange={(event) => setPassword(event.target.value)} type="password" value={password} /></label><label className="block text-sm font-semibold">Confirmar contraseña<input autoComplete="new-password" className="mt-2 w-full rounded-xl border border-[var(--oc-border)] bg-[var(--oc-surface-raised)] px-4 py-3 outline-none transition focus:border-[var(--oc-accent)]" onChange={(event) => setConfirmation(event.target.value)} type="password" value={confirmation} /></label>{error && <p className="rounded-xl border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-300" role="alert">{error}</p>}{notice && <p className="rounded-xl border border-[var(--oc-accent)]/40 bg-[var(--oc-accent)]/10 p-3 text-sm text-[var(--oc-text)]">{notice}</p>}<button className="w-full rounded-xl bg-[var(--oc-primary)] px-4 py-3 font-bold text-[#EADCCD] transition hover:bg-[var(--oc-primary-hover)] disabled:cursor-not-allowed disabled:opacity-60" disabled={isSubmitting} type="submit">{isSubmitting ? "Creando cuenta..." : "Crear cuenta"}</button></form><p className="mt-6 text-center text-sm text-[var(--oc-muted)]">¿Ya tienes cuenta? <Link className="font-semibold text-[var(--oc-accent)] hover:underline" href="/login">Inicia sesión</Link></p></section></main>;
}
