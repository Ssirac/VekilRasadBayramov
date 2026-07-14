"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "./Icons";

type Theme = "light" | "dark";

/**
 * Light/dark switch. The initial theme is applied pre-hydration by an inline
 * script in the layout (no flash); this button just flips it and persists the
 * choice. Reads the live value from the <html data-theme> attribute on mount.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "İşıqlı rejimə keç" : "Qaranlıq rejimə keç"}
      className={`flex h-9 w-9 items-center justify-center text-lg text-ink/70 transition-colors hover:text-ink ${className}`}
    >
      {/* Render nothing until mounted to avoid a light/dark icon mismatch */}
      {mounted ? theme === "dark" ? <Sun /> : <Moon /> : <span className="block h-[1em] w-[1em]" />}
    </button>
  );
}
