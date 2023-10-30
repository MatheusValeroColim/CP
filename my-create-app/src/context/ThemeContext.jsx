import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const themeConfig = {
    light: {
      bodyBackground: '#fff',
      textColor: '#333',
      toggleBackground: '#333',
      toggleBackgroundHover: '#555',
      toggleColor: '#fff',

    },
    dark: {
      bodyBackground: '#333',
      textColor: '#fff',
      toggleBackground: '#fff',
      toggleBackgroundHover: '#eee',
      toggleColor: '#333',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themeConfig[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
