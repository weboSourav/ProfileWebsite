import React from 'react'

const Navbar = ({ isDark, toggleTheme }) => {
  return (
    


<nav className={`flex justify-around items-center p-2 font-serif ${isDark ? 'text-white' : 'text-black'}`}>

<a href="http://">Home</a>
<a href="http://">Xplore More</a>
<a href="http://">About</a>
<a href="http://">Contact</a>
<button onClick={toggleTheme}>{isDark ? '☀️' : '🌙'}</button>




</nav>

  )



}

export default Navbar