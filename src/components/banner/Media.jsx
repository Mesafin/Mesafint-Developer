import React from 'react'
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaReact, FaBootstrap, FaCss3, FaHtml5 } from 'react-icons/fa';
import { Link } from "react-scroll";
import { navLinksdata } from '../../constants/index.js';


const Media = () => {
  return (
    <div className=" flex  justify-end pr-10">
          <div className="flex gap-4 mt-8 ">
            <h2 className=" uppercase text-xl font-titleFont my-4 mr-5">
            TECH STACK
          </h2>
            <span className="bannerIcon">
              <Link
                activeClass="active"
                to={navLinksdata[3].link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <FaReact />
              </Link>
              
            </span>
            <span className="bannerIcon">
              <Link
                activeClass="active"
                to={navLinksdata[2].link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <FaBootstrap />
              </Link>
              
            </span>
            <span className="bannerIcon">
              <Link
                activeClass="active"
                to={navLinksdata[2].link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <SiTailwindcss/>
              </Link>
              
            </span>
            <span className="bannerIcon">
              <Link
                activeClass="active"
                to={navLinksdata[2].link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <FaCss3 />
              </Link>
            </span>
            <span className="bannerIcon">
              <Link
                activeClass="active"
                to={navLinksdata[2].link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <FaHtml5 />
              </Link>
            </span>
          </div>
        
      </div>
  )
}

export default Media