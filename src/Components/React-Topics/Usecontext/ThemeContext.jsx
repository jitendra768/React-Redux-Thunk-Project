/* eslint-disable react/prop-types */
// Context provides a way to pass data through the component tree without having to pass props down manually at every level.

// Create a Context: Use React.createContext to create a context.

// Provide a Value: Use a Context.Provider to provide a value to the context.

// Consume the Value: Use useContext to access the value in a child component.

import { createContext, useContext, useState } from "react";

const themeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevtheme) => (prevtheme === "ligth" ? "dark" : "light"));
  };
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export function ThemeButton() {
  const { theme, toggleTheme } = useContext(themeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Toggle Theme
    </button>
  );
}
