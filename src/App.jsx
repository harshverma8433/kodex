
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Training from "./Components/Training/Training";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import Navbar from "./Components/Navbar/Navbar";
import HeroPage from "./Components/HeroPage/HeroPage";
import AboutUsSectioon from "./Components/AboutUsSection/AboutUsSection"
import GradientColor from "./Components/GradientColor/GradientColor";

const App = () => {
  return (
    <div className="bg-black min-h-screen px-[15%]">
      <Navbar/>
      <GradientColor top="60%" pos="right" />
      <HeroPage/>
      <Training/>
      <GradientColor top="170%" pos="left" />
      <ServicesSection/>
      <AboutUsSectioon/>
      <GradientColor top="260%" pos="right" />
      <Footer />
    </div>
  );
};

export default App;