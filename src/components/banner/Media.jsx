import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
import { FaReact, FaBootstrap, FaCss3, FaHtml5 } from 'react-icons/fa';
import { Link } from "react-scroll";
import { navLinksdata } from '../../constants/index.js';


const Media = () => {
  return (
    <div className="flex  justify-end ">
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4 ">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div> */}
        <div  >
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
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
      </div>
  )
}

export default Media