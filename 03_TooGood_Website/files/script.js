function VideoConFunction() {
  let videoCon = document.querySelector(".video-container");
  let playBtn = document.querySelector("#play");
  videoCon.addEventListener("mouseenter", () => {
    gsap.to(playBtn, {
      opacity: 1,
      scale: 1,
    });
  });
  videoCon.addEventListener("mouseleave", () => {
    gsap.to(playBtn, {
      opacity: 0,
      scale: 0,
    });
  });

  videoCon.addEventListener("mousemove", (dets) => {
    const rect = videoCon.getBoundingClientRect(); // Get container position
    gsap.to(playBtn, {
      x: dets.clientX - rect.left - 50, // Corrected subtraction
      y: dets.clientY - rect.top - 50,
      cursor: "pointer",
    });
  });
}
VideoConFunction();

function HeadingImageAnimation() {
  gsap.from("#page1 h1", {
    duration: 1,
    delay: 0.5,
    y: 100,
    opacity: 0,
    stagger: 0.2,
  });
  gsap.from("#page1 .video-container", {
    duration: 0.6,
    delay: 1.3,
    scale: 0.85,
    opacity: 0,
  });
}

HeadingImageAnimation();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
