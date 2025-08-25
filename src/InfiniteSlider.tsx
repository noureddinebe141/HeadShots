"use client";

import { motion } from "framer-motion";

const items = [
  { title: "Bookshelf", img: "/images/bookshelf.jpeg" },
  { title: "Park", img: "/images/park.jpeg" },
  { title: "Pro 2 (Light Bg)", img: "/images/pro2-lightbg.jpeg" },
  { title: "Cafe", img: "/images/cafe.jpeg" },
  { title: "City Street", img: "/images/city.jpeg" },
  { title: "Workspace", img: "/images/workspace.jpeg" },
];

export default function InfiniteSlider() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-transparent via-muted/30 to-transparent py-8">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="group relative aspect-[3/4] w-[180px] flex-none overflow-hidden"
          >
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-medium text-white drop-shadow-lg">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
