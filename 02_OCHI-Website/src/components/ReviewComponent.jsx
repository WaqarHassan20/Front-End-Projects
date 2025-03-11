import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function ReviewComponent({ link, name, image, service1, service2, review }) {
  return (
    <>
      <motion.div
        whileTap={{ height: "10%" }}
        className="w-full min-h-[53vh] border-t-[0.05vw] border-b-[0.05vw] border-zinc-600 p-2 pt-4 flex"
      >
        <div className="w-[25vw]">
          <a
            className="text-[1.1vw] underline underline-offset-2 text-zinc-900 font-normal tracking-tight ml-16"
            href="https://www.google.com"
          >
            {link}
          </a>
        </div>

        <div
          className="w-[25vw] text-[1.2vw] text-zinc-900 font-normal pl-10
         tracking-tight "
        >
          <p>Services:</p>
          <div className="relative top-[4.5vw]">
            <Services text={service1} />
            <Services text={service2} />
          </div>
        </div>

        <div className="w-[40vw] flex flex-col gap-[3.2vw]">
          <div>
            <p className="text-zinc-900 font-medium text-[1.05vw]">{name}</p>
          </div>

          <div>
            <img
              className="my-6 h-[7vw] rounded-2xl tracking-tight"
              src={image}
            />
            <div className="max-w-[32vw]">
              <p className="text-zinc-900 font-medium text-[1vw]">{review}</p>
            </div>
          </div>
        </div>
        <div className="w-[10vw] text-center">
          <button className="text-zinc-900 underline underline-offset-[0.3vw] tracking-tight cursor-pointer text-[1.3vw] font-medium">
            READ
          </button>
        </div>
      </motion.div>
    </>
  );
}

export default ReviewComponent;

export function Services({ text = "defaultTag" }) {
  return (
    <div className="arrowlink hover:bg-zinc-900 w-fit py-1">
      <a href="" className="flex items-center gap-3">
        <div className="w-fit px-5 py-1 rounded-full border-1 border-zinc-900 flex gap-4 items-center bg-slate-200">
          <p className="uppercase text-[0.9vw] mt-1 font-medium text-zinc-900">
            {text}
          </p>
        </div>
        <div className="w-[1.8vw] h-[1.8vw] flex items-center justify-center bg-slate-200 rounded-full">
          <FaArrowUpLong className="rotate-45 text-slate-200" />
        </div>
      </a>
    </div>
  );
}
