import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
import Project from "./containers/project";
import Navbar from "./component/navBar";
import particles from "./utils.js/particles";
import Footer from "./containers/contact/footer";


function App() {
  const location = useLocation();
  console.log(location);
  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderparticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js*/}
      {renderparticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
      <Navbar />
  
      {/* main page content */}
      <div className="App_main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
      
      </Routes>
      <Footer/>

     </div>
   </div>
  );
}

export default App;
