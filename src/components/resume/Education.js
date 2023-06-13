import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className=" lgl:pt-5 font-titleFont flex flex-col gap-4">
        </div>
        <div className="mt-1 lgl:mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Certificate in Full stack web development "
            subTitle="Evangadi Networks"
            des="It provided me a comprehensive training in front-end and back-end web development, covering HTML, CSS, JavaScript, Node.js, React, Bootstrap, Node.js, Express, and MySql. It also gave me skills in WordPress, Shopify, Bash Scripting, GitHub, NPM, FTP Clients, and Photoshop. Gain expertise in building dynamic web applications, designing user interfaces, implementing functionality, managing databases, and deploying applications.."
          />
          <ResumeCard
            title="BSc in Mechanical Engineering"
            subTitle="University of Gondar, Ethiopia"
            des="It provided me a comprehensive training for diverse roles in the manufacturing industry. Gain expertise in designing, analyzing, and optimizing mechanical systems. It also gave me skills on designing softwares Solidworks, Mastercam, FastCam, AutoCad, and Catia. "
          />
          
          <ResumeCard
            title="Certificate in CNC lathe and milling machine operation and tool programming"
            subTitle="Kombolcha Polytechnic College Satellite Campus, Ethiopia"
            des="It provided me the specialized training in operating and programming CNC machines for precise lathe and milling operations. Gain hands-on experience in setup, tool selection, and programming to pursue careers in precision manufacturing industries."
          />
          <ResumeCard
            title="Certificate in Virtual Assisting Program"
            subTitle="African Leadership Group (ALX) "
            des="This program provided me a comprehensive training on various aspects of virtual assisting, including effective communication, project management, administrative tasks, and digital tools. Also It gaves me how to support businesses remotely, manage schedules, and handle client inquiries."
          />
        </div>
      </div>
      {/* part Two */}

      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google Out Tech - (2017 - Present)"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (2012 - 2016)"
            result="MALAYSIA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Nike - (2020 - 2011)"
            result="Oman"
            des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div> */}
    </motion.div>
  );
}

export default Education