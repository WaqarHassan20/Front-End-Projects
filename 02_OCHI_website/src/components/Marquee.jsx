import React from "react";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
function Marquee() {
  return (
    <div
      // data-scroll
      // data-scroll-section
      // data-scroll-speed="10"
      className="w-full rounded-tl-3xl rounded-tr-3xl bg-[#004D43] pt-28 pb-14"
    >
      <div className="border-t-1 border-b-1 border-zinc-400 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 9,
            ease: "linear",
          }}
          className="text-[20vw] leading-none font-bold tracking-tighter pr-[5vw] -mb-[2.2vw] -mt-1 uppercase"
        >
          we are ochi{" "}
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 9,
            ease: "linear",
          }}
          className="text-[20vw] leading-none font-bold tracking-tighter pr-[5vw] -mb-[2.2vw] -mt-1 uppercase"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 9,
            ease: "linear",
          }}
          className="text-[20vw] leading-none font-bold tracking-tighter pr-[5vw] -mb-[2.2vw] -mt-1 uppercase"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
