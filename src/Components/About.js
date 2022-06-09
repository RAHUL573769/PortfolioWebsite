import React from "react";
import image2 from "../Images/About.JPG";

const About = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={image2} />
          <div>
            <h1 class="text-5xl font-bold">About Me</h1>
            <p class="py-6">
              I am a passionate web developer who wants to know about new
              Technologies
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
