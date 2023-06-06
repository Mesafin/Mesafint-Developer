import React from 'react'
import { bgImage } from "../../assets/index.js";

const RightBanner = () => {
  return (
    <div className="w-full flex justify-between items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[400px] z-10"
        src={bgImage}
        alt="bannerImg"
      />
      {/* <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div> */}
    </div>
  );
}

export default RightBanner