import Navbar from "./components/molecules/Navbar/Navbar";
import Hero from "./components/organisms/Hero/Hero";
import Services from "./components/organisms/Services/Services";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
};

export default App;
