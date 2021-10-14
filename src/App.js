import About from "./Components/About";
import Clan from "./Components/Clan";
import Clock from "./Components/Clock";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Roadmap from "./Components/Roadmap";
import Story from "./Components/Story";
import Team from "./Components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Story />
      <Clan />
      <Roadmap />
      <Team />
      <Clock />
      <Footer />
    </>
  );
}

export default App;
