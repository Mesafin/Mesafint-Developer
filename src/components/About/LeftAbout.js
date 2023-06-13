import React from 'react'
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

const LeftBanner = () => {
    
  return (
    <div className="w-full flex flex-col gap-20 max-w-screen-xl px-10">
      <div className="flex flex-col gap-6 text-justify pb-20 ">
      
        <h1 className='text-3xl text-resumetext font-bold font-titleFont' >About Me</h1>
          <p className="  w-full font-bodyFont leading-6 tracking-wide">
            I'm an enthusiastic and committed Full Stack Web Developer based in Ethiopia. I have the knowledge and abilities to create fantastic and eye-catching websites. I'm Detail-orientated Web developer skilled in picking up new procedures, tools, and technology rapidly. 

          </p>
          <p className="sml:hidden w-full font-bodyFont leading-6 tracking-wide">
            With over three years of experience as a production planning engineer, I have embarked on an exciting journey to merge my engineering skills with my passion for technology, Web devlopment, and artificial intelligence. As a dedicated and experienced web developer, I am driven by a deep curiosity and fascination for the ever-evolving world of technology. Combining my engineering background with web development allows me to approach projects with a unique perspective. My analytical mindset and problem-solving abilities enable me to tackle complex challenges and develop robust solutions.
          </p>
          <p className=" w-full font-bodyFont leading-6 tracking-wide">
            I design and code beautifully simple web applications that deliver seamless user experiences and drive business success. I am dedicated to creating innovative solutions that exceed client expectations.
          </p>

          <p className=" w-full font-bodyFont leading-6 tracking-wide">
            In summary, my journey as a full-stack web developer integrates my engineering skills, passion for technology, and fascination with artificial intelligence. I am committed to pushing the boundaries of what is possible, delivering exceptional web solutions, and leaving a positive impact on the world through my work.
            
          </p>
          <p className=" w-full font-bodyFont">
            Addis Ababa, ETHIOPIA
          </p>
          <div className=" w-full flex gap-6 text-blue-500 items-end">
            <a href="https://www.linkedin.com/in/mesafint-minwagaw23/" target='_blank'><FaLinkedinIn/></a>
            <a href="https://github.com/Mesafin" target='_blank'><FaGithub/></a>
            <a href="Mailto:mesafintminwagaw@gmail.com" target='_blank'><FiMail/></a>
          </div>

      </div>
      
    </div>
  );
}

export default LeftBanner