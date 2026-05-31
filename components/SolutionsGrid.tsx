import {
  AppWindow,
  ArrowRight,
  DoorOpen,
  Refrigerator,
  Shirt,
} from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import MotionElement from "./motion/MotionElement";

export async function SolutionsGrid() {
  const locale = await getLocale();
  const dir = locale === "en" ? "ltr" : "rtl";
  const t = await getTranslations();

  const solutions = [
    {
      title: t("sol.grid.kitchens.title"),
      description: t("sol.grid.kitchens.desc"),
      image:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
      icon: Refrigerator,
    },
    {
      title: t("sol.grid.closets.title"),
      description: t("sol.grid.closets.desc"),
      image:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=1974&auto=format&fit=crop",
      icon: Shirt,
    },
    {
      title: t("sol.grid.doors.title"),
      description: t("sol.grid.doors.desc"),
      image:
        "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=2000&auto=format&fit=crop",
      icon: DoorOpen,
    },
    {
      title: t("sol.grid.windows.title"),
      description: t("sol.grid.windows.desc"),
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      icon: AppWindow,
    },
  ];

  return (
    <section className="w-full bg-brand-dark py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-[1348px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
          {solutions.map((solution, index) => (
            <MotionElement
              as="div"
              key={index}
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
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-brand-black rounded-[10px] overflow-hidden group border border-brand-dark hover:border-brand-teal/30 transition-colors"
            >
              <div className="relative h-[423px] w-full p-6">
                <div
                  className="absolute inset-6 rounded-[10px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${solution.image})`,
                  }}
                />

                <div
                  className={`absolute top-10 ${dir === "rtl" ? "right-10" : "left-10"} bg-white p-3 rounded-lg shadow-lg`}
                >
                  <solution.icon className="w-8 h-8 text-brand-teal" />
                </div>
              </div>

              <div className="p-8 pt-4 flex flex-col min-h-[160px] justify-between">
                <div>
                  <h4 className="font-heading font-bold text-[32px] md:text-[40px] text-white mb-2">
                    {solution.title}
                  </h4>
                  <p className="text-brand-light text-base">
                    {solution.description}
                  </p>
                </div>

                <div className="flex justify-end">
                  <button className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-brand-teal flex items-center justify-center text-white hover:bg-brand-teal/90 transition-colors group-hover:scale-110">
                    <ArrowRight
                      className={`w-5 h-5 ${dir === "rtl" ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
              </div>
            </MotionElement>
          ))}
        </div>

        <MotionElement
          as="div"
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
          className="flex justify-center mt-16"
        >
          <button className="bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-4 rounded-xl font-medium text-lg flex items-center gap-3 transition-all">
            {t("sol.grid.cta")}
            <ArrowRight
              className={`w-5 h-5 ${dir === "rtl" ? "rotate-180" : ""}`}
            />
          </button>
        </MotionElement>
      </div>
    </section>
  );
}
