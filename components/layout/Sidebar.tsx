"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Award, ChevronLeft, ChevronRight, Download, Gamepad2, LogOut, Save, Settings, Trophy, UserRound } from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  onSignOut: () => void;
}

const navigation = [
  { href: "/dashboard", label: "Dashboard", icon: Gamepad2 },
  { href: "/profile", label: "Perfil", icon: UserRound },
  { href: "/achievements", label: "Logros", icon: Award },
  { href: "/ranking", label: "Ranking", icon: Trophy },
  { href: "/saves", label: "Partidas guardadas", icon: Save },
  { href: "/download", label: "Descargar juego", icon: Download },
  { href: "/settings", label: "Configuración", icon: Settings },
];

export default function Sidebar({ collapsed, onSignOut, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return <aside className={`fixed inset-y-0 left-0 z-30 flex flex-col border-r border-[var(--oc-border)] bg-[var(--oc-surface)] px-3 py-5 shadow-2xl transition-[width] duration-300 ${collapsed ? "w-[76px]" : "w-[76px] md:w-64"}`}><div className="mb-8 flex items-center justify-between px-2"><div className={collapsed ? "hidden" : "hidden md:block"}><p className="text-lg font-black tracking-[0.2em] text-[var(--oc-accent)]">OVER</p><p className="text-lg font-black tracking-[0.2em] text-[var(--oc-text)]">CODE</p></div><button aria-label={collapsed ? "Expandir menú" : "Colapsar menú"} className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--oc-border)] text-[var(--oc-accent)] transition hover:bg-[var(--oc-surface-raised)]" onClick={onToggle} type="button">{/* TODO: Reemplazar por sprite pixel art para contraer el menú. */}{collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}</button></div><nav aria-label="Navegación principal" className="space-y-2">{navigation.map((item) => { const Icon = item.icon; const isActive = pathname === item.href; return <Link className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[var(--oc-muted)] transition hover:bg-[var(--oc-surface-raised)] hover:text-[var(--oc-accent)] ${isActive ? "bg-[var(--oc-primary)] text-[#EADCCD] shadow-lg" : ""}`} href={item.href} key={item.href} title={collapsed ? item.label : undefined}>{/* TODO: Reemplazar por sprite pixel art. */}<Icon aria-hidden="true" className="shrink-0" size={19} />{!collapsed && <span className="hidden md:inline">{item.label}</span>}</Link>; })}</nav><button className="mt-auto flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[#EADCCD] transition hover:bg-[#7DF1F6]/10" onClick={onSignOut} title={collapsed ? "Cerrar sesión" : undefined} type="button">{/* TODO: Reemplazar por sprite pixel art. */}<LogOut aria-hidden="true" className="shrink-0" size={19} />{!collapsed && <span className="hidden md:inline">Cerrar sesión</span>}</button></aside>;
}
