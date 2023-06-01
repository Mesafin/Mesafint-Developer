import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-10 border-b-[1px] border-b-black"
    >
      <Title title="" des="What I Do" />
      {/* <p className="text-base text-white font-bodyFont pb-10 leading-6 tracking-wide">
          "I design and code beautifully simple web applications that deliver seamless user experiences and drive business success."
          <br /><br /> "With a deep passion for web development and a constant drive to stay up-to-date with the latest technologies."<br /> <br /> 
          "I am dedicated to creating innovative solutions that exceed client expectations"
        </p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
