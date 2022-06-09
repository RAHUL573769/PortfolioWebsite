import React from "react";
import "./HomeName.css";
import img from "../../Images/ProfilePic.JPG";

const HomeName = () => {
  return (
    <div>
      <section>
        <div class="hero min-h-screen bg-base-200">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div>
              <img className="rounded-full" src={img} alt="" />
            </div>
            <div>
              <h1 className="text-3xl text-center">
                Hi There!!!
                <br />
                <span className="partcolor text-3xl text-center">
                  My Name is Rahul Rudra
                </span>
              </h1>

              <p className="text-3xl text-center">I am a Web Developer</p>

              <div className="text-center my-4">
                <button class="btn  btn-info">
                  <a href="https://drive.google.com/file/d/1LfMxjVM2YhIqLVd2g933edDg2-YtAY8g/view">
                    {" "}
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeName;
