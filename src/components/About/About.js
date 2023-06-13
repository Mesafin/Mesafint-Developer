import React from 'react'
import LeftAbout from './LeftAbout';
import RightAbout from './RightAbout';

const About = () => {
  return (
    <section
      id="About"
      className="w-full py-6 lg:px-20 flex flex-col gap-30 xl:gap-30 lgl:flex-row items-center border-b-[1px]  font-titleFont border-b-blue-200"
    >
     <LeftAbout />
     <RightAbout />
    </section>
  );
}

export default About