import React from "react";
import FeaturesImgs from "./FeaturesImgs";
import { ArrowButton } from "./About";
function Features() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-2 border-zinc-800 pb-14">
        <h1 className="text-7xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20 pb-1">
        <FeaturesImgs
          url1={
            "https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
          }
          url2={
            "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
          }
          heading1={"Salience Labs"}
          heading2={"Cardboard spaceship"}
          text1={"FYDE"}
          text2={"VISE"}
        />
        <FeaturesImgs
          url1={
            "https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png"
          }
          url2={
            "https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-663x551.jpg"
          }
          heading1={"AH2 & MATTHORN"}
          heading2={"SOFTSORT"}
          text1={"AH2"}
          text2={"SOFTSORT"}
        />
        <FeaturesImgs
          url1={
            "https://ochi.design/wp-content/uploads/2022/06/Frame-3876-663x551.jpg"
          }
          url2={
            "https://ochi.design/wp-content/uploads/2025/02/ATG_Website_1-663x551.png"
          }
          heading1={"TRAWA"}
          heading2={"ALL THINGS GO"}
          text1={"THINGS"}
          text2={"FYDE"}
        />
        <div className="w-full flex justify-center">
          <button className="rounded-full bg-slate-200 text-black font-medium mt-10 px-7 py-5 uppercase flex gap-11 items-center">
            See all studycases{" "}
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
