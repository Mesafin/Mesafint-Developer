import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaReact, FaBootstrap, FaCss3, FaHtml5 } from 'react-icons/fa';
import { Link } from "react-scroll";
import { navLinksdata } from '../../constants/index.js';
import resume  from "../../assets/resume/mesafintMinwagaw.pdf"

const Media = () => {
  return (
    <div className="flex  justify-start  ">
            <a href={resume} blank download className=" text-base lg:text-3xl text-orange-300 font-bold font-titleFont border-b border-b-blue" >Download Resume</a> 
        </div>

  )
}

export default Media