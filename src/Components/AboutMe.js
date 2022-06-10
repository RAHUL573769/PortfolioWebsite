import React from "react";
import img from "../Images/ProfilePic.JPG";

const AboutMe = () => {
  return (
    <div>
      {/* <h1 class="text-5xl font-bold text-center">Hi My Name is Rahul Rudra</h1>
      <p>
        I am an entusiatic web-developer.Currently I am working in MERN Stack
        Technology.I am interested in learning new technologies.I am a quick
        learner
          </p>
          <img src="" alt="" /> */}

      <div class="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title"> My Personal Info</h2>
          <p>
            {" "}
            I am an entusiatic web-developer.Currently I am working in MERN
            Stack Technology.I am interested in learning new technologies.I am a
            quick learner
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
