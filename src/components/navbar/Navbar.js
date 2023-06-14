import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import {  cropped } from "../../assets/index"
import { navLinksdata } from '../../constants';
import { logo } from "../../assets/index"

const Navbar = () => {
  
  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <div className="w-full h-15 sticky top-0 z-50 bg-black mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img className="w-[50%] ml-20 rounded-full" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10 mr-4">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer mr-10"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={cropped} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  "I design and code beautifully simple web applications that deliver seamless user experiences and drive business success. With a deep passion for web development and a constant drive to stay up-to-date with the latest technologies"
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
          <span className="bannerIcon">
            <a href ="https://github.com/Mesafin" target='_blank'><FaGithub /></a>
          </span>
          <span className="bannerIcon">
            <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="mesafint-minwagaw23" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://et.linkedin.com/in/mesafint-minwagaw23?trk=profile-badge" target='_blank' ><FaLinkedinIn /></a></div>
          </span>
          <span className="bannerIcon">
            <a href="tel:0922710277"><FiPhone /></a>
          </span>
          <span className="bannerIcon">
            <a href="Mailto:mesafintminwagaw@gmail.com">< FiMail/></a>
          </span>
        </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar