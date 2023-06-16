import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className=" lgl:pt-5 font-titleFont flex flex-col gap-4">
        </div>
        <div className="mt-1 lgl:mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Developer | Remote "
            subTitle="Miracle IT Consulting, Oakville."
            result="Sep 2019 - Dec 2022"
            des="Collaborated with a team of developers to build and maintain responsive web applications.
                Assisted in front-end development tasks, utilizing HTML, CSS, and JavaScript to create visually appealing and interactive user interfaces.
                Gained experience in implementing front-end frameworks like React to enhance the user experience and improve overall site performance.
                Assisted in back-end development using Node.js and PHP to build robust and scalable server-side systems.
                Worked with databases such as MySQL to manage and store data efficiently.
                Participated in Agile development practices, including daily stand-ups and code reviews.
                Assisted in testing and debugging to identify and resolve issues, ensuring high-quality code.
                Demonstrated strong teamwork and communication skills while collaborating with colleagues and stakeholders."
          />
          <ResumeCard
            title="Freelance Front End Web Developer"
            subTitle="Via Upwork"
            des="Collaborated directly with clients to understand their requirements and deliver customized web solutions. Developed responsive and visually appealing websites using HTML, CSS, and JavaScript. Implemented front-end frameworks Bootstrap and React to enhance the user interface and improve user experience.Communicated effectively with clients to address their needs, provide progress updates, and deliver projects on time. Managed multiple projects simultaneously, demonstrating strong organizational and time management skills. Leveraged problem-solving abilities to troubleshoot and resolve technical issues as they arose. Continuously improved skills and expanded knowledge base to stay up-to-date with industry trends and technologies. "
            result="Jan 2021 - Present"
          />
          
          <ResumeCard
            title="Production Plan and Control Engineer"
            subTitle="AMIMTDE kombolcha, Ethiopia"
            des=" Planned and Controlled 10 different production Projects. Managed 6 Projects collaborated with the Project Executive team. Collaborated with peers to estimate the cost of the project before implementation.  Changed way of Manufacturing by Selective Production Method to minimize item production time. Skillfully Empowered 60 technicians to operate and generate CNC Codes.    "
            result="September 2019 - Jan 2023"
          />

        </div>
      </div>
  
    </motion.div>
  );
};

export default Experience;
