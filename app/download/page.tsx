"use client";

import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import PageFrame from "@/components/layout/PageFrame";
import { usePlayerProfile } from "@/lib/usePlayerProfile";
import { getCurrentGameVersion, type GameVersion } from "@/lib/services/gameVersionService";

export default function DownloadPage() {
  const { profile, isLoading } = usePlayerProfile();
  const [currentVersion, setCurrentVersion] = useState<GameVersion | null>(null);

  useEffect(() => {
    async function loadCurrentVersion() {
      try { setCurrentVersion(await getCurrentGameVersion()); }
      catch (error) { console.error(error); }
    }
    loadCurrentVersion();
  }, []);

  return <PageFrame description="Instala la última compilación y continúa aprendiendo dentro del juego." eyebrow="Launcher" profile={profile} title="Descargar OVER CODE">{isLoading ? <Card>Cargando versiones...</Card> : <div className="grid gap-5 lg:grid-cols-3"><Card className="relative overflow-hidden lg:col-span-2">{/* TODO: Agregar ilustración o fondo pixel art del launcher. */}<div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--oc-teal)]/25 blur-3xl" /><div className="relative"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Versión actual</p><h2 className="mt-2 text-4xl font-black">{currentVersion?.version ?? "Próximamente"}</h2><p className="mt-3 max-w-xl text-[var(--oc-muted)]">La experiencia completa de OVER CODE se juega en el cliente oficial. Descarga el juego para continuar desde tus misiones guardadas.</p>{currentVersion ? <a className="mt-6 inline-flex rounded-xl bg-[var(--oc-primary)] px-4 py-3 text-sm font-semibold text-[#EADCCD] transition hover:scale-[1.02] hover:bg-[var(--oc-primary-hover)]" href={currentVersion.download_url}>Descargar juego</a> : <p className="mt-6 text-sm text-[var(--oc-muted)]">La descarga estará disponible con la próxima versión.</p>}</div></Card><Card><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Tu equipo</p><div className="mt-5 space-y-4"><div><p className="text-sm text-[var(--oc-muted)]">Versión instalada</p><p className="mt-1 text-xl font-bold">No detectada</p></div><div className="border-t border-[var(--oc-border)] pt-4"><p className="text-sm text-[var(--oc-muted)]">Estado</p><p className="mt-1 font-bold text-[var(--oc-accent)]">{currentVersion ? "Lista para descargar" : "Esperando versión"}</p></div></div></Card><Card className="lg:col-span-3"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Notas del parche</p><h2 className="mt-1 text-2xl font-bold">{currentVersion ? `Versión ${currentVersion.version}` : "Próxima actualización"}</h2><p className="mt-4 whitespace-pre-line text-sm leading-6 text-[var(--oc-muted)]">{currentVersion?.release_notes ?? "Las notas de futuras versiones aparecerán aquí cuando el equipo publique una nueva compilación."}</p></Card></div>}</PageFrame>;
}
