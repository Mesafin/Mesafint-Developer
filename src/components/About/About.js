import React from 'react'
import LeftAbout from './LeftAbout';
import RightAbout from './RightAbout';
import "./About.css"
const Banner = () => {
  return (
    <section
      id="About"
      className="AboutBg-image w-[80%] pt-10 pb-20 flex flex-col gap-30 xl:gap-20 lgl:flex-row items-center mx-auto border-b-[1px] font-titleFont border-b-black"
    >
      
      <LeftAbout />
     <RightAbout />
    </section>
  );
}

export default Banner