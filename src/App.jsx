import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

 const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
      <Navbar />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
         
          <Home />
        </div>
        <About id="about"/>
        <Project id="project"/>
        
        <div className='relative z-0 ite'>
          <Contact id="contact"/>
          <Footer />
        </div>
      </div>
    </BrowserRouter>

   );
};

export default App;
