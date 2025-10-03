import React from "react";
import First from "./First";
import Second from "./Second";
import Navbar from "./Navbar";
import { useState } from "react";
function App() {
  const [isDark,setisDark] = useState(true);

const toggleTheme = () => {
  setisDark(!isDark);
};

  return (
    <div className={`text-white bg-cover bg-opacity-[-100] bg-center min-h-screen w-full transition-colors duration-500 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
     
      <First isDark={isDark} />
      <Second isDark={isDark} />

</div>


  );
}
export default App;