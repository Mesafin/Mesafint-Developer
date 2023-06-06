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
        <div>
          {/* <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2> */}
          <div className="flex gap-4 ">
            {/* <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span> */}
            <a href={resume} blank download className=" text-3xl text-resumetext font-bold font-titleFont border-b border-b-blue" >Download Resume</a>
          </div>
        </div>
      </div>
  )
}

export default Media