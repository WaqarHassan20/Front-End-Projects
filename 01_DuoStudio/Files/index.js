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

gsap.from(".page1 h1,h2", {
  opacity: 0,
  y: 100,
  duration: 2.7,
  delay: 0.5,
  stagger: 0.2,
  ease: "power4.out",
});

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    // markers: true,
    start: "top 35%",
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
    width: "100%",
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

var cursor = document.querySelector(".cursor");
var main = document.querySelector(".main");
main.addEventListener("mousemove", (dets) => {
  cursor.style.left = dets.clientX + "px";
  cursor.style.top = dets.clientY + "px";
});

const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: true,
    start: "top -380%",
    end: "top -400%",
    scrub: 3,
  },
});

timeline3.to(".main", {
  backgroundColor: "#0f0d0d",
});
