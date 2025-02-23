import Header from "./components/macro_components/Header";
import MainPageComponent from "./components/macro_components/MainPageComponent";
import Footer from "./components/macro_components/Footer";
import { motion, useScroll } from "framer-motion";

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#f0c060"
        }}
      />

      <div className='content-page'>
        <Header />
        <MainPageComponent />
        <Footer />
      </div>
    </>
  );
}
export default App;
