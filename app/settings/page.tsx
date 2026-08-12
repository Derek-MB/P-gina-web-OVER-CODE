"use client";

import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/layout/ThemeToggle";
import PageFrame from "@/components/layout/PageFrame";
import { usePlayerProfile } from "@/lib/usePlayerProfile";
import { supabase } from "@/lib/supabase";

export default function SettingsPage() {
  const router = useRouter();
  const { profile, isLoading } = usePlayerProfile();
  async function signOut() { await supabase.auth.signOut(); router.push("/"); }

  return <PageFrame description="Personaliza el launcher para que se adapte a tu forma de jugar." eyebrow="Preferencias" profile={profile} title="Configuración">{isLoading ? <Card>Cargando configuración...</Card> : <div className="grid gap-5 lg:grid-cols-2"><Card><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Apariencia</p><h2 className="mt-1 text-xl font-bold">Tema de interfaz</h2><p className="mt-2 text-sm text-[var(--oc-muted)]">Cambia entre los modos oscuro y claro. Tu elección se guarda en este dispositivo.</p><div className="mt-5"><ThemeToggle /></div></Card><Card><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Idioma</p><h2 className="mt-1 text-xl font-bold">Idioma del launcher</h2><p className="mt-2 text-sm text-[var(--oc-muted)]">Estructura preparada para futuras traducciones.</p><select className="mt-5 w-full rounded-xl border border-[var(--oc-border)] bg-[var(--oc-surface-raised)] px-4 py-3 text-sm text-[var(--oc-text)]" defaultValue="es"><option value="es">Español</option><option disabled value="en">English (próximamente)</option></select></Card><Card><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Sonido</p><h2 className="mt-1 text-xl font-bold">Audio del launcher</h2><p className="mt-2 text-sm text-[var(--oc-muted)]">Los controles de sonido se integrarán con el cliente del juego.</p><div className="mt-5 rounded-xl border border-dashed border-[var(--oc-border)] p-4 text-sm text-[var(--oc-muted)]">{/* TODO: Agregar controles de sonido del juego. */}Configuración de sonido próximamente.</div></Card><Card><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Cuenta</p><h2 className="mt-1 text-xl font-bold">Sesión de {profile?.display_name ?? "jugador"}</h2><p className="mt-2 text-sm text-[var(--oc-muted)]">Cierra sesión en este dispositivo cuando termines de jugar.</p><Button className="mt-5" onClick={signOut} variant="ghost">Cerrar sesión</Button></Card></div>}</PageFrame>;
}
