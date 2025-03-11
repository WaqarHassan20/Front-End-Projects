import React from "react";
import ReviewComponent from "./ReviewComponent";

function Reviews() {
  return (
    <>
      <div className="w-full py-20 bg-slate-200">
        <div className="w-full px-20 pb-14">
          <h1 className="text-[4.3vw] font-semibold font-sans text-zinc-900 tracking-tight">
            Clients' Reviews
          </h1>
        </div>
        <ReviewComponent
          link={"Kamran Ventures"}
          service1={"INVESTOR DECK"}
          service2={"SALES DECK"}
          name={"William Barnes"}
          image={
            "https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
          }
          review={
            "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5"
          }
        />
      </div>
    </>
  );
}

export default Reviews;
