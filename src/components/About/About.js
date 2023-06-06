import React from 'react'
import LeftAbout from './LeftAbout';
import RightAbout from './RightAbout';
import "./About.css"
const Banner = () => {
  return (
    <section
      id="About"
      className="AboutBg-image w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      
      <LeftAbout />
     <RightAbout />
    </section>
  );
}

export default Banner