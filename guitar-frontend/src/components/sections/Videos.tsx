"use client";
import { motion } from "framer-motion";
import type { Video } from "@/types/strapi";
import { useTranslations } from "next-intl";

type VideosProps = {
  videos: Video[];
};

const getYouTubeId = (url: string) => {
  const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
  return match ? match[1] : "";
};

const Videos = ({ videos }: VideosProps) => {
     const t = useTranslations("videos");
  return (
    <section id="videos" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16 space-y-4">
          <span className="text-[#C8973A] font-medium tracking-widest uppercase text-sm">{t('label')}</span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A1A1A]">{t('title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos?.map((video, i) => (
            <motion.div key={video.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="space-y-3">
              <div className="rounded-[1.5rem] overflow-hidden aspect-video">
                <iframe src={`https://www.youtube.com/embed/${getYouTubeId(video.youtubeUrl)}`} title={video.title} className="w-full h-full" allowFullScreen />
              </div>
              <h3 className="font-bold text-[#1A1A1A] px-1">{video.title}</h3>
              {video.description && <p className="text-[#6B6B6B] text-sm px-1">{video.description}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
