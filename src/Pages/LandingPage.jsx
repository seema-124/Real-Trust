import ChooseUs from "../component/ChooseUs";
import Clients from "../component/Clients";
import Hero from "../component/Hero";
import Projects from "../component/Projects";
import TopNav from "../component/TopNav";
import About from "../component/About";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";

 const LandingPage = () =>{
  return (
    <div>
      <TopNav/>
      <Hero />
      <ChooseUs/>
      <About/>
      <Projects/>
      <Clients/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default LandingPage;