import React, { useState, useEffect } from "react";

const Second = () => {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    setisLoaded(true);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen w-full font-sans uppercase gap-5 text-white transition-all duration-4000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    ></div>
  );
};

export default Second;
