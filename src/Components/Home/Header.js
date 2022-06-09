import React from "react";
import { Link } from "react-router-dom";
import img from "../../Images/ProfilePic.JPG";
import About from "../About";
import ContactUs from "./ContactUs";
import HomeName from "./HomeName";
import Projects from "./Projects";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link to={<HomeName></HomeName>}>Home</Link>
      </li>
      <li>
        <Link to={<About></About>}>About </Link>
      </li>
      <li>
        <Link to={<Projects></Projects>}>Projects </Link>
      </li>
      <li>
        <Link to={<ContactUs></ContactUs>}>Contact Us </Link>
      </li>
    </>
  );
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">Rahul's Portfolio</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div class="navbar-end">
          <a class="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
