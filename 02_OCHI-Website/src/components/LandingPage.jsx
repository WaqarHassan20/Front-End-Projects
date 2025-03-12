import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div className="w-screen h-screen bg-zinc-900 p-1">
      <div className="textstructure mt-[12vw] px-20">
        {["We Create", "Eye opening", "presentations"].map((item, index) => {
          return (
            <>
              <div className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                  {index === 1 && (
                    <div className="rounded-md w-[9vw] bg-red-600 relative -top-[0.6vw] h-[5.5vw]"></div>
                  )}
                  <h1 className="uppercase text-[8vw] flex items-center h-full leading-[6.5vw] tracking-tighter font-semibold">
                    {item}
                  </h1>
                </div>
              </div>
            </>
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

// This is the other approach of making the text masker by making the separate component function

// function MaskerText({ text }) {
//   return (
//     <>
//       <div className="masker">
//         <h1 className="uppercase text-9xl leading-[5.5vw] tracking-tighter font-medium">
//           {text}
//         </h1>
//       </div>
//     </>
//   );
// }
// <MaskerText text={"We Create"} />
// <MaskerText text={"Eye opening"} />
// <MaskerText text={"presentations"} />
