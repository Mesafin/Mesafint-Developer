import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import "./banner.css"
const Banner = () => {
  return (
    <section
      id="home"
      className="bg-image w-full pt-10 pl-10 pb-20 flex flex-col  xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >
      
      <LeftBanner />
     {/* <RightBanner /> */}
    </section>
  );
}

export default Banner