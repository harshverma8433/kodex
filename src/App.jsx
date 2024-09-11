
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Training from "./Components/Training/Training";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import Navbar from "./Components/Navbar/Navbar";
import HeroPage from "./Components/HeroPage/HeroPage";
import AboutUsSectioon from "./Components/AboutUsSection/AboutUsSection"
import GradientColorRight from "./Components/GradientColor/GradientColorRight";


const App = () => {
  return (
    <div className="bg-black min-h-screen px-[15%] overflow-hidden">
        <Navbar/>
        <HeroPage />
        
        <Training/>
      <ServicesSection/>
      <AboutUsSectioon/>
      <Footer />
    </div>
  );
};

export default App;