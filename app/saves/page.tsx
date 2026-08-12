"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import PageFrame from "@/components/layout/PageFrame";
import { usePlayerProfile } from "@/lib/usePlayerProfile";
import { getSaveSlotsForUser, type SaveSlot } from "@/lib/services/saveSlotService";

function formatPlayTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return hours > 0 ? `${hours} h ${minutes} min` : `${minutes} min`;
}

function formatDate(value: string | null) {
  return value ? new Intl.DateTimeFormat("es-CR", { dateStyle: "medium" }).format(new Date(value)) : "Sin actividad";
}

export default function SavesPage() {
  const { profile, userId, isLoading } = usePlayerProfile();
  const [saveSlots, setSaveSlots] = useState<SaveSlot[]>([]);

  useEffect(() => {
    if (!userId) return;
    const currentUserId = userId;
    async function loadSaves() {
      try { setSaveSlots(await getSaveSlotsForUser(currentUserId)); }
      catch (error) { console.error(error); }
    }
    loadSaves();
  }, [userId]);

  const slots = [1, 2, 3].map((slotNumber) => saveSlots.find((slot) => slot.slot_number === slotNumber) ?? null);
  return <PageFrame description="Elige dónde retomar tu aventura en OVER CODE." eyebrow="Progreso" profile={profile} title="Partidas guardadas">{isLoading ? <Card>Cargando partidas...</Card> : <div className="grid gap-5 lg:grid-cols-3">{slots.map((slot, index) => <Card key={slot?.id ?? `empty-${index}`} className="flex min-h-80 flex-col">{/* TODO: Agregar miniatura pixel art de la partida. */}<div className="flex h-28 items-center justify-center rounded-xl border border-dashed border-[var(--oc-border)] bg-[var(--oc-surface-raised)] text-sm font-bold text-[var(--oc-muted)]">{slot ? "Miniatura de misión" : "Slot disponible"}</div>{slot ? <><p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Partida {slot.slot_number}</p><h2 className="mt-1 text-xl font-bold">{slot.slot_name ?? slot.world_name ?? `Misión nivel ${slot.current_level}`}</h2><div className="mt-5 space-y-3 text-sm"><div className="flex justify-between text-[var(--oc-muted)]"><span>Nivel</span><span className="font-semibold text-[var(--oc-text)]">{slot.current_level}</span></div><div className="flex justify-between text-[var(--oc-muted)]"><span>Última partida</span><span className="font-semibold text-[var(--oc-text)]">{formatDate(slot.last_played_at)}</span></div><div className="flex justify-between text-[var(--oc-muted)]"><span>Tiempo jugado</span><span className="font-semibold text-[var(--oc-text)]">{formatPlayTime(slot.play_time_seconds)}</span></div></div><p className="mt-5 text-sm text-[var(--oc-muted)]">Mundo: {slot.world_name ?? "Sin mundo asignado"}</p><Button className="mt-auto" fullWidth>Continuar</Button></> : <><h2 className="mt-5 text-xl font-bold">Nueva partida</h2><p className="mt-2 text-sm text-[var(--oc-muted)]">Este espacio estará disponible cuando inicies una nueva aventura.</p></>}</Card>)}</div>}</PageFrame>;
}
