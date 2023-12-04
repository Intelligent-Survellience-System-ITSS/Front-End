import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light'); // 'light' or 'dark', depending on your default mode

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = {
    mode,
    toggleMode,
    // Add other theme-related properties or functions as needed
  };

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
