import type { PlayerProfile } from "@/components/dashboard/types";
import ThemeToggle from "./ThemeToggle";

interface TopbarProps {
  profile: PlayerProfile | null;
}

export default function Topbar({ profile }: TopbarProps) {
  const playerName = profile?.display_name ?? "Jugador";

  return <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-[var(--oc-border)] bg-[var(--oc-background)]/90 px-5 backdrop-blur md:px-8"><div className="md:hidden"><p className="text-sm font-black tracking-[0.2em] text-[var(--oc-accent)]">OVER CODE</p></div><div className="ml-auto flex items-center gap-3"><ThemeToggle /><div className="flex items-center gap-3 rounded-xl border border-[var(--oc-border)] bg-[var(--oc-surface)] p-2 pr-3">{/* TODO: Agregar sprite pixel art del avatar del jugador. */}<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--oc-teal)] font-bold text-[#EADCCD]">{playerName.slice(0, 1).toUpperCase()}</div><div className="hidden text-left sm:block"><p className="text-xs text-[var(--oc-muted)]">En línea</p><p className="max-w-28 truncate text-sm font-semibold text-[var(--oc-text)]">{playerName}</p></div></div></div></header>;
}
