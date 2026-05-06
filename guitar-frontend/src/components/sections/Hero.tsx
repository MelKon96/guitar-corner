"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import type { Teacher } from "@/types/strapi";

type HeroProps = {
  teacher: Teacher;
};

const Hero = ({ teacher }: HeroProps) => {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-4 sm:px-6 pt-[68px] lg:pt-0">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex justify-center">
          <div className="w-full max-w-md flex flex-col items-center text-center gap-6">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-[#C8973A] font-medium tracking-widest uppercase text-xs sm:text-sm">
              {t("subtitle")}
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-tight">
              {t("title")}
              <span className="block text-[#C8973A]">{t("titleAccent")}</span>
            </h1>

            <p className="text-[#6B6B6B] text-base sm:text-lg leading-relaxed">{t("description")}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
              <a href="#contact" className="bg-[#C8973A] hover:bg-[#B8872A] text-white px-8 py-4 rounded-full text-base font-semibold w-full sm:w-auto text-center transition-colors duration-200">
                {t("bookLesson")}
              </a>
              <a href="#videos" className="px-8 py-4 rounded-full text-base font-semibold border-2 border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white w-full sm:w-auto text-center transition-colors duration-200">
                {t("viewPortfolio")}
              </a>
            </div>
          </div>
        </motion.div>

        {/* ПРАВАЯ ЧАСТЬ */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="w-full aspect-square bg-[#C8973A]/10 rounded-3xl lg:rounded-[3rem] overflow-hidden">
              <img src={`${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${teacher?.photo?.[0]?.url}`} alt={teacher?.name} className="w-full h-full object-cover" />
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-3 shadow-lg text-center">
              <p className="text-xl font-black text-[#1A1A1A]">{teacher?.experience}+</p>
              <p className="text-xs text-[#6B6B6B]">{t("yearsExp")}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
