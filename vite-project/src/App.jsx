import Navbar from "./components/molecules/Navbar/Navbar";
import AboutUs from "./components/organisms/AboutUs/AboutUs";
import Alcaline from "./components/organisms/Alcaline/Alcaline";
import CaseStudies from "./components/organisms/CaseStudies/CaseStudies";
import Development from "./components/organisms/Development/Development";
import GreatSoftware from "./components/organisms/GreatSoftware/GreatSoftware";
import Hero from "./components/organisms/Hero/Hero";
import OurClients from "./components/organisms/OurClients/OurClients";
import OurCustomers from "./components/organisms/OurCustomers/OurCustomers";
import Services from "./components/organisms/Services/Services";
import TechStack from "./components/organisms/TechStack/TechStack";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <OurClients />
      <OurCustomers />
      <CaseStudies />
      <GreatSoftware />
      <Development />
      <TechStack />
      <Alcaline />
    </div>
  );
};

export default App;
