"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  PencilRuler,
  UploadCloud,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocaleContext } from "@/context/LocaleProvider";

export function DesignBeforeSpending() {
  const t = useTranslations();
  const { dir } = useLocaleContext();
  const cards = [
    {
      icon: UploadCloud,
      label: t("design.step1"),
    },
    {
      icon: PencilRuler,
      label: t("design.step2"),
    },
    {
      icon: Users,
      label: t("design.step3"),
    },
  ];

  return (
    <section className="w-full bg-brand-light py-20 px-4 md:px-10 lg:px-20">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-80px",
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-[1200px] mx-auto bg-brand-black rounded-[40px] p-8 md:p-16 shadow-2xl border border-brand-dark"
      >
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-6">
            <h2 className="font-heading font-semibold text-3xl md:text-[32px] leading-tight text-white">
              {t("design.title")}
            </h2>
            <p className="text-base text-brand-light">{t("design.desc")}</p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span className="text-sm text-white">{t("design.check1")}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span className="text-sm text-white">{t("design.check2")}</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span className="text-sm text-white">{t("design.check3")}</span>
              </div>
            </div>

            <button className="mt-6 self-start bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-medium text-base flex items-center gap-3 transition-all">
              {t("design.cta")}
              <ArrowRight
                className={`w-5 h-5 ${dir === "rtl" ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col sm:flex-row gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -5,
                }}
                className="w-[160px] md:w-[190px] h-[200px] md:h-[230px] bg-brand-muted-dark/50 backdrop-blur-md border border-brand-teal rounded-[20px] flex flex-col items-center justify-center gap-6 p-4"
              >
                <div className="w-16 h-16 rounded-full bg-brand-teal flex items-center justify-center">
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-base text-white text-center whitespace-pre-line font-medium">
                  {card.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
