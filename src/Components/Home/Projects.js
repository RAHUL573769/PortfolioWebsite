import React from "react";
import carParts from "../../Images/carparts.JPG";
import laptop from "../../Images/laptop.JPG";
import photo from "../../Images/photography.JPG";

const Projects = () => {
  return (
    <div>
      <h1 class=" text-center my-4 text-5xl font-bold">My Projects</h1>
      <div className="grid grid-cols-3">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={carParts} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Car Parts Inventory</h2>
            <p>My Car Parts Inventory Website</p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={laptop} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Laptop Store</h2>
            <p>My Laptop Website</p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={photo} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Photo Graphic Website</h2>
            <p>My Photographic Website</p>
            <div class="card-actions">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
