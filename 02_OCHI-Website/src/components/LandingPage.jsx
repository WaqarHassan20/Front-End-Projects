import React from "react";

function LandingPage() {
  return (
    <div className="w-screen h-screen bg-zinc-900 p-1">
      <div className="textstructure mt-40 px-20">
        <MaskerText text={"We Create"} />
        <MaskerText text={"Eye opening"} />
        <MaskerText text={"presentations"} />
      </div>
    </div>
  );
}

export default LandingPage;

function MaskerText({ text }) {
  return (
    <>
      <div className="masker">
        <h1 className="uppercase text-9xl leading-[5.5vw] tracking-tighter font-medium">
          {text}
        </h1>
      </div>
    </>
  );
}
