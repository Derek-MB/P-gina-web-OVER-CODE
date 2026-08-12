"use client";

import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import PageFrame from "@/components/layout/PageFrame";
import { usePlayerProfile } from "@/lib/usePlayerProfile";
import { getAchievementsForUser, type AchievementWithUnlock } from "@/lib/services/achievementService";

export default function AchievementsPage() {
  const { profile, userId, isLoading } = usePlayerProfile();
  const [achievements, setAchievements] = useState<AchievementWithUnlock[]>([]);

  useEffect(() => {
    if (!userId) return;
    const currentUserId = userId;
    async function loadAchievements() {
      try { setAchievements(await getAchievementsForUser(currentUserId)); }
      catch (error) { console.error(error); }
    }
    loadAchievements();
  }, [userId]);

  const unlockedCount = achievements.filter((achievement) => achievement.unlocked_at).length;
  return <PageFrame description="Colecciona insignias al completar desafíos y superar tus propias marcas." eyebrow="Progreso" profile={profile} title="Logros">{isLoading ? <Card>Cargando logros...</Card> : <><Card><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-sm text-[var(--oc-muted)]">Insignias desbloqueadas</p><p className="mt-1 text-3xl font-bold"><span className="text-[var(--oc-accent)]">{unlockedCount}</span> / {achievements.length}</p></div><p className="max-w-md text-sm text-[var(--oc-muted)]">Cada logro queda preparado para recibir su propia insignia pixel art.</p></div></Card><div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{achievements.map((achievement) => { const isUnlocked = Boolean(achievement.unlocked_at); return <Card className={`relative overflow-hidden ${isUnlocked ? "border-[var(--oc-accent)]/50" : "opacity-55 grayscale"}`} key={achievement.id}>{/* TODO: Agregar insignia pixel art del logro. */}<div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--oc-border)] bg-[var(--oc-surface-raised)] text-lg font-black text-[var(--oc-accent)]">{isUnlocked ? "✦" : "?"}</div><p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">{isUnlocked ? "Desbloqueado" : "Bloqueado"}</p><h2 className="mt-1 text-xl font-bold">{achievement.name}</h2><p className="mt-2 text-sm text-[var(--oc-muted)]">{achievement.description}</p></Card>; })}</div>{achievements.length === 0 && <Card className="mt-5">Aún no hay insignias disponibles para mostrar.</Card>}</>}</PageFrame>;
}
