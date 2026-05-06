"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LogoAnimated from "../sections/LogoAnimated";
import LanguageSwitcher from "../langSwitchBtn";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("nav");

  const links = [
    { label: t("about"), href: "#" },
    { label: t("prices"), href: "#prices" },
    { label: t("videos"), href: "#videos" },
    { label: t("reviews"), href: "#reviews" },
    { label: t("contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll(); // check position immediately on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }} className={`fixed top-0 pt-3 left-0 right-0 z-50 px-6 py-0 transition-all duration-300 ${scrolled || menuOpen ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between pr-0 lg:pr-20">
          <a className="flex items-center h-[56px] lg:h-[100px]">
            {/* Мобильный текстовый логотип */}
            <span className="lg:hidden text-[11px] font-bold tracking-widest uppercase text-[#1A1A1A]">
              Guitar Corner Miami
            </span>
            {/* Десктоп анимированный логотип */}
            <span className="relative w-[160px] h-[100px] overflow-visible hidden lg:block">
              <LogoAnimated />
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-[#6B6B6B] hover:text-[#1A1A1A] font-medium transition-colors text-sm">
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Burger button (только мобильный) */}
          <button onClick={() => setMenuOpen((o) => !o)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg hover:bg-black/5 transition-colors">
            <span className={`block h-0.5 w-5 bg-[#1A1A1A] rounded transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-[#1A1A1A] rounded transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-[#1A1A1A] rounded transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onClick={() => setMenuOpen(false)} className="fixed inset-0 z-40 bg-black/30" />

            <motion.div key="drawer" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25, ease: "easeOut" }} className="fixed top-[71px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg lg:hidden border-t border-gray-100">
              <ul className="flex flex-col px-6 py-4">
                {links.map((link, i) => (
                  <motion.li key={link.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.2 }}>
                    <a href={link.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 py-3.5 text-[#6B6B6B] hover:text-[#1A1A1A] font-medium text-base border-b border-gray-100 transition-colors group">
                      <span className="w-1 h-1 rounded-full bg-[#C8973A] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              {/* Переключатель языка внутри мобильного меню */}
              <div className="px-6 pb-5 pt-1">
                <LanguageSwitcher />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
