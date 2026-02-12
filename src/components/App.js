import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
