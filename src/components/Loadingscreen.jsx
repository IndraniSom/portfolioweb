import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export function LoadingScreen() {
  // State to hold the loading percentage
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const progressBar = document.getElementById('progressBar');

    gsap.to(progressBar, {
      width: '100%',
      duration: 1, // Duration of 2 seconds
      ease: 'linear',
      onUpdate: () => {
        // Calculate the current progress
        const progress = Math.round(gsap.getProperty(progressBar, 'width') / gsap.getProperty(progressBar.parentNode, 'width') * 100);
        // Update state with the new loading percentage
        setLoadingPercentage(progress);
      }
    });
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-background dark:bg-blackbg bg-grid-black/[0.2]  dark:bg-dot-black-500/[0.3]">
      <div  className="mt-5 text-4xl md:text-9xl font-extrabold text-black">Are you ready?💡 </div>
      {/* <img src='/preloader.png' className='w-1/2 h-1/2 object-contain' alt='preloader' /> */}
      {/* Display the dynamic loading percentage */}
      <div id="loadingText" className="mt-5 text-7xl md:text-9xl font-extrabold text-black">{loadingPercentage}%</div>
      <div className="w-4/5 bg-gray-300 rounded overflow-hidden">
        <div id="progressBar" className="h-5 w-0 bg-green"></div>
      </div>
    </div>
  );
}
