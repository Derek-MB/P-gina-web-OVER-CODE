"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Award, ChevronLeft, ChevronRight, Download, Gamepad2, LogOut, Save, Settings, Trophy, UserRound } from "lucide-react";
import AnimatedLogo from "@/components/ui/AnimatedLogo";

interface SidebarProps { collapsed: boolean; mobileOpen: boolean; onMobileClose: () => void; onToggle: () => void; onSignOut: () => void; }

const navigation = [
  { href: "/dashboard", label: "Dashboard", icon: Gamepad2 }, { href: "/profile", label: "Perfil", icon: UserRound }, { href: "/achievements", label: "Logros", icon: Award }, { href: "/ranking", label: "Ranking", icon: Trophy }, { href: "/saves", label: "Partidas guardadas", icon: Save }, { href: "/download", label: "Descargar juego", icon: Download }, { href: "/settings", label: "Configuración", icon: Settings },
];

export default function Sidebar({ collapsed, mobileOpen, onMobileClose, onSignOut, onToggle }: SidebarProps) {
  const pathname = usePathname();
  return <aside className={`fixed inset-y-0 left-0 z-40 flex w-72 -translate-x-full flex-col border-r border-[var(--oc-border)] bg-[var(--oc-surface)] px-3 py-5 shadow-2xl transition-[transform,width] duration-300 md:z-30 md:translate-x-0 ${collapsed ? "md:w-[76px]" : "md:w-64"} ${mobileOpen ? "translate-x-0" : ""}`}><div className="mb-8 flex items-center justify-between px-2"><div className={collapsed ? "md:hidden" : ""}><AnimatedLogo className="max-h-9 max-w-36" compact /></div><button aria-label="Cerrar menú" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--oc-border)] text-[var(--oc-accent)] transition hover:bg-[var(--oc-surface-raised)] md:hidden" onClick={onMobileClose} type="button"><ChevronLeft size={18} /></button><button aria-label={collapsed ? "Expandir menú" : "Colapsar menú"} className="hidden h-10 w-10 items-center justify-center rounded-xl border border-[var(--oc-border)] text-[var(--oc-accent)] transition hover:bg-[var(--oc-surface-raised)] md:flex" onClick={onToggle} type="button">{collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}</button></div><nav aria-label="Navegación principal" className="space-y-2">{navigation.map((item) => { const Icon = item.icon; const isActive = pathname === item.href; return <Link className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[var(--oc-muted)] transition hover:bg-[var(--oc-surface-raised)] hover:text-[var(--oc-accent)] ${isActive ? "bg-[var(--oc-primary)] text-[#EADCCD] shadow-lg" : ""}`} href={item.href} key={item.href} onClick={onMobileClose} title={collapsed ? item.label : undefined}><Icon aria-hidden="true" className="shrink-0" size={19} /><span className={collapsed ? "md:hidden" : ""}>{item.label}</span></Link>; })}</nav><button className="mt-auto flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-[#EADCCD] transition hover:bg-[#7DF1F6]/10" onClick={onSignOut} title={collapsed ? "Cerrar sesión" : undefined} type="button"><LogOut aria-hidden="true" className="shrink-0" size={19} /><span className={collapsed ? "md:hidden" : ""}>Cerrar sesión</span></button></aside>;
}
