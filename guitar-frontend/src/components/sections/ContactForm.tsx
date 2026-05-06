"use client";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

type FormState = { name: string; email: string; phone: string; message: string };
type Status = "idle" | "loading" | "success" | "error" | "validation";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm: FormState = { name: "", email: "", phone: "", message: "" };

/* ── SVG icons ─────────────────────────────────────────── */
const IconUser = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);
const IconMail = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);
const IconPhone = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
);
const IconMsg = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
  </svg>
);
const IconSend = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
);

/* ── Input field component ─────────────────────────────── */
type FieldProps = {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  disabled?: boolean;
};

const Field = ({ icon, placeholder, value, onChange, type = "text", required, disabled }: FieldProps) => (
  <div className="relative group">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C8973A]/60 group-focus-within:text-[#C8973A] transition-colors duration-200 pointer-events-none">
      {icon}
    </span>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className="w-full pl-11 pr-5 py-4 bg-[#F7F6F3] border border-[#E5E5E0] rounded-2xl text-[#1A1A1A] placeholder-[#ADADAD] text-sm outline-none
        focus:border-[#C8973A] focus:bg-white focus:ring-4 focus:ring-[#C8973A]/10
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200"
    />
  </div>
);

/* ── Main component ────────────────────────────────────── */
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [validationMsg, setValidationMsg] = useState("");
  const t = useTranslations("contacts");

  useEffect(() => {
    const handler = (e: Event) => {
      const msg = (e as CustomEvent<string>).detail;
      if (msg) setForm((prev) => ({ ...prev, message: msg }));
    };
    window.addEventListener("bookingSelected", handler);
    return () => window.removeEventListener("bookingSelected", handler);
  }, []);

  const set = (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim()) {
      setValidationMsg(t("validationName"));
      setStatus("validation");
      return;
    }
    if (!form.email.trim() || !EMAIL_RE.test(form.email)) {
      setValidationMsg(t("validationEmail"));
      setStatus("validation");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(`${STRAPI_URL}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: form }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#1A1A1A] rounded-[2rem] p-8 md:p-10 shadow-xl relative overflow-hidden">
      {/* Декоративное свечение */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#C8973A]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-[#C8973A]/5 blur-2xl pointer-events-none" />

      <AnimatePresence mode="wait">

        {/* ── Success ── */}
        {status === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center py-8 gap-5"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
              className="w-20 h-20 rounded-full bg-[#C8973A]/15 flex items-center justify-center"
            >
              <svg className="w-9 h-9 text-[#C8973A]" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </motion.div>
            <div>
              <h3 className="text-2xl font-black text-white">{t("successTitle")}</h3>
              <p className="text-white/50 mt-2 text-sm">{t("successText")}</p>
            </div>
          </motion.div>
        )}

        {/* ── Form ── */}
        {status !== "success" && (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            noValidate
            className="relative space-y-4"
          >
            {/* Заголовок формы */}
            <div className="mb-7">
              <p className="text-[#C8973A] text-xs font-semibold tracking-widest uppercase mb-1">{t("label")}</p>
              <h3 className="text-2xl font-black text-white">{t("title")}</h3>
            </div>

            {/* Два поля в ряд */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                icon={<IconUser />}
                placeholder={t("namePlaceholder")}
                value={form.name}
                onChange={set("name")}
                required
                disabled={status === "loading"}
              />
              <Field
                icon={<IconPhone />}
                placeholder={t("phonePlaceholder")}
                value={form.phone}
                onChange={set("phone")}
                type="tel"
                disabled={status === "loading"}
              />
            </div>

            <Field
              icon={<IconMail />}
              placeholder={t("emailPlaceholder")}
              value={form.email}
              onChange={set("email")}
              type="email"
              required
              disabled={status === "loading"}
            />

            {/* Textarea */}
            <div className="relative group">
              <span className="absolute left-4 top-4 text-[#C8973A]/60 group-focus-within:text-[#C8973A] transition-colors duration-200 pointer-events-none">
                <IconMsg />
              </span>
              <textarea
                placeholder={t("messagePlaceholder")}
                value={form.message}
                onChange={set("message")}
                rows={4}
                disabled={status === "loading"}
                className="w-full pl-11 pr-5 py-4 bg-[#F7F6F3] border border-[#E5E5E0] rounded-2xl text-[#1A1A1A] placeholder-[#ADADAD] text-sm outline-none resize-none
                  focus:border-[#C8973A] focus:bg-white focus:ring-4 focus:ring-[#C8973A]/10
                  disabled:opacity-50 disabled:cursor-not-allowed
                  transition-all duration-200"
              />
            </div>

            {/* Validation / Error */}
            <AnimatePresence>
              {(status === "error" || status === "validation") && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  <span>{status === "validation" ? validationMsg : t("errorText")}</span>
                  <button type="button" onClick={() => setStatus("idle")} className="ml-auto underline underline-offset-2 hover:text-red-300 transition-colors">
                    {t("tryAgain")}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2.5 bg-[#C8973A] hover:bg-[#B8872A] active:scale-[0.98] text-white font-semibold py-4 rounded-full text-sm
                disabled:opacity-60 disabled:cursor-not-allowed
                transition-all duration-200 cursor-pointer mt-2"
            >
              {status === "loading" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {t("sending")}
                </>
              ) : (
                <>
                  <IconSend />
                  {t("send")}
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
