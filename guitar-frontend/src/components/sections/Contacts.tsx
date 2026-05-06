"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

const Contacts = () => {
  const t = useTranslations("contacts");

  return (
    <section id="contact" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 items-start">

        {/* Контактная информация */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10 lg:pt-2"
        >
          <div>
            <span className="text-[#C8973A] font-medium tracking-widest uppercase text-sm">{t("label")}</span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] mt-2">{t("title")}</h2>
          </div>

          <div className="space-y-6">
            {/* Адрес */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#C8973A]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#C8973A]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A]">{t("address")}</p>
                <p className="text-[#6B6B6B] mt-0.5">1920 East Hallandale Beach Blvd, Suite 509</p>
              </div>
            </div>

            {/* Телефон */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#C8973A]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#C8973A]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A]">{t("phone")}</p>
                <a href="tel:+17863542496" className="text-[#6B6B6B] hover:text-[#C8973A] transition-colors mt-0.5 inline-block">
                  (786) 354 2496
                </a>
              </div>
            </div>

            {/* Часы работы */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-2xl bg-[#C8973A]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#C8973A]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A]">{t("hours")}</p>
                <div className="mt-0.5 space-y-0.5">
                  <p className="text-[#6B6B6B]">{t("schedule")}</p>
                  <p className="text-[#6B6B6B]">{t("scheduleSat")}</p>
                  <p className="text-[#6B6B6B]">{t("scheduleSun")}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Форма */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>

      {/* Google Maps */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-16 px-4"
      >
        <div className="rounded-3xl overflow-hidden border border-[#E5E5E5] shadow-sm h-80">
          <iframe
            title="Guitar Corner Miami"
            src="https://www.google.com/maps?q=1920+East+Hallandale+Beach+Blvd,+Hallandale+Beach,+FL+33009&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Contacts;
