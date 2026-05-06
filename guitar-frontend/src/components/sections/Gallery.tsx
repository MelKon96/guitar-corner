"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Photo, StrapiMedia } from "@/types/strapi";
import { useTranslations } from "next-intl";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const GRID_COLS = 4;
const MARQUEE_THRESHOLD = GRID_COLS * 2; // > 2 rows → auto-scroll

type GalleryProps = { photos: Photo[] };
type FlatImage = { img: StrapiMedia; caption?: string };

const ITEM_SIZE    = 176;  // w-44 = 176px
const ITEM_GAP     = 16;   // mr-4 = 16px (included per-item so offset math is exact)
const MIN_FILL     = 2600; // wider than any reasonable screen

const MarqueeRow = ({
  images,
  reverse,
  onSelect,
}: {
  images: FlatImage[];
  reverse?: boolean;
  onSelect: (img: StrapiMedia) => void;
}) => {
  const copyWidth = images.length * (ITEM_SIZE + ITEM_GAP);
  // Enough copies so total content always exceeds MIN_FILL + one copy (no blank gaps)
  const copies = Math.max(2, Math.ceil((MIN_FILL + copyWidth) / copyWidth));
  const allItems = Array.from({ length: copies }, () => images).flat();
  const duration = Math.max(18, copyWidth / 80);

  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex w-max ${reverse ? "marquee-right" : "marquee-left"}`}
        style={{
          animationDuration: `${duration}s`,
          "--marquee-offset": `-${copyWidth}px`,
        } as React.CSSProperties}
      >
        {allItems.map(({ img, caption }, i) => (
          <div
            key={i}
            className="w-44 h-44 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group mr-4"
            onClick={() => onSelect(img)}
          >
            <img
              src={`${STRAPI_URL}${img.url}`}
              alt={caption || "Gallery photo"}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = ({ photos }: GalleryProps) => {
  const [selected, setSelected] = useState<StrapiMedia | null>(null);
  const t = useTranslations("gallery");

  const allImages: FlatImage[] = (photos ?? []).flatMap((photo) =>
    (photo.image || []).map((img) => ({ img, caption: photo.caption }))
  );

  const useMarquee = allImages.length > MARQUEE_THRESHOLD;
  const half = Math.ceil(allImages.length / 2);
  const row1 = allImages.slice(0, half);
  const row2 = allImages.slice(half);

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-[#C8973A] font-medium tracking-widest uppercase text-sm">
            {t("label")}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A]">{t("title")}</h2>
        </motion.div>
      </div>

      {useMarquee ? (
        <div
          className="space-y-4"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <MarqueeRow images={row1} onSelect={setSelected} />
          {row2.length > 0 && <MarqueeRow images={row2} reverse onSelect={setSelected} />}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos?.map((photo) =>
              photo.image?.map((img: StrapiMedia, j: number) => (
                <motion.div
                  key={`${photo.id}-${j}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.05 }}
                  onClick={() => setSelected(img)}
                  className="aspect-square rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <img
                    src={`${STRAPI_URL}${img.url}`}
                    alt={photo.caption || "Gallery photo"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))
            )}
          </div>
        </div>
      )}

      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={`${STRAPI_URL}${selected.url}`}
            alt=""
            className="max-w-4xl max-h-[90vh] w-full object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
