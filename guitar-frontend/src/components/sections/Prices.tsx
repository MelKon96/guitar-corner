"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Price, Promo } from "@/types/strapi";
import { useTranslations } from "next-intl";
import PromoBanner from "./PromoBanner";

type PricesProps = {
  prices: Price[];
  promo?: Promo | null;
};

const StudioTooltip = ({ text }: { text: string }) => (
  <div className="group absolute top-4 right-4 z-10">
    <div className="w-5 h-5 rounded-full border border-[#C8973A] text-[#C8973A] flex items-center justify-center text-xs font-bold cursor-default select-none hover:bg-[#C8973A] hover:text-white transition-colors duration-200">
      ?
    </div>
    <div className="pointer-events-none absolute right-0 top-7 w-52 bg-[#1A1A1A] text-white text-xs rounded-xl px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-relaxed">
      {text}
      <div className="absolute -top-1.5 right-2 w-3 h-3 bg-[#1A1A1A] rotate-45" />
    </div>
  </div>
);

const Prices = ({ prices, promo }: PricesProps) => {
  const t = useTranslations("prices");

  const handleBook = (price: Price) => {
    const msg = [
      t("bookingIntent"),
      price.title,
      price.duration,
      `$${price.price} ${t("perClass")}`,
    ].join("\n");
    window.dispatchEvent(new CustomEvent("bookingSelected", { detail: msg }));
  };

  return (
    <section id="prices" className="py-28 px-6 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 space-y-4">
          <span className="text-[#C8973A] font-medium tracking-widest uppercase text-sm">{t("label")}</span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A]">{t("title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prices?.map((price, i) => (
            <motion.div key={price.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative bg-white rounded-[2rem] p-8 shadow-sm border-2 ${i === 1 ? "border-[#C8973A]" : "border-transparent"}`}>
              {i === 1 && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8973A] text-white">{t('mostPopular')}</Badge>}

              {!price.isGroup && <StudioTooltip text={t("studioTooltip")} />}

              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{price.title}</h3>
              <p className="text-[#6B6B6B] text-sm mb-6">{price.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-black text-[#1A1A1A]">${price.price}</span>
                <span className="text-[#6B6B6B] ml-2">{t("perClass")}</span>
              </div>

              <p className="text-sm text-[#6B6B6B] mb-8">{price.duration}</p>

              {price.isAvailable ? (
                <a
                  href="#contact"
                  onClick={() => handleBook(price)}
                  className="block w-full text-center rounded-full py-3 font-semibold bg-[#C8973A] hover:bg-[#B8872A] text-white transition-colors duration-200 cursor-pointer"
                >
                  {t('bookNow')}
                </a>
              ) : (
                <span className="block w-full text-center rounded-full py-3 font-semibold bg-gray-100 text-gray-400 cursor-not-allowed">
                  {t('outOfStock')}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {promo && <PromoBanner promo={promo} />}
      </div>
    </section>
  );
};

export default Prices;
