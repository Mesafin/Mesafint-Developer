import React from 'react'
import { bgImage } from "../../assets/index.js";
import resume  from "../../assets/resume/myResume.pdf"


const RightBanner = () => {
  return (
    <div className="w-[60%] sm:mx-auto pt-10">
      <img
        className="w-[200px] h-[200px] mx-auto rounded-full lgl:w-[400px] lgl:h-[400px] z-10"
        src={bgImage} 
        alt="bannerImg"
      />
      <div className="flex  justify-center mx-auto items-center  ">
            <a href={resume} target='_blank' download className="my-8 text-base lg:text-3xl text-resumetext font-bold font-titleFont border-b-[2px] border-b-resumetext" >Download Resume</a> 
        </div>
    </div>
  );
}

export default RightBanner