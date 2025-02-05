import { createContext, useState } from "react";
import Router from "./router";

const ThemeContext = createContext("light");
function App() {
  const [theme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme }}>
      <Router />
    </ThemeContext.Provider>
  );
}

export default App;
