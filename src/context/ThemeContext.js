import { createContext } from "react";

export const themeContext = createContext();

export function ThemeProvider({ children }) {
  return (
    <themeContext.Provider value={{ color: "blue" }}>
      {children}
    </themeContext.Provider>
  );
}
