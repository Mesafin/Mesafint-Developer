import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    // const [text] = useTypewriter({
    //   words: ["Full Stack Web Developer."],
    //   loop: true,
    //   typeSpeed: 10,
    //   deleteSpeed: 10,
    //   delaySpeed: 2000,
    // });
  return (
    <div className="w-full flex flex-col gap-20 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal pt-15 justify-end ">WELCOME TO MY WORLD</h4>
        <h1 className="text-4xl font-bold text-white pt-10 pb-10">
          Hello, I'm 
          <br />
          <span className="text-6xl text-designColor capitalize">Mesafint Minwagaw</span>
        </h1>
        <h2 className="text-4xl font-bold text-white h-[110px] "> */}
          {/* a passionate <span>{text}</span> */}
          {/* <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          /> */}
        {/* </h2> */}
        {/* <p className=" text-2xl font-light font-bodyFont leading-6 tracking-wide">
          specializing in the MERN stack
        </p> */}
        <p className="text-base text-white w-[60%] text-center font-bodyFont pt-20 leading-6 tracking-wide">
          "I design and code beautifully simple web applications that deliver seamless user experiences and drive business success. With a deep passion for web development and a constant drive to stay up-to-date with the latest technologies, I am dedicated to creating innovative solutions that exceed client expectations"
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner