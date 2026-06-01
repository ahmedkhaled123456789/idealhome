"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
export function Gallery() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState("All");
  const categories = [
    {
      id: "All",
      label: t("gal.all"),
    },
    {
      id: "Kitchen",
      label: t("gal.kitchen"),
    },
    {
      id: "Door",
      label: t("gal.door"),
    },
    {
      id: "Closet",
      label: t("gal.closet"),
    },
    {
      id: "uPVC Windows",
      label: t("gal.windows"),
    },
  ];

  const projects = [
    {
      id: 1,
      category: "Kitchen",
      img: "/assets/7.webp",
      title: t("gal.projects.kitchen1.title"),
      style: t("gal.projects.kitchen1.style"),
    },
    {
      id: 2,
      category: "Door",
      img: "/assets/2.webp",
      title: t("gal.projects.door1.title"),
      style: t("gal.projects.door1.style"),
    },
    {
      id: 3,
      category: "Closet",
      img: "/assets/3.webp",
      title: t("gal.projects.closet1.title"),
      style: t("gal.projects.closet1.style"),
    },
    {
      id: 4,
      category: "Kitchen",
      img: "/assets/8.webp",
      title: t("gal.projects.kitchen2.title"),
      style: t("gal.projects.kitchen2.style"),
    },
    {
      id: 5,
      category: "uPVC Windows",
      img: "/assets/4.webp",
      title: t("gal.projects.windows1.title"),
      style: t("gal.projects.windows1.style"),
    },
    {
      id: 6,
      category: "Closet",
      img: "/assets/5.webp",
      title: t("gal.projects.closet2.title"),
      style: t("gal.projects.closet2.style"),
    },
  ];

  const filteredProjects = projects.filter(
    (p) => activeTab === "All" || p.category === activeTab,
  );

  return (
    <section className="w-full bg-brand-dark py-20 px-4 md:px-10 lg:px-20 border-y border-black shadow-lg">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-heading font-semibold text-3xl md:text-[28px] text-white mb-10 text-center"
        >
          {t("gal.title")}
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2.5 rounded-xl text-base transition-all ${activeTab === cat.id ? "bg-white text-brand-dark font-medium" : "bg-transparent text-white border border-white hover:bg-white/10"}`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry-ish Grid */}
        <motion.div
          layout
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                key={project.id}
                className={`relative rounded-[10px] overflow-hidden group cursor-pointer ${i === 0 ? "md:col-span-2 md:row-span-2 h-[400px] md:h-full" : "h-[300px]"}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.img})`,
                  }}
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="bg-brand-dark/80 backdrop-blur-sm p-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-xl text-white font-medium mb-1">
                      {project.title}
                    </h4>
                    <p className="text-brand-teal text-sm">{project.style}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.button
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-medium text-base transition-all"
        >
          {t("gal.cta")}
        </motion.button>
      </div>
    </section>
  );
}
