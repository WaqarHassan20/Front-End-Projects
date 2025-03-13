import React from "react";

function Cards() {
  return (
    <>
      <div className="w-full h-screen bg-[#F1F1F1] flex gap-5 pt-[22vh] px-[4.4vw]">
        <div className="cardcontainer w-1/2 h-[48vh]">
          <div className="card relative bg-[#004D43] w-full h-full rounded-xl flex justify-center items-center">
            <img
              className="w-[9.5vw]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            />
            <button className="absolute bottom-10 left-10 border-[0.1vw] px-[0.6vw] py-[0.3vw] rounded-full border-[#CDEA68]">
              <p className=" text-[0.95vw] text-[#CDEA68] font-medium">
                {" "}
                &copy;2019-2022
              </p>
            </button>
          </div>
        </div>
        <div className="cardcontainer w-1/2 h-[48vh] flex gap-5">
          <div className="card relative bg-[#212121] w-1/2 h-full rounded-xl flex justify-center items-center">
            {" "}
            <img
              className="w-[9.5vw]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            />
            <button className="absolute bottom-10 left-10 border-[0.1vw] px-[0.6vw] py-[0.3vw] rounded-full border-slate-100">
              <p className="uppercase text-[0.95vw] text-gray-300 font-semibold">
                {" "}
                Rating 5.0 on clutch
              </p>
            </button>
          </div>
          <div className="relative card bg-[#212121] w-1/2 h-full rounded-xl flex justify-center items-center">
            {" "}
            <img
              className="w-[6.5vw]"
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            />
            <button className="absolute bottom-10 left-10 border-[0.1vw] px-[0.6vw] py-[0.3vw] rounded-full border-slate-100">
              <p className="uppercase text-[0.95vw] text-gray-300 font-semibold">
                {" "}
                business bootcamp alumni{" "}
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

// https://ochi.design/wp-content/uploads/2022/04/logo002.svg
// https://ochi.design/wp-content/uploads/2022/04/logo003.png
