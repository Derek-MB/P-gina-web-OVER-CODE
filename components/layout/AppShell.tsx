"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { PlayerProfile } from "@/components/dashboard/types";
import { supabase } from "@/lib/supabase";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface AppShellProps { children: ReactNode; profile: PlayerProfile | null; }

export default function AppShell({ children, profile }: AppShellProps) {
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  async function signOut() { await supabase.auth.signOut(); router.push("/"); }

  return <div className="min-h-screen overflow-x-hidden bg-[var(--oc-background)] text-[var(--oc-text)]"><Sidebar collapsed={sidebarCollapsed} mobileOpen={mobileMenuOpen} onMobileClose={() => setMobileMenuOpen(false)} onSignOut={signOut} onToggle={() => setSidebarCollapsed((current) => !current)} />{mobileMenuOpen && <button aria-label="Cerrar menú" className="fixed inset-0 z-30 bg-black/55 md:hidden" onClick={() => setMobileMenuOpen(false)} type="button" />}<div className={`min-h-screen transition-[margin] duration-300 ${sidebarCollapsed ? "md:ml-[76px]" : "md:ml-64"}`}><Topbar onMenuToggle={() => setMobileMenuOpen(true)} profile={profile} />{children}</div></div>;
}
