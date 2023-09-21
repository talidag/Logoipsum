import Navbar from "./components/molecules/Navbar/Navbar";
import AboutUs from "./components/organisms/AboutUs/AboutUs";
import Hero from "./components/organisms/Hero/Hero";
import OurClients from "./components/organisms/OurClients/OurClients";
import Services from "./components/organisms/Services/Services";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <OurClients />
    </div>
  );
};

export default App;
