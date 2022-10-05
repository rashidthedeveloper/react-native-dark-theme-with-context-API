import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = React.useState(false);
  const toggle = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <ThemeContext.Provider value={{darkTheme, toggle}}>
      {children}
    </ThemeContext.Provider>
  );
};
