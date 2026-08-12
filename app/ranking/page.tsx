"use client";

import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import PageFrame from "@/components/layout/PageFrame";
import { usePlayerProfile } from "@/lib/usePlayerProfile";
import { getTopLeaderboardEntries, type LeaderboardEntry } from "@/lib/services/leaderboardService";

export default function RankingPage() {
  const { profile, isLoading } = usePlayerProfile();
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    async function loadRanking() {
      try { setEntries(await getTopLeaderboardEntries()); }
      catch (error) { console.error(error); }
    }
    loadRanking();
  }, []);

  return <PageFrame description="Los mejores exploradores de código de la comunidad." eyebrow="Competición" profile={profile} title="Ranking global">{isLoading ? <Card>Cargando ranking...</Card> : <div className="grid gap-4">{entries.map((entry, index) => <Card key={entry.user_id}><div className="flex flex-col gap-4 sm:flex-row sm:items-center"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--oc-primary)] text-xl font-black text-[#EADCCD]">#{index + 1}</div>{/* TODO: Agregar avatar pixel art del jugador. */}<div className="min-w-0 flex-1"><p className="truncate text-lg font-bold">{entry.display_name ?? entry.username}</p><p className="text-sm text-[var(--oc-muted)]">Nivel {entry.current_level} · {entry.achievement_count} logros</p></div><div className="grid grid-cols-2 gap-4 text-left sm:flex sm:gap-8 sm:text-right"><div><p className="text-xs text-[var(--oc-muted)]">Puntaje</p><p className="font-bold text-[var(--oc-accent)]">{entry.ranking_score.toLocaleString()}</p></div><div><p className="text-xs text-[var(--oc-muted)]">Experiencia</p><p className="font-bold">{entry.experience.toLocaleString()} XP</p></div></div></div></Card>)}{entries.length === 0 && <Card>Aún no hay posiciones disponibles.</Card>}</div>}</PageFrame>;
}
