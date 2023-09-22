import Navbar from "./components/molecules/Navbar/Navbar";
import AboutUs from "./components/organisms/AboutUs/AboutUs";
import CaseStudies from "./components/organisms/CaseStudies/CaseStudies";
import Hero from "./components/organisms/Hero/Hero";
import OurClients from "./components/organisms/OurClients/OurClients";
import OurCustomers from "./components/organisms/OurCustomers/OurCustomers";
import Services from "./components/organisms/Services/Services";

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
    </div>
  );
};

export default App;
