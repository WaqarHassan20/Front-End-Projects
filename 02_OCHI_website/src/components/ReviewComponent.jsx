import React, { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function ReviewComponent({
  linkSite,
  name,
  image,
  service1,
  service2,
  review,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ backgroundColor: "whitesmoke" }}
      animate={{
        height: isExpanded ? "53vh" : "7vh",
      }}
      className="w-full border-t-[0.05vw] border-zinc-600 p-2 pt-4 flex"
    >
      {/* Link Section */}
      <motion.div
        animate={{ height: isExpanded ? "53vh" : "8vh" }}
        className="w-[25vw] flex gap-4 ml-[4vw]"
      >
        {linkSite && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="text-[1.1vw] underline underline-offset-4 text-zinc-900 font-normal tracking-tight"
            href={linkSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkSite}
          </motion.a>
        )}
      </motion.div>

      {/* Services Section */}
      <motion.div
        animate={{ opacity: isExpanded ? 1 : 0 }}
        className="w-[25vw] text-[1.2vw] text-zinc-900 font-normal pl-10 tracking-tight"
      >
        <p className="font-normal tracking-tight text-[1.1vw]">Services:</p>
        <div className="relative top-[4.5vw]">
          <Services text={service1} />
          <Services text={service2} />
        </div>
      </motion.div>

      {/* Review Content */}
      <motion.div
        animate={{ opacity: isExpanded ? 1 : 0 }}
        className="w-[40vw] flex flex-col gap-[3.2vw]"
      >
        <p className="text-zinc-900 font-medium text-[1.05vw]">{name}</p>
        <div>
          <img
            className="my-6 h-[7vw] rounded-2xl tracking-tight"
            src={image}
            alt={name}
          />
          <p className="text-zinc-900 font-medium text-[1vw] max-w-[32vw]">
            {review}
          </p>
        </div>
      </motion.div>

      {/* Expand Button */}
      <div className="w-[10vw] text-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-zinc-900 underline underline-offset-[0.4vw] tracking-tight cursor-pointer text-[1.2vw] font-normal"
        >
          {isExpanded ? "CLOSE" : "READ"}
        </button>
      </div>
    </motion.div>
  );
}

export default ReviewComponent;

export function Services({ text = "defaultTag" }) {
  return (
    <div className="arrowlink w-fit py-1">
      <a href="#" className="flex items-center gap-3">
        <div className="hover:text-[#F1F1F1] hover:bg-zinc-900 uppercase text-[0.9vw] mt-1 font-medium text-zinc-900 w-fit px-5 py-2 rounded-full border border-zinc-900 bg-[#F1F1F1]">
          {text}
        </div>
        <div className="w-[1.8vw] h-[1.8vw] flex items-center justify-center bg-[#F1F1F1] rounded-full">
          <FaArrowUpLong className="rotate-45 text-zinc-900" />
        </div>
      </a>
    </div>
  );
}
