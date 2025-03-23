import Footer from "./components/Footer";
import Links from "./components/Links";
import LinksPage from "./components/LinksPage";

function App() {
  return (
    <>
      <div className="h-screen max-w-screen">
        <LinksPage />
        <Links />
        <Footer />
      </div>
    </>
  );
}

export default App;
