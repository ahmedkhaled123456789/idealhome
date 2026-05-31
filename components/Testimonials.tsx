"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocaleContext } from "@/context/LocaleProvider";
export function Testimonials() {
  const t = useTranslations();
  const { dir } = useLocaleContext();
  return (
    <section className="w-full bg-brand-dark py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: dir === "rtl" ? 40 : -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full lg:w-1/3 flex flex-col gap-6"
        >
          <span className="text-2xl text-brand-teal">{t("test.label")}</span>
          <h2 className="font-semibold text-3xl md:text-[32px] leading-tight text-white mb-4">
            {t("test.title")}
          </h2>

          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-brand-muted flex items-center justify-center hover:bg-white/5 transition-colors">
              <ChevronLeft
                className={`w-6 h-6 text-brand-muted ${dir === "rtl" ? "rotate-180" : ""}`}
              />
            </button>
            <button className="w-12 h-12 rounded-full border border-brand-muted flex items-center justify-center hover:bg-white/5 transition-colors">
              <ChevronRight
                className={`w-6 h-6 text-brand-muted ${dir === "rtl" ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </motion.div>

        {/* Right Cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Sarah Johnson",
              text: "Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridiculus Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridicu",
            },
            {
              name: "Alex Roke",
              text: "Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridiculus Lorem ipsum dolor sit amet consectetura dipiscin g ipsum rephen elit libero facilisis etiam ridicu",
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
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
                delay: i * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-brand-dark border border-brand-dark rounded-xl p-8 shadow-[0_0_12px_rgba(77,74,74,0.3)] flex flex-col gap-8"
            >
              <Quote
                className={`w-10 h-10 text-brand-teal ${dir === "rtl" ? "scale-x-[-1]" : ""}`}
              />

              <p className="text-base text-brand-muted leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand-muted-dark" />
                <div className="flex flex-col">
                  <span className="text-lg text-brand-teal">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-white">{t("test.role")}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
