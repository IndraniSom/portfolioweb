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
      <div className='relative w-full max-h-screen font-poppins '>
     
        
         <div className="bg-background bg-grid-black/[0.2]">
         <Navbar/>
          <Home id="home" />
        
        <About id="about"/>
        <Project id="project"/>
        
        <div className='relative z-0 bottom-0 '>
          <Contact id="contact"/>
          <Footer />
        </div> 
        </div>
      </div>
    </BrowserRouter>

   );
};

export default App;
