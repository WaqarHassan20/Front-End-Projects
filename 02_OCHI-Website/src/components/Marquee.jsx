import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="w-full rounded-tl-3xl rounded-tr-3xl bg-[#004D43] pt-28 pb-4">
      <div className="border-t-1 border-b-1 border-zinc-400 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          className="text-[20vw] leading-none font-bold tracking-tighter -mb-2 -mt-1 uppercase"
        >
          we are ochi{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          className="text-[20vw] leading-none font-bold tracking-tighter -mb-2 -mt-1 uppercase"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "linear",
          }}
          className="text-[20vw] leading-none font-bold tracking-tighter -mb-2 -mt-1 uppercase"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
