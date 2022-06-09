import React from "react";
import "./HomeName.css";
import img from "../../Images/ProfilePic.JPG";

const HomeName = () => {
  return (
    <div>
      <section>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <h1 className="text-3xl text-center">
              Hi There!!!
              <br />
              <span className="partcolor text-3xl text-center">
                My Name is Rahul Rudra
              </span>
            </h1>

            <p className="text-3xl text-center">I am a Web Developer</p>
          </div>
          <div>
            <img className="rounded-full" src={img} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeName;
