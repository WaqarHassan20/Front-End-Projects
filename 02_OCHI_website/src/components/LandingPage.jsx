import React from "react";
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-screen h-screen bg-zinc-900 p-1">
      <div className="textstructure mt-[12vw] px-20">
        {["We Create", "Eye opening", "presentations"].map((item, index) => {
          return (
            <div key={index}>
              <div className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "9vw" }}
                      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                      className="rounded-md w-[9vw] mr-[0.5vw] bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] overflow-hidden relative -top-[0.6vw] h-[5.5vw] object-cover object-center"
                    ></motion.div>
                  )}
                  <h1 className="uppercase text-[8vw] flex items-center h-full leading-[6.5vw] tracking-tighter font-semibold">
                    {item}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-[10vw] border-t-[1px] border-zinc-800 flex justify-between items-center px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="leading-none font-light tracking-tight text-lg py-5"
            >
              {item}
            </p>
          );
        })}

        <div className="start flex items-center gap-2">
          <div className="px-4 py-1 border-2 border-zinc-500 font-light text-md rounded-full uppercase">
            Start the project{" "}
          </div>
          <div className="w-10 h-10 border-2 border-zinc-500 flex justify-center items-center rounded-full">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
