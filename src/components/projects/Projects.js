import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section id="projects" className="w-full border-b border-b-blue">
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Apple Page Clone"
          des="Experience the sleek and elegant design of the Apple website with this React clone project, showcasing my attention to detail and ability to replicate complex UI components."
          src={projectOne}
          linkGit="https://github.com/Mesafin/Apple-Page-developed-by-React"
          linkDeployed="https://apple-page-using-react-app.netlify.app/"
        />
        <ProjectsCard
          title="Amazon Clone - E-commerce Website"
          des="Explore a fully functional e-commerce website built with React, demonstrating my expertise in front-end development and integration with backend APIs."
          src={projectTwo}
          linkGit="https://github.com/Mesafin/Amazon-clone"
          linkDeployed="https://react-c2bf5.web.app/"
        />
        <ProjectsCard
          title="Netflix Clone"
          des="Immerse yourself in the world of entertainment with this React clone of Netflix, showcasing my ability to create visually appealing streaming platforms."
          src={projectThree}
          linkGit="https://github.com/Mesafin/netflix.com-clone"
          linkDeployed="https://netflix-clone-f0c27.firebaseapp.com/"
        />
        <ProjectsCard
          title="Evangdi Forum - Q&A Platform"
          des="Discover a Stack Overflow-inspired Q&A platform Built with React, this project allows users to ask and answer questions, fostering collaboration and learning."
          src={projectFour}
          linkGit="https://github.com/Mesafin/Evangadi-forum-FrontEnd"
          linkDeployed="https://95d4a41c.evangadi-forum-frontend-67r.pages.dev/"
        />
        <ProjectsCard
          title="Zoom Clone"
          des="Experience seamless video conferencing with this React clone of Zoom, showcasing my ability to develop real-time communication applications using WebRTC."
          src={projectFive}
          linkGit="https://github.com/Mesafin/zoomClone"
          linkDeployed="https://zoomapp.herokuapp.com/a93c1641-f86f-45a7-94a7-777b180d63ea"
        />
        <ProjectsCard
          title="Apple Page Clone using JavaScript"
          des="Recreate the classic Apple website design using vanilla JavaScript and Bootstrap, demonstrating my proficiency in front-end development and responsive web design."
          src={projectSix}
          linkGit="https://github.com/Mesafin/Apple-page-using-Bootstrap"
          linkDeployed="https://apple-using-vanilla-js-and-bootstrap.netlify.app/"
        />
      </div>
    </section>
  );
}


export default Projects