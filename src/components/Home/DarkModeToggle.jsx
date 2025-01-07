// import React, { useState, useEffect } from 'react';
// import { FaRegMoon } from 'react-icons/fa';
// import { FiSun } from 'react-icons/fi';

// const DarkModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(true);

//   useEffect(() => {
//     const storedMode = localStorage.getItem('darkMode');
//     if (storedMode) {
//       setDarkMode(JSON.parse(storedMode));
//     }
//   }, []);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add('dark-mode');
//       document.body.classList.remove('light-mode');
//     } else {
//       document.body.classList.add('light-mode');
//       document.body.classList.remove('dark-mode');
//     }
//     localStorage.setItem('darkMode', JSON.stringify(darkMode));
//   }, [darkMode]);

//   return (
//     <div>
//       <button onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? <FiSun className='text-black text-2xl' /> : <FaRegMoon className='text-black text-xl'/>}
//       </button>
//     </div>
//   );
// };

// export default DarkModeToggle;



import React, { createContext, useContext, useState, useEffect } from 'react';
import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

// Create ThemeContext
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setDarkMode(JSON.parse(storedMode));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const DarkModeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>
        {darkMode ? (
          <FiSun className={`${darkMode == true ? "text-white" : "text-black"}  text-2xl`} />
        ) : (
          <FaRegMoon className={`${darkMode == true ? "text-white" : "text-black"}  text-xl`} />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
