"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { Promo } from "@/types/strapi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

type Props = { promo: Promo };

const PromoBanner = ({ promo }: Props) => {
  const t = useTranslations("promo");

  if (!promo?.isActive) return null;

  const imageUrl = promo.image?.url
    ? promo.image.url.startsWith("http")
      ? promo.image.url
      : `${STRAPI_URL}${promo.image.url}`
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 relative overflow-hidden rounded-[2rem] bg-[#1A1A1A] group/promo"
    >
      {/* Subtle gold glow top-right */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#C8973A]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#C8973A]/5 blur-2xl pointer-events-none" />

      {/* Studio tooltip */}
      <div className="group absolute top-4 right-4 z-10">
        <div className="w-5 h-5 rounded-full border border-[#C8973A] text-[#C8973A] flex items-center justify-center text-xs font-bold cursor-default select-none hover:bg-[#C8973A] hover:text-[#1A1A1A] transition-colors duration-200">
          ?
        </div>
        <div className="pointer-events-none absolute right-0 top-7 w-52 bg-white text-[#1A1A1A] text-xs rounded-xl px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-relaxed">
          {t("studioTooltip")}
          <div className="absolute -top-1.5 right-2 w-3 h-3 bg-white rotate-45" />
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
        {/* Image */}
        {imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="flex-shrink-0 w-56 md:w-64 lg:w-72"
          >
            <img
              src={imageUrl}
              alt={promo.title}
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        )}

        {/* Content */}
        <div className="flex-1 text-center md:text-left space-y-5">
          {/* Label */}
          <span className="inline-block text-[#C8973A] font-medium tracking-widest uppercase text-xs border border-[#C8973A]/40 rounded-full px-4 py-1.5">
            {t("label")}
          </span>

          {/* Promo title */}
          <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
            {promo.title}
          </h3>

          {/* Classes count */}
          <div className="flex items-baseline gap-3 justify-center md:justify-start">
            <span className="text-6xl lg:text-7xl font-black text-[#C8973A] leading-none">
              {promo.classes}
            </span>
            <span className="text-xl font-semibold text-white/80">
              {t("classes")}
            </span>
          </div>

          {/* Price block */}
          <div className="space-y-1">
            <p className="text-white/60 text-sm font-medium uppercase tracking-wider">
              {t("justFor")}
            </p>
            <div className="flex items-baseline gap-2 justify-center md:justify-start">
              <span className="text-4xl lg:text-5xl font-black text-white">
                ${promo.totalPrice}
              </span>
              <span className="text-[#C8973A] font-semibold text-lg">
                (${promo.pricePerClass} {t("perClass")})
              </span>
            </div>
          </div>

          {/* Description + tagline */}
          <div className="space-y-1 pt-1">
            {promo.description && (
              <p className="text-white/60 text-sm tracking-wide">
                {promo.description}
              </p>
            )}
            {promo.tagline && (
              <p className="text-[#C8973A] font-bold text-lg">
                {promo.tagline}
              </p>
            )}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => {
                const msg = [
                  t("bookingIntent"),
                  promo.title,
                  `${promo.classes} ${t("classes")}`,
                  `$${promo.totalPrice} ($${promo.pricePerClass} ${t("perClass")})`,
                ].join("\n");
                window.dispatchEvent(new CustomEvent("bookingSelected", { detail: msg }));
              }}
              className="inline-block bg-[#C8973A] hover:bg-[#B8872A] text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 text-sm"
            >
              {t("bookNow")}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PromoBanner;
