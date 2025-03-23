import React from "react";
import UpperPic from "../assets/images/UpperPic.avif";
import LowerGirlPic from "../assets/images/LowerGirlPic.avif";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
function LinksPage() {
  const data = [
    {
      heading: "SURPRISE BAG",
      text: "Unlock revenue from surplus food: Sell your unsold food in 'Surprise Bags' through the Too Good To Go app, for users to come collect in-store at a pre-determined time.",
      types: "Food Retail, Food Service, Catering",
    },
    {
      heading: "Too Good To Go Platform",
      text: "Your end-to-end surplus food management solution: Modular Softwares that helps retailers seamlessly track, manage and redistribute surplus food.",
      types: "Grocery Retail",
    },
    {
      heading: "Date labeling initiative",
      text: "Reduce waste in households: Join a coalition of world leading brands with our bespoke 'Look-Smell-Taste' label printed on billions of Best Before Products.",
      types: "FMCGS, WholeSale, Retail",
    },
  ];

  return (
    <div className="max-w-screen bg-[#F9F3F0] min-h-screen ">
      <div className="border-4 border-green-60 flex flex-col gap-10 lg:px-24 py-8">
        <div className="mb-8 flex flex-col gap-4 items-center p-5">
          <div>
            <h2 className="text-[#00615F] font-[1000] text-3xl lg:text-5xl text-center font-mono uppercase">
              Our Business solutions
            </h2>
          </div>
          <div className="md:w-fit w-3/4">
            <p className="text-gray-500 max-w-3xl text-sm lg:text-lg tracking-tight text-center font-medium">
              We offer a range of solutions to empower the world's leading food
              distributors to avoid good food from going to waste.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 h-fit">
          <div className="w-[45%] lg:relative ">
            <img
              className="lg:h-72 md:h-60 h-52 absolute z-10 lg:right-0 right-30"
              src={UpperPic}
            />
            <img
              className="lg:h-fit md:mr-20 h-100 lg:right-0 lg:mt-20 ml-18 md:ml-20"
              src={LowerGirlPic}
            />
          </div>
          <div className="w-full lg:w-[60%]">
            <div className="lg:flex lg:flex-col justify-between">
              <div className="flex lg:flex-row flex-col items-center lg:w-full w-full">
                <TextComponent
                  heading={data[0].heading}
                  text={data[0].text}
                  types={data[0].types}
                />
                <TextComponent
                  heading={data[1].heading}
                  text={data[1].text}
                  types={data[1].types}
                />
              </div>
              <div className="flex flex-row items-center justify-center w-full">
                <TextComponent
                  heading={data[2].heading}
                  text={data[2].text}
                  types={data[2].types}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-full w-fit mx-auto mt-8 p-20">
          <div className="text-center text-[#00615F] font-[1000] text-xl md:text-3xl font-mono uppercase lg:max-w-3xl w-full mx-auto">
            <h1>JOIN OVER 175,000 BUSINESSES FIGHTING FOOD WASTE WITH US</h1>
          </div>
          <div className="flex gap-10 items-center justify-center">
            <Button text={"Download the app"} />
            <Button text={"Business sign in"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinksPage;

function TextComponent({ heading, text, types }) {
  return (
    <div className="border-1 flex flex-col gap-10 border-dotted border-gray-400 w-4/6 md:w-3/6 p-6 mx-1 lg:mx-4 mb-8 lg:mb-4">
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-[#00615F] font-[1000] text-xl md:text-2xl font-mono uppercase">
            {heading}
          </p>
        </div>
        <div>
          <p className="text-gray-500 max-w-3xl font-medium tracking-tight text-sm md:text-lg">
            {text}
          </p>
        </div>
      </div>
      <div>
        <p className="text-gray-400 font-medium text-xs md:text-base">For: </p>
        <div className="flex gap-2">
          <p className="text-[#00615F] font-bold text-xs md:text-sm">{types}</p>
          <BsArrowRight className="text-[#00615F]" />
        </div>
      </div>
    </div>
  );
}

function Button({ text }) {
  return (
    <div className="flex flex-col items-center mt-8">
      <button className="outline-1 text-[#00615F] font-extrabold flex items-center justify-center">
        <p className="text-center text-[#00615F] font-[1000] text-[0.8rem] md:text-[1rem] font-mono uppercase mx-auto px-4 py-1">
          {text}
        </p>
        <HiOutlineArrowLongRight className="h-10 w-10 text-[#00615F] relative left-6" />
      </button>
    </div>
  );
}
