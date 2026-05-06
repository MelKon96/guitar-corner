import { useTranslations } from "next-intl";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {

  const t = useTranslations('footer')
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-black">
            Guitar<span className="text-[#C8973A]">Corner</span>
          </h3>
          <p className="text-[#6B6B6B] text-sm mt-1">{t('location')}</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://instagram.com/guitarcornermiami" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8973A] transition-colors">
            <FaInstagram size={18} />
          </a>
          <a href="https://facebook.com/GuitarCornerMiami" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8973A] transition-colors">
            <FaFacebook size={18} />
          </a>
          <a href="https://youtube.com/channel/UCoDk4wXu0agpUMvuPtjllPg" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C8973A] transition-colors">
            <FaYoutube size={18} />
          </a>
        </div>

        <p className="text-[#6B6B6B] text-sm">© {new Date().getFullYear()} Guitar Corner Miami</p>
      </div>
    </footer>
  );
};

export default Footer;
