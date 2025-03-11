import About from "./components/About";
import Eyes from "./components/Eyes";
import Features from "./components/Features";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen text-white bg-zinc-900">
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Features />
        <Reviews />
      </div>
    </>
  );
}

export default App;
