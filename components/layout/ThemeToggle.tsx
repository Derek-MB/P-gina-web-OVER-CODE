"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";
const storageKey = "over-code-theme";

function getSavedTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.localStorage.getItem(storageKey) === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getSavedTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  }

  return <button aria-label={theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"} className="flex h-10 items-center gap-2 rounded-xl border border-[var(--oc-border)] bg-[var(--oc-surface)] px-3 text-sm font-semibold text-[var(--oc-text)] transition hover:bg-[var(--oc-surface-raised)]" onClick={toggleTheme} type="button">{/* TODO: Reemplazar por sprite pixel art para el cambio de tema. */}<span aria-hidden="true">{theme === "dark" ? "☀" : "◐"}</span><span className="hidden sm:inline">{theme === "dark" ? "Claro" : "Oscuro"}</span></button>;
}
