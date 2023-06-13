import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import resume  from "../../assets/resume/mesafintMinwagaw.pdf"

const LeftBanner = () => {
    
  return (
    <div className="w-full flex flex-col gap-20 max-w-screen-xl ">
      <div className="flex flex-col gap-5 ">
      
        <h1 className='text-3xl text-resumetext font-bold font-titleFont' >About Me</h1>
        <p className="  w-full px-5 font-bodyFont  pt-10 leading-6 tracking-wide">
          <p>
            I'm an enthusiastic and committed Full Stack Web Developer based in Ethiopia. I have the knowledge and abilities to create fantastic and eye-catching websites.

          I'm Detail-orientated Web developer skilled in picking up new procedures, tools, and technology rapidly. 

          </p>
          <p>
            "I design and code beautifully simple web applications that deliver seamless user experiences and drive business success. With a deep passion for web development and a constant drive to stay up-to-date with the latest technologies, I am dedicated to creating innovative solutions that exceed client expectations"
          </p>

          
        </p>
      </div>
      
    </div>
  );
}

export default LeftBanner