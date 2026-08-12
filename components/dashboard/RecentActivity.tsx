import Card from "@/components/ui/Card";
import type { PlayerProfile } from "./types";

interface RecentActivityProps {
  profile: PlayerProfile | null;
}

function formatPlayTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours > 0 ? `${hours} h ${minutes} min` : `${minutes} min`;
}

export default function RecentActivity({ profile }: RecentActivityProps) {
  if (!profile) return <Card className="xl:col-span-2">Cargando actividad...</Card>;

  const activity = [{ label: "Partidas jugadas", value: profile.games_played.toLocaleString() }, { label: "Respuestas correctas", value: profile.correct_answers.toLocaleString() }, { label: "Tiempo en misión", value: formatPlayTime(profile.play_time_seconds) }];
  return <Card className="xl:col-span-2"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Actividad reciente</p><h2 className="mt-1 text-2xl font-bold text-[var(--oc-text)]">Tu avance en OVER CODE</h2><div className="mt-5 grid gap-3 sm:grid-cols-3">{activity.map((item) => <div className="rounded-xl border border-[var(--oc-border)] bg-[var(--oc-surface-raised)] p-4" key={item.label}><p className="text-xs text-[var(--oc-muted)]">{item.label}</p><p className="mt-2 text-xl font-bold text-[var(--oc-text)]">{item.value}</p></div>)}</div></Card>;
}
