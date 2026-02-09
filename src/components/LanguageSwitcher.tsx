"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const toggleLanguage = (nextLocale: string) => {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className={`flex bg-gray-100/80 p-1 rounded-xl shadow-inner border border-gray-200/50 transition-opacity ${isPending ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
      <button
        onClick={() => toggleLanguage("en")}
        className={`px-3 py-1.5 rounded-[10px] text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
          locale === "en"
            ? "bg-white text-[#3f6ad8] shadow-[0_2px_4px_rgba(0,0,0,0.05)] scale-[1.02]"
            : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"
        }`}
      >
        <span className="text-sm">🇬🇧</span> EN
      </button>
      <button
        onClick={() => toggleLanguage("th")}
        className={`px-3 py-1.5 rounded-[10px] text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
          locale === "th"
            ? "bg-white text-[#3f6ad8] shadow-[0_2px_4px_rgba(0,0,0,0.05)] scale-[1.02]"
            : "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50"
        }`}
      >
        <span className="text-sm">🇹🇭</span> TH
      </button>
    </div>
  );
}
