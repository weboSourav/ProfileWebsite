import React from "react";

const Third = ({ isDark }) => {
  return (
    <div
      className={` h-screen w-full flex ${
        isDark ? "bg-black text-white " : "bg-white text-black"
      }`}
    >

<div className="flex overflow-x-auto whitespace-nowrap space-x-0">

      <div className={`h-52 w-72 p-3 m-5 border-2 border-blue-500 ${isDark ? "bg-white text-black" : "bg-black text-white"} border-none rounded-2xl`}>
        <p>hello i am a software engineer</p>
      </div>
      <div className={` h-52 w-72 p-3 m-5 border-2 border-blue-500 ${isDark ? "bg-white text-black" : "bg-black text-white"} border-none rounded-2xl`}>
        <p>hello i am a software engineer</p>
      </div>

      <div className={` h-52 w-72 p-3 m-5 border-2 border-blue-500 ${isDark ? "bg-white text-black" : "bg-black text-white"} border-none rounded-2xl`}>
        <p>hello i am a software engineer</p>
      </div>

      <div className={` h-52 w-72 p-3 m-5 border-2 border-blue-500 ${isDark ? "bg-white text-black" : "bg-black text-white"} border-none rounded-2xl`}>
        <p>hello i am a software engineer</p>
      </div>

      <div className={` h-52 w-72 p-3 m-5 border-2 border-blue-500 ${isDark ? "bg-white text-black" : "bg-black text-white"} border-none rounded-2xl`}>
        <p>hello i am a software engineer</p>
      </div>

      <div className={` h-52 w-72 p-3 m-5 border-2 border-blue-500 ${isDark ? "bg-white text-black" : "bg-black text-white"} border-none rounded-2xl`}>
        <p>hello i am a software engineer</p>
      </div>

      <div className={` h-52 w-72 p-3 m-5 border-2 border-blue-500 ${isDark ? "bg-white text-black" : "bg-black text-white"} border-none rounded-2xl`}>
        <p>hello i am a software engineer</p>
      </div>
       <div className={` h-52 w-72 p-3 m-5 border-2 border-blue-500 ${isDark ? "bg-white text-black" : "bg-black text-white"} border-none rounded-2xl`}>
        <p>hello i am a software engineer</p>
      </div>

</div>

    </div>
  );
};

export default Third;
