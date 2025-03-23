import React from "react";
import Apple from "../assets/images/Apple.png";
import PlayStore from "../assets/images/PlayStore.png";
import AppGallery from "../assets/images/AppGallery.png";
import Bimage from "../assets/images/Bimage";
import Toogood from "../assets/images/Toogood";
import LinkedIn from "../assets/Logos/LinkedIn";
import Insta from "../assets/Logos/Insta";
import Facebook from "../assets/Logos/Facebook";
import Tiktok from "../assets/Logos/Tiktok";
import Youtube from "../assets/Logos/Youtube";
import Twitter from "../assets/Logos/Twitter";

function Links() {
  return (
    <>
      <div className="bg-[#00615F] max-w-screen md:px-10 md:py-8 py-4 px-5 flex items-center justify-between">
        <div>
          <Toogood />
        </div>
        <div className="flex flex-col gap-3 md:gap-5 p-1 w-fit">
          <div className="max-w-fit flex flex-col md:gap-3 gap-2 mx-auto ">
            <div className="flex md:gap-8 gap-5">
              <a className="uppercase font-[1000] tracking-tight text-white font-mono text-xs md:text-lg">
                Carrers
              </a>
              <a className="uppercase font-[1000] tracking-tight text-white font-mono text-xs md:text-lg">
                Press
              </a>
              <a className="uppercase font-[1000] tracking-tight text-white font-mono text-xs md:text-lg">
                Support
              </a>
              <a className="uppercase font-[1000] tracking-tight text-white font-mono text-xs md:text-lg">
                MyStore
              </a>
            </div>
            <div className="flex justify-between">
              <LinkedIn />
              <Insta />
              <Facebook />
              <Tiktok />
              <Youtube />
              <Twitter />
            </div>
          </div>

          <div className="flex md:gap-4 gap-2">
            <img className="md:w-34 w-20" src={Apple} />
            <img className="md:w-34 w-20" src={PlayStore} />
            <img className="md:w-34 w-20" src={AppGallery} />
          </div>
        </div>
        <div className="">
          <Bimage />
        </div>
      </div>
    </>
  );
}

export default Links;
