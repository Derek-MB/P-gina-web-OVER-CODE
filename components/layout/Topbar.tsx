import { Menu } from "lucide-react";
import type { PlayerProfile } from "@/components/dashboard/types";
import ThemeToggle from "./ThemeToggle";
import AnimatedLogo from "@/components/ui/AnimatedLogo";

interface TopbarProps { profile: PlayerProfile | null; onMenuToggle?: () => void; }

export default function Topbar({ profile, onMenuToggle }: TopbarProps) {
  const playerName = profile?.display_name ?? "Jugador";
  return <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-[var(--oc-border)] bg-[var(--oc-background)]/90 px-4 backdrop-blur sm:h-20 sm:px-5 md:px-8"><div className="flex items-center gap-3 md:hidden"><button aria-label="Abrir menú" className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--oc-border)] text-[var(--oc-accent)]" onClick={onMenuToggle} type="button"><Menu size={20} /></button><AnimatedLogo className="max-h-7 max-w-28" compact /></div><div className="ml-auto flex items-center gap-2 sm:gap-3"><ThemeToggle /><div className="flex items-center gap-2 rounded-xl border border-[var(--oc-border)] bg-[var(--oc-surface)] p-2 sm:gap-3 sm:pr-3"><div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--oc-teal)] font-bold text-[#EADCCD]">{playerName.slice(0, 1).toUpperCase()}</div><div className="hidden text-left sm:block"><p className="text-xs text-[var(--oc-muted)]">En línea</p><p className="max-w-28 truncate text-sm font-semibold text-[var(--oc-text)]">{playerName}</p></div></div></div></header>;
}
