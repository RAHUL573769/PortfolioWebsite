import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ContactUs = () => {
  // const navigate = useNavigate();

  const handleClick = () => {
    <a href="https://formsubmit.co/el/pofoxe"></a>;
  };
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Contact Us</h1>
            <p class="py-6">Feel Free To Contact Me</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div>
                {/* <form action="https://formsubmit.co/el/pofoxe" method="POST">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    class="input input-bordered"
                  />
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    class="input input-bordered"
                  />
                  <label class="label">
                    <a href="#" class="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <div class=" mt-6">
                    <button class="btn btn-primary">Login</button>
                  </div>
                </form> */}

                <button>
                  <a href="https://formsubmit.co/el/pofoxe">Click</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
