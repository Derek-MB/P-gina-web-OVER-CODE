"use client";

import Card from "@/components/ui/Card";
import PageFrame from "@/components/layout/PageFrame";
import { usePlayerProfile } from "@/lib/usePlayerProfile";

function formatPlayTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours > 0 ? `${hours} h ${minutes} min` : `${minutes} min`;
}

export default function ProfilePage() {
  const { profile, isLoading } = usePlayerProfile();
  if (isLoading) return <PageFrame description="Cargando tu perfil de jugador." eyebrow="Jugador" profile={profile} title="Perfil"><Card>Cargando perfil...</Card></PageFrame>;
  if (!profile) return null;

  const stats = [{ label: "Partidas jugadas", value: profile.games_played }, { label: "Intentos", value: profile.attempts }, { label: "Respuestas correctas", value: profile.correct_answers }, { label: "Respuestas por mejorar", value: profile.wrong_answers }, { label: "Tiempo jugado", value: formatPlayTime(profile.play_time_seconds) }, { label: "Nivel más alto", value: profile.highest_unlocked_level }];

  return <PageFrame description="Todo lo que has construido en tu aventura de programación." eyebrow="Jugador" profile={profile} title="Perfil de jugador"><div className="grid gap-5 lg:grid-cols-3"><Card className="lg:col-span-2"><div className="flex flex-col gap-5 sm:flex-row sm:items-center">{/* TODO: Agregar sprite pixel art del personaje. */}<div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-[var(--oc-border)] bg-[var(--oc-surface-raised)] text-3xl font-black text-[var(--oc-accent)]">{profile.avatar ? profile.display_name?.slice(0, 1).toUpperCase() : "?"}</div><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Explorador de código</p><h2 className="mt-1 text-3xl font-bold">{profile.display_name ?? "Jugador"}</h2><p className="mt-2 text-[var(--oc-muted)]">Nivel actual {profile.current_level} · Nivel máximo desbloqueado {profile.highest_unlocked_level}</p></div></div><div className="mt-6 h-3 overflow-hidden rounded-full bg-[var(--oc-background)]"><div className="h-full rounded-full bg-gradient-to-r from-[var(--oc-primary)] to-[var(--oc-accent)] transition-all duration-700" style={{ width: `${Math.min(Math.max(profile.progress, 0), 100)}%` }} /></div><p className="mt-3 text-sm text-[var(--oc-muted)]">{profile.progress}% de progreso en el nivel actual</p></Card><Card><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Recursos</p><div className="mt-5 space-y-4"><div><p className="text-sm text-[var(--oc-muted)]">Experiencia</p><p className="text-3xl font-bold">{profile.experience.toLocaleString()} XP</p></div><div className="border-t border-[var(--oc-border)] pt-4"><p className="text-sm text-[var(--oc-muted)]">Monedas</p><p className="text-3xl font-bold text-[var(--oc-accent)]">{profile.coins.toLocaleString()}</p></div></div></Card><Card className="lg:col-span-3"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Estadísticas de misión</p><div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">{stats.map((stat) => <div className="rounded-xl border border-[var(--oc-border)] bg-[var(--oc-surface-raised)] p-4" key={stat.label}><p className="text-xs text-[var(--oc-muted)]">{stat.label}</p><p className="mt-2 text-xl font-bold">{typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value}</p></div>)}</div></Card></div></PageFrame>;
}
