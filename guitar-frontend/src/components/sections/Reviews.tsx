"use client";
import { motion } from "framer-motion";
import type { Review } from "@/types/strapi";
import { useTranslations } from "next-intl";

type ReviewsProps = {
  reviews: Review[];
};

const Reviews = ({ reviews }: ReviewsProps) => {
  const t = useTranslations("reviews");
  return (
    <section id="reviews" className="py-28 px-6 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto ">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-2">
          <span className="text-[#C8973A] font-medium tracking-widest uppercase text-sm ">{t("label")}</span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A] pb-6">{t("title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews?.map((review, i) => (
            <motion.div key={review.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-[2rem] p-8 space-y-4 flex flex-col h-full">
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-[#C8973A] text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-[#6B6B6B] leading-relaxed">{review.text}</p>
              <div className="flex items-center gap-3 pt-2 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#C8973A]/20 flex items-center justify-center">
                  <span className="text-[#C8973A] font-bold text-sm">{review.studentName[0]}</span>
                </div>
                <p className="font-semibold text-[#1A1A1A]">{review.studentName}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
