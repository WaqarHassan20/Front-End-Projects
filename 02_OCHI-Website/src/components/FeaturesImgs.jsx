import React from "react";

function FeaturesImgs({ url1, url2, text1, text2, heading1, heading2 }) {
  return (
    <div className="cards w-full flex gap-6 my-[10vw] mt-14">
      <div className="card-container w-1/2 h-[72vh] relative">
        <h1 className="absolute left-full top-1/2 -translate-x-1/2 z-50 text-[#CDEA68] -translate-y-1/2 font-bold text-[5.3vw] tracking-tighter leading-none">
          {typeof text1 === "string" &&
            text1.split("").map((letter, index) => {
              return (
                <span className="" key={index}>
                  {letter}
                </span>
              );
            })}
        </h1>
        <div className="flex gap-4 items-center mb-4">
          <div className="rounded-full bg-white w-[0.7vw] h-[0.7vw]"></div>
          <p className="uppercase font-medium text-gray-100">{heading1}</p>
        </div>
        <div className="card w-full h-full rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={url1}
          />
        </div>
        <div className="flex">
          <HashTags text="brand identity" />
          <HashTags text="pitch deck" />
        </div>
      </div>

      <div className="card-container w-1/2 h-[72vh] relative">
        <h1 className="absolute right-full top-1/2 translate-x-1/2 text-[#CDEA68] -translate-y-1/2 font-bold text-[5.3vw] tracking-tighter leading-none">
          {typeof text2 === "string" &&
            text2.split("").map((letter, index) => {
              return (
                <span className="" key={index}>
                  {letter}
                </span>
              );
            })}
        </h1>
        <div className="flex gap-4 items-center mb-4">
          <div className="rounded-full bg-white w-[0.7vw] h-[0.7vw]"></div>
          <p className="uppercase font-medium text-gray-100">{heading2}</p>
        </div>
        <div className="card w-full h-full rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={url2}
          />
        </div>
        <div className="flex">
          <HashTags text="brand template" />
          <HashTags text="Sales Deck" />
          <HashTags text="Social media template" />
        </div>
      </div>

    </div>
  );
}

export default FeaturesImgs;
function HashTags({ text = "defaultTag" }) {
  return (
    <div className="w-fit px-5 mt-4 ml-2 py-1 rounded-full border-1 border-slate-200 flex gap-4 items-center bg-zinc-900">
      <p className="uppercase text-[0.9vw] mt-1 font-medium text-slate-200">
        {text}
      </p>
    </div>
  );
}
