"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "ru"] as const;

const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (newLocale: string) => {
    if (newLocale === locale) return;
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/") || `/${newLocale}`);
  };

  return (
    <div className="flex items-center gap-0.5 bg-[#F5F5F3] rounded-full p-1 border border-[#E5E5E5]">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
            locale === l
              ? "bg-[#C8973A] text-white shadow-sm"
              : "text-[#6B6B6B] hover:text-[#1A1A1A]"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
