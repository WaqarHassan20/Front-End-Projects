import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Features from "./components/Features";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  return (
    <>
      <div id="main" className="w-screen min-h-screen text-white bg-zinc-900">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Features />
        <Reviews />
        <Cards />
        <Footer />
      </div>
    </>
  );
}

export default App;
