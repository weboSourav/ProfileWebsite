import React, { useState, useEffect } from "react";

const First = ({ isDark }) => {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    setisLoaded(true);
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen w-full font-sans gap-10 ${
        isDark ? "text-white" : "text-black"
      } m-5 p-3`}
    >
      <div
        className={`absolute top-[25%] transition-all duration-4000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-3xl font-bold uppercase ">Hello i'm Sourav!</h1>
        <p>
          I'm a web developer with a passion for creating beautiful and
          functional user experiences.
        </p>
      </div>

      <div
        className={`absolute bottom-7 w-80 max-h-80  p-6 m-10 text-zinc-400 overflow-scroll no-scrollbar transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0 "
        }
        `}
      >
        <div
          className={`animate-scroll ${isDark ? "text-white" : "text-black"}`}
        >
          <p className="mb-6">
            I am a passionate and motivated developer eager to start my
            professional journey in the tech industry. With a strong foundation
            in JavaScript, React, and modern web development practices, I enjoy
            building interactive and user-friendly applications. Alongside my
            learning in Data Structures & Algorithms, I focus on writing clean,
            efficient, and scalable code. As a fresher, I bring curiosity,
            dedication, and a willingness to adapt quickly to new technologies.
            I am excited to contribute to real-world projects, collaborate with
            teams, and continuously grow as a developer.
          </p>
          <p>
            I am a passionate and motivated developer eager to start my
            professional journey in the tech industry. With a strong foundation
            in JavaScript, React, and modern web development practices, I enjoy
            building interactive and user-friendly applications. Alongside my
            learning in Data Structures & Algorithms, I focus on writing clean,
            efficient, and scalable code. As a fresher, I bring curiosity,
            dedication, and a willingness to adapt quickly to new technologies.
            I am excited to contribute to real-world projects, collaborate with
            teams, and continuously grow as a developer.
          </p>
        </div>
      </div>

      <style jsx>
        {`
          @keyframes scroll {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default First;
