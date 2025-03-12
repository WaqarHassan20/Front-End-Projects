import React from "react";
import { useState, useEffect } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     let mouseX = e.clientX;
  //     let mouseY = e.clientY;

  //     let deltaX = mouseX - window.innerWidth / 2;
  //     let deltaY = mouseY - window.innerHeight / 2;

  //     let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  //     setRotate(angle - 180);
  //   });
  // }, []);

  // Another and better approach for the above event on mouse
  useEffect(() => {
    const handleMouseMoveEvent = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2; // Minus current mouse position from screen center
      let deltaY = mouseY - window.innerHeight / 2; // Minus current mouse position from screen center

      let angle = Math.atan2(deltaY, deltaX); // Calculate mouse angle position
      let angleDeg = angle * (180 / Math.PI) - 180; // Convert the angle to degrees and subtract 180 degrees because eyes are looking at the opposite direction of cursor

      requestAnimationFrame(() => {
        setRotate(angleDeg);
      });
    };

    window.addEventListener("mousemove", handleMouseMoveEvent);

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveEvent);
    };
  }, []);

  return (
    <>
      <div className="eyes w-full h-screen overflow-hidden">
        <div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
          <div className=" absolute top-2/5 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-15">
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
