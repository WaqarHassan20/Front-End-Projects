function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 27%",
    end: "top 0%",
    scrub: 3,
  },
});

timeline.to(
  ".page1 h1",
  {
    x: -150,
  },
  "one"
);

timeline.to(
  ".page1 h2",
  {
    x: 300,
  },
  "one"
);

timeline.to(
  ".page1 video",
  {
    // scale: 1.4
    width: "80%",
  },
  "one"
);

const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top -100%",
    end: "top -120%",
    scrub: 3,
  },
});

timeline2.to(".main", {
  backgroundColor: "#fff",
});
