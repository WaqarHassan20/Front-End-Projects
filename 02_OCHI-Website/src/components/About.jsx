import React from "react";

function About() {
  return (
    <div className="w-full p-[4vw] bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl ">
      <h1 className="font-sans text-[2.8vw] leading-[3.7vw] font-medium tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="border-t-2 flex gap-5 border-[#a7bd65] w-full pt-4 mt-20">
        <div className="w-1/2">
          <h1 className="text-[3.5vw] tracking-tight font-medium">
            Our approach:
          </h1>
          <ArrowButton
            text={"Read More"}
            bgColor={"bg-zinc-900"}
            textColor={"text-white"}
          />
        </div>
        <div className="w-1/2 h-[65vh] rounded-3xl">
          <img
            className="w-full h-full object-cover object-center rounded-3xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default About;

export function ArrowButton({ text, bgColor, textColor }) {
  return (
    <button
      className={`rounded-full ${bgColor} mt-1 ${textColor} px-7 py-5 uppercase flex gap-11 items-center`}
    >
      {text} <div className="w-3 h-3 bg-white rounded-full"></div>
    </button>
  );
}
