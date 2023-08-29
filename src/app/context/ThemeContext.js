'use client';

const { createContext, useState } = require('react');

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');
  function handleMode() {
    setMode((PreviousMode) => {
      return PreviousMode === 'light' ? 'dark' : 'light';
    });
  }
  return (
    <ThemeContext.Provider value={{ mode, handleMode }}>
      <div className={mode}>
        <div className="container mx-auto min-h-screen">{children}</div>
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
