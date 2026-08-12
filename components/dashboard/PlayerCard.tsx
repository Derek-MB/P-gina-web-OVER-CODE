import Card from "@/components/ui/Card";
import type { PlayerProfile } from "./types";

interface PlayerCardProps {
  profile: PlayerProfile | null;
}

export default function PlayerCard({ profile }: PlayerCardProps) {
  if (!profile) return <Card>Cargando perfil...</Card>;

  return <Card className="relative overflow-hidden">{/* TODO: Agregar sprite pixel art del personaje. */}<div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--oc-teal)]/25 blur-2xl" /><div className="relative flex items-start gap-4"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--oc-border)] bg-[var(--oc-surface-raised)] text-xl font-black text-[var(--oc-accent)]">{profile.avatar ? profile.display_name?.slice(0, 1).toUpperCase() : "?"}</div><div className="min-w-0"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Perfil del jugador</p><h2 className="mt-1 truncate text-2xl font-bold text-[var(--oc-text)]">{profile.display_name ?? "Jugador"}</h2><p className="mt-1 text-sm text-[var(--oc-muted)]">Nivel {profile.current_level} · {profile.experience.toLocaleString()} XP</p></div></div><div className="relative mt-5 flex items-center justify-between border-t border-[var(--oc-border)] pt-4"><span className="text-sm text-[var(--oc-muted)]">Créditos disponibles</span><span className="font-bold text-[var(--oc-accent)]">{profile.coins.toLocaleString()} monedas</span></div></Card>;
}
