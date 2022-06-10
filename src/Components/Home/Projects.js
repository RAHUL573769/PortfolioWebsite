import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import carParts from "../../Images/carparts.JPG";
import laptop from "../../Images/laptop.JPG";
import photo from "../../Images/photography.JPG";

const Projects = () => {
  // const [navigate] = useNavigate();

  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const handleButton = (id) => {};
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    // <div>
    //   <h1 class=" text-center my-4 text-5xl font-bold">My Projects</h1>
    //   <div className="grid md:grid-cols-3  ">
    //     <div class="card w-96 bg-base-100 shadow-xl">
    //       <figure class="px-10 pt-10">
    //         <img src={carParts} alt="Shoes" class="rounded-xl" />
    //       </figure>
    //       <div class="card-body items-center text-center">
    //         <h2 class="card-title">Car Parts Inventory</h2>
    //         <p>
    //           My Car Parts Inventory Website.Here we sell different Car Parts
    //         </p>
    //         <div class="card-actions">
    //           <button class="btn btn-primary">
    //             <a href="https://assignment12-4f047.web.app/">
    //               Click to See Live Site{" "}
    //             </a>
    //           </button>
    //           {/* <button onClick={handle} class="btn btn-primary">Click To See More Details</button> */}
    //         </div>
    //       </div>
    //     </div>
    //     <div class="card w-96 bg-base-100 shadow-xl">
    //       <figure class="px-10 pt-10">
    //         <img src={laptop} alt="Shoes" class="rounded-xl" />
    //       </figure>
    //       <div class="card-body items-center text-center">
    //         <h2 class="card-title">Laptop Store</h2>
    //         <p>My Laptop Website</p>
    //         <div class="card-actions">
    //           <button class="btn btn-primary">
    //             <a href="https://assignment11-76d81.web.app/">
    //               Click To see Live Site
    //             </a>
    //           </button>
    //           <button class="btn btn-primary">Click To See More Details</button>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="card w-96 bg-base-100 shadow-xl">
    //       <figure class="px-10 pt-10">
    //         <img src={photo} alt="Shoes" class="rounded-xl" />
    //       </figure>
    //       <div class="card-body items-center text-center">
    //         <h2 class="card-title">Photo Graphic Website</h2>
    //         <p>My Photographic Website</p>
    //         <div class="card-actions">
    //           <button class="btn btn-primary">
    //             <a href="https://assignment10-7fbf3.web.app/">Live Site</a>
    //           </button>
    //           <button class="btn btn-primary">Click To See More Details</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="grid md:grid-cols-3  ">
      {projects.map((project) => (
        <div>
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={project.image} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{project.name}</h2>

              <div class="card-actions justify-end">
                <button
                  onClick={() => handleButton(project.id)}
                  class="btn btn-primary"
                >
                  Click To Know More Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
