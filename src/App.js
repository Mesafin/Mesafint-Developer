import React, { useEffect, useState } from "react";
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
import "./index.css"

function App() {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    
    <div>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading...</div>
        </div>
      ) : (
    <div className="w-full h-auto bg-bodyColor text-lightText">

        <Navbar />
        <Banner />
        <About />
      <div className="max-w-screen-xl mx-auto">
        <Features />
        <Projects />
        {/* <Resume /> */}
        <Testimonial />
        <Contact />
        <SocialLinks />
      </div>
        <Footer />
        </div>
        )}
 </div>
  );
}

export default App;
