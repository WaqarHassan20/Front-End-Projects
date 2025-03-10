import React from "react";
import { useState, useEffect } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  //   useEffect(() => {
  //     const eventHandle = (e) => {
  //       let mouseX = e.clientX;
  //       let mouseY = e.clientY;

  //       let deltaX = mouseX - window.innerWidth / 2;
  //       let deltaY = mouseY - window.innerHeight / 2;

  //       let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  //       setRotate(angle - 180);
  //     };

  //     window.addEventListener("mousemove", eventHandle);

  //     return () => {
  //       window.removeEventListener("mousemove", eventHandle);
  //     };
  //   }, []);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);

  return (
    <>
      <div className="eyes w-full h-screen overflow-hidden">
        <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
          <div className=" absolute top-2/6 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-15">
            <div className="w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center">
              <div className="w-[9vw] h-[9vw] rounded-full bg-zinc-900 relative">
                <div
                  style={{
                    transform: `rotate(${rotate}deg)`,
                  }}
                  className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-[1.5vw] h-[1.5vw] m-1 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
            <div className="w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center">
              <div className="w-[9vw] h-[9vw] rounded-full bg-zinc-900 relative">
                <div
                  style={{
                    transform: `rotate(${rotate}deg)`,
                  }}
                  className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-[1.5vw] h-[1.5vw] m-1 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eyes;
