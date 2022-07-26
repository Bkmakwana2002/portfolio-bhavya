import Navbar from "./components/Navbar"
import Home from './components/Home'
import SocialLinks from "./components/SocialLinks";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <TechStack />
      <Contact/>
      <Footer/>
      <SocialLinks />
    </div>
  );
}

export default App;
