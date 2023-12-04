// Variables.js

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light'); // 'light' or 'dark', depending on your default mode

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  const theme = {
    mode,
    toggleMode,
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

// export const useLogged = () => {
//   const [logged, setLogged] = useState(false);

//   const updateLogged = (value) => {
//     setLogged((prevLogged) => {
//       console.log("val of logged before state update: " + prevLogged);
//       return value;
//     });
//   };

//   console.log("val of logged after updateLogged(): " + logged);

//   return { logged, updateLogged };
// };
