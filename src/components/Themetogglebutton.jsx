import React from 'react';

const Themetogglebutton = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex items-center justify-center transition-all duration-300">
      <div
        className={`relative w-12 h-6 md:w-24 md:h-12 bg-gradient-to-r ${darkMode ? 'bg-darkswitch bg-cover bg-no-repeat' : 'bg-lightswitch bg-no-repeat bg-cover'} rounded-full shadow-md p-1 cursor-pointer`}
        onClick={toggleTheme}
      >
        <div
          className={`absolute top-0.5 md:top-1 w-5 h-5 md:w-10 md:h-10 ${darkMode ? 'bg-moonswitch bg-cover bg-no-repeat' : 'bg-sunswitch bg-no-repeat bg-cover'}  rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
            darkMode ? 'translate-x-5 md:translate-x-12' : 'translate-x-0'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Themetogglebutton;
