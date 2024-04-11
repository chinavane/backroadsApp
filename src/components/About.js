import React from "react";
import AboutImg from "../images/about.jpeg";
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="关于我们" subTitle="的故事" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={AboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>体验与众不同</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">
            了解更多
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
