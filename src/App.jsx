import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import {LoadingScreen} from "./components/Loadingscreen"; // Import the LoadingScreen component
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate a loading process, e.g., fetching data or waiting for animations
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after a delay
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return <LoadingScreen />; // Display the loading screen while loading
  }

  return (
    <BrowserRouter>
      <div className='relative w-full max-h-screen font-poppins '>
     
        
         <div className="bg-background dark:bg-blackbg bg-grid-black/[0.2] dark:bg-dot-black-500/[0.3]">
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