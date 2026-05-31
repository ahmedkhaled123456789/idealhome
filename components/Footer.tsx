"use client";
import { motion } from "framer-motion";
import { Globe, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
export function Footer() {
  const t = useTranslations();
  return (
    <footer className="w-full bg-black pt-20 pb-10 px-4 md:px-10 lg:px-20">
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
        className="max-w-[1200px] mx-auto"
      >
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Logo & Desc */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-teal rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Ideal<span className="text-brand-teal">Factory</span>
              </span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl text-brand-teal mb-2">
              {t("footer.links")}
            </h4>
            {[
              t("nav.about"),
              t("nav.service"),
              t("test.label"),
              t("nav.projects"),
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white hover:text-brand-teal transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Col 3: Explore */}
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl text-brand-teal mb-2">
              {t("footer.explore")}
            </h4>
            {[
              t("sol.grid.closets.title"),
              t("sol.grid.kitchens.title"),
              t("sol.grid.doors.title"),
              t("sol.grid.windows.title"),
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white hover:text-brand-teal transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-2xl text-brand-teal mb-2">
              {t("footer.contact")}
            </h4>

            <div className="flex items-center gap-4">
              <Globe className="w-5 h-5 text-brand-teal" />
              <a
                href="#"
                className="text-lg text-white hover:text-brand-teal transition-colors"
                dir="ltr"
              >
                www.idealhome.ae
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-brand-teal" />
              <a
                href="mailto:info@idealhome.com"
                className="text-lg text-white hover:text-brand-teal transition-colors"
                dir="ltr"
              >
                info@idealhome.com
              </a>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-brand-teal mt-1" />
              <div className="flex flex-col gap-1" dir="ltr">
                <a
                  href="tel:+97100000000"
                  className="text-lg text-white hover:text-brand-teal transition-colors"
                >
                  +971-000-00-000
                </a>
                <a
                  href="tel:+971503122300"
                  className="text-lg text-white hover:text-brand-teal transition-colors"
                >
                  971 (0)50 312 2300
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-teal/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg text-white">{t("footer.copy")}</p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-lg text-white/60 hover:text-white transition-colors"
            >
              {t("footer.terms")}
            </a>
            <a
              href="#"
              className="text-lg text-white/60 hover:text-white transition-colors"
            >
              {t("footer.privacy")}
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
