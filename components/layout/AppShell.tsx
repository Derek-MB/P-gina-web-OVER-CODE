"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { PlayerProfile } from "@/components/dashboard/types";
import { supabase } from "@/lib/supabase";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface AppShellProps {
  children: ReactNode;
  profile: PlayerProfile | null;
}

export default function AppShell({ children, profile }: AppShellProps) {
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  async function signOut() { await supabase.auth.signOut(); router.push("/"); }

  return <div className="min-h-screen bg-[var(--oc-background)] text-[var(--oc-text)]"><Sidebar collapsed={sidebarCollapsed} onSignOut={signOut} onToggle={() => setSidebarCollapsed((current) => !current)} /><div className={`min-h-screen transition-[margin] duration-300 ${sidebarCollapsed ? "ml-[76px]" : "ml-[76px] md:ml-64"}`}><Topbar profile={profile} />{children}</div></div>;
}
