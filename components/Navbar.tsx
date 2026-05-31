"use client";

import { useLocaleContext } from "@/context/LocaleProvider";
import { Globe, Menu, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Navbar() {
  const t = useTranslations();
  const { locale, toggleLocale } = useLocaleContext();

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 mx-4 md:mx-10 lg:mx-20">
      <div className="max-w-[1440px] mx-auto bg-brand-black/80 backdrop-blur-md border border-brand-dark rounded-full px-6 py-4 flex items-center justify-between">
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          <a
            href="#services"
            className="text-white hover:text-brand-teal transition-colors text-sm font-medium"
          >
            {t("nav.service")}
          </a>
          <a
            href="#projects"
            className="text-white hover:text-brand-teal transition-colors text-sm font-medium"
          >
            {t("nav.projects")}
          </a>
          <a
            href="#about"
            className="text-white hover:text-brand-teal transition-colors text-sm font-medium"
          >
            {t("nav.about")}
          </a>
          <a
            href="#contact"
            className="text-white hover:text-brand-teal transition-colors text-sm font-medium"
          >
            {t("nav.contact")}
          </a>
        </div>

        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/ideal-factory-icon.png"
            alt="Logo"
            width={30}
            height={30}
            className="w-8 h-8"
          />
          <span className="font-heading font-medium  tracking-tight text-md leading-4 text-brand-teal">
            Ideal <br />
            Factory
          </span>
        </div>

        {/* CTA & Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="hidden md:flex items-center gap-2 text-white/80 hover:text-white px-3 py-2 rounded-full border border-white/20 hover:border-white/40 transition-all text-sm font-medium"
          >
            <Globe className="w-4 h-4" />
            {locale === "en" ? "العربية" : "English"}
          </button>

          <button className="hidden md:flex items-center gap-2 bg-brand-teal hover:bg-brand-teal/90 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all">
            <Phone className="w-4 h-4" />
            {t("nav.cta")}
          </button>

          <button className="lg:hidden text-white p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
