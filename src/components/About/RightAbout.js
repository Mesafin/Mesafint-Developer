import React from 'react'
import { bgImage } from "../../assets/index.js";
import resume  from "../../assets/resume/mesafintMinwagaw.pdf"


const RightBanner = () => {
  return (
    <div className="w-[50%] sm:mx-auto pt-8">
      <img
        className="w-[200px] h-[200px] mx-auto rounded-full lgl:w-[400px] lgl:h-[400px] z-10"
        src={bgImage} 
        alt="bannerImg"
      />
      <div className="flex  justify-start  ">
            <a href={resume} blank download className="pt-8 text-base lg:text-3xl text-resumetext font-bold font-titleFont border-b border-b-blue" >Download Resume</a> 
        </div>
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
}

export default RightBanner