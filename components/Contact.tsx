"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
export function Contact() {
  const t = useTranslations();
  return (
    <section className="w-full bg-linear-to-b from-brand-dark to-black py-24 px-4 md:px-10 lg:px-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        {/* Left Content */}
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
          className="w-full lg:w-5/12 flex flex-col gap-8"
        >
          <div className="bg-brand-teal rounded-xl px-6 py-2 self-start">
            <span className="text-lg text-white">{t("contact.badge")}</span>
          </div>
          <h2 className="font-semibold text-3xl md:text-[32px] leading-tight text-white">
            {t("contact.title1")}
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            {t("contact.desc")}
          </p>
        </motion.div>

        {/* Right Form */}
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
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full lg:w-7/12 flex flex-col gap-8"
        >
          <h3 className="font-semibold text-3xl md:text-[32px] text-white">
            {t("contact.title2")}
          </h3>

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                placeholder={t("contact.name")}
                className="w-full bg-white rounded-md px-4 py-3 text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />

              <input
                type="email"
                placeholder={t("contact.email")}
                className="w-full bg-white rounded-md px-4 py-3 text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-teal"
              />
            </div>
            <input
              type="tel"
              placeholder={t("contact.phone")}
              className="w-full bg-white rounded-md px-4 py-3 text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-teal"
            />

            <textarea
              placeholder={t("contact.msg")}
              rows={4}
              className="w-full bg-white rounded-md px-4 py-3 text-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-teal resize-none"
            />

            <button
              type="submit"
              className="self-start bg-brand-teal hover:bg-brand-teal/90 text-white px-10 py-3.5 rounded-xl text-base transition-all mt-2"
            >
              {t("contact.submit")}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
