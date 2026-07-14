"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { dictionary, type Dict } from "@/lib/dictionary";
import type { Lang } from "@/lib/site";

type LangContextValue = {
  lang: Lang;
  t: Dict;
  toggle: () => void;
  setLang: (l: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("az");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "az" ? "en" : "az"));
  }, []);

  const value: LangContextValue = {
    lang,
    t: dictionary[lang] as Dict,
    toggle,
    setLang,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
