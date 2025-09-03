"use client";

import { motion } from "framer-motion";
import { styles, domainPath } from "@/components/shared/styles";

export default function Slider() {
  return (
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
  );
}
