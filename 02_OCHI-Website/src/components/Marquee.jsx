import React from "react";

function Marquee() {
  return (
    <div className="w-full bg-[#004D43] pt-28 pb-4">
      <div className="border-t-1 border-b-1 border-zinc-400 flex overflow-hidden whitespace-nowrap">
        <h1 className="text-[25vw] leading-none font-bold tracking-tighter -mb-10 -mt-11 uppercase">
          we are ochi
        </h1>
        <h1 className="text-[25vw] leading-none font-bold tracking-tighter -mb-10 -mt-11 uppercase">
          we are ochi
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
