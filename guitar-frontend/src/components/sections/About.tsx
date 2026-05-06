"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { Teacher } from "@/types/strapi";

type AboutProps = {
  teacher: Teacher;
};

const About = ({ teacher }: AboutProps) => {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:py-24  bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16 pt-5">
          <span className="text-[#C8973A] font-medium tracking-widest uppercase text-xs sm:text-sm block mb-3">{t("label")}</span>
        </motion.div>

        {/* Контент */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ЛЕВАЯ ЧАСТЬ — строго по центру */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex justify-center">
            <div className="w-full max-w-sm flex flex-col items-center text-center gap-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1A1A1A]">{teacher?.name}</h2>

              {/* Статистика */}
              <div className="grid grid-cols-2 gap-6 w-full">
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-black text-[#C8973A]">{teacher?.experience}+</p>
                  <p className="text-xs sm:text-sm text-[#6B6B6B]">{t("yearsExp")}</p>
                </div>

                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-black text-[#C8973A]">200+</p>
                  <p className="text-xs sm:text-sm text-[#6B6B6B]">{t("students")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ПРАВАЯ ЧАСТЬ */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-[#FAFAF8] rounded-3xl lg:rounded-[3rem] p-6 sm:p-8 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] text-center">{t("whatYouLearn")}</h3>

            {t.raw("items").map((item: string, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#C8973A] shrink-0" />
                <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
