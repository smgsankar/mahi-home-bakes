import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { Topbar } from "./sections/Topbar";
import { Home } from "./sections/Home";
import { BackdropImage } from "./components/BackdropImage";
import "./styles/App.css";
// import { Contact } from "./sections/Contact";
// import { Footer } from "./sections/Footer";
// import { Gallery } from "./sections/Gallery";
// import { Testimonials } from "./sections/Testimonials";
// import { About } from "./sections/About";

function App() {
  useEffect(() => {
    initializeApp(JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG || "{}"));
  });

  return (
    <main id="main">
      <div className="homeWithNav">
        <Topbar />
        <Home />
        <BackdropImage />
      </div>
      {/* <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </main>
  );
}

export default App;
