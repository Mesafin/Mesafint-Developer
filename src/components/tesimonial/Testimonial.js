import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { testimonialOne,testimonialTwo, testimonialThree } from "../../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12  bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "2px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "5px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="testimonial"
      className="w-full my-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-52 w-52 rounded-full mx-auto object-cover"
                  src={testimonialTwo}
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Silver spring, MD
                  </p>
                  <h3 className="text-2xl font-bold">ADUGNA BEKELE</h3>
                  <p className="text-base tracking-wide text-gray-500">
                   Evangadi Inc - Founder
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Evangadi Forum 
                      </h3>
                      <p className="text-base text-gray-400 my-3 text-center">
                           Jan 2023
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                      
                  "Mesafint Minwagaw is an exceptional full stack web developer. His attention to detail, problem-solving skills, and commitment to delivering high-quality work make them a valuable asset to any project".
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* ================ Slider Two ================== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-[50%] lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-52 w-52 rounded-full mx-auto object-fill "
                  src={testimonialThree}
                  alt="testimonialThree"
                />
                <div className="w-full flex flex-col justify-end">
                  
                  <h3 className="text-2xl font-bold"> SOSINA YASIN</h3>
                  <p className="text-base tracking-wide text-gray-500">
                     Senior Web Developer @ Miracle LLC
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[50%] py-5 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                         Educational Website .
                      </h3>
                      <p className="text-base text-gray-400 my-1 text-center">
                        via Upwork - Dec 2023 
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    "Working alongside Mesafint Minwagaw has been an absolute pleasure. His expertise in React and full stack development is truly remarkable. He has a deep understanding of the React ecosystem and consistently delivers high-quality code. His collaborative nature and strong communication skills make him a valuable team member, always ready to lend a helping hand and share knowledge. Mesafint's dedication to delivering high-quality, scalable React applications is truly inspiring, and I feel fortunate to have had the opportunity to collaborate with such a talented developer."
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* ================ Slider Three ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-52 w-52 rounded-full mx-auto object-fill"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    kansas
                  </p>
                  <h3 className="text-2xl font-bold">ADANEW DABA</h3>
                  <p className="text-base tracking-wide text-gray-500 ">
                    Marketing Manager
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        E-Commerce website 
                      </h3>
                      <p className="text-base text-gray-400 my-3 text-center">
                         Feb 2023
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    "I had the opportunity to hire Mesafint Minwagaw as a React developer, and I couldn't be happier with their contributions to our team. Their deep knowledge of React, coupled with their full stack expertise, allowed us to develop robust and scalable web applications. Mesafint Minwagaw consistently delivered high-quality code on time, showcasing their strong problem-solving skills. Their dedication and passion for web development are truly commendable. I highly recommend Mesafint Minwagaw for any React-based projects."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial