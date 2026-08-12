import Card from "@/components/ui/Card";
import type { PlayerProfile } from "./types";

interface ProgressCardProps {
  profile: PlayerProfile | null;
}

export default function ProgressCard({ profile }: ProgressCardProps) {
  if (!profile) return <Card>Cargando progreso...</Card>;

  const progress = Math.min(Math.max(profile.progress, 0), 100);

  return <Card><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Progreso</p><h2 className="mt-1 text-2xl font-bold text-[var(--oc-text)]">Nivel {profile.current_level}</h2></div><span className="rounded-lg bg-[var(--oc-teal)]/20 px-3 py-1 text-sm font-bold text-[var(--oc-accent)]">{progress}%</span></div><div className="mt-6 h-3 overflow-hidden rounded-full bg-[var(--oc-background)]"><div className="h-full rounded-full bg-gradient-to-r from-[var(--oc-primary)] to-[var(--oc-accent)] transition-all duration-700" style={{ width: `${progress}%` }} /></div><p className="mt-3 text-sm text-[var(--oc-muted)]">Sigue resolviendo desafíos para desbloquear el siguiente nivel.</p></Card>;
}
