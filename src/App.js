import React from "react";
import Banner from "./components/banner/Banner";
import About from "./components/About/About"
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/tesimonial/Testimonial";
import SocialLinks from "./components/socialLinks/SocialLinks";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
        <Navbar />
        <Banner />
        <About />
      <div className="max-w-screen-xl mx-auto">
        <Features />
        <Projects />
        {/* <Resume />
        <Testimonial /> */}
        <Contact />
        <SocialLinks />
      </div>
        <Footer />
 </div>
  );
}

export default App;
