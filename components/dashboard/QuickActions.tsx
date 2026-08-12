import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function QuickActions() {
  return <Card><p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--oc-accent)]">Acciones rápidas</p><h2 className="mt-1 text-2xl font-bold text-[var(--oc-text)]">¿Cuál es tu siguiente misión?</h2><div className="mt-5 grid gap-3 sm:grid-cols-2"><Button fullWidth>Continuar jugando</Button><Link className="rounded-xl border border-[var(--oc-border)] px-4 py-3 text-center text-sm font-semibold text-[var(--oc-text)] transition hover:bg-[var(--oc-surface-raised)]" href="/achievements">Ver logros</Link><Link className="rounded-xl border border-[var(--oc-border)] px-4 py-3 text-center text-sm font-semibold text-[var(--oc-text)] transition hover:bg-[var(--oc-surface-raised)]" href="/ranking">Ranking</Link><Link className="rounded-xl bg-[var(--oc-teal)] px-4 py-3 text-center text-sm font-semibold text-[#EADCCD] transition hover:brightness-110" href="/download">Descargar juego</Link></div></Card>;
}
