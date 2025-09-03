import Image from "next/image";
import { Icons } from "@/components/shared/icons";
import { useTranslations } from "next-intl";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function InfoLanding() {
  const t = useTranslations("InfoLanding");
  "use client";

import { motion } from "framer-motion";
import { styles, domainPath } from "@/components/shared/styles";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* سلايدر */}
      <div className="w-full overflow-hidden py-8 bg-gray-50">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {[...styles, ...styles].map((style, index) => (
            <div key={index} className="flex-shrink-0 w-64 h-64">
              <img
                src={`${domainPath}/${style.img}`}
                alt={style.name}
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* باقي الصفحة */}
      <section className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to My AI Headshots</h1>
        <p className="text-gray-600">اختر ستايلك وابدأ في إنشاء صورك الاحترافية.</p>
      </section>
    </main>
  );
}
  const data = {
    image: "/_static/index/hero-landing.png",
    list: ["laptop", "settings", "cpu"],
  };

  return (
    <div className="py-10 sm:py-20">
      <MaxWidthWrapper className="grid gap-10 px-2.5 lg:grid-cols-2 lg:items-center lg:px-7">
        <div className="lg:order-1">
          <h2 className="font-heading text-2xl text-foreground md:text-4xl lg:text-[40px]">
            {t("title")}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            {t("description")}
          </p>
          <dl className="mt-6 space-y-4 leading-7">
            {data.list.map((icon, index) => {
              const Icon = Icons[icon || "arrowRight"];
              return (
                <div className="relative pl-8" key={index}>
                  <dt className="font-semibold">
                    <Icon className="absolute left-0 top-1 size-5 stroke-purple-700" />
                    <span>{t(`list.title.${index + 1}`)}</span>
                  </dt>
                  <dd className="text-sm text-muted-foreground">
                    {t(`list.description.${index + 1}`)}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
        <div className="order-2 overflow-hidden rounded-xl border lg:-m-4">
          <div className="aspect-video">
            <Image
              className="size-full object-cover object-center"
              src={data.image}
              alt={t("title")}
              width={1000}
              height={500}
              priority={true}
            />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* ===== New Slider Section (Full-width Scrolling Images) ===== */}
      <div className="relative overflow-hidden w-full py-10">
        <div className="flex animate-marquee space-x-6">
          {[
            "/_static/index/hero-landing.png",
            "/_static/index/hero-landing2.png",
            "/_static/index/hero-landing3.png",
            "/_static/index/hero-landing4.png",
            "/_static/index/hero-landing5.png"
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`headshot ${i}`}
              width={300}
              height={300}
              className="rounded-xl object-cover shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
