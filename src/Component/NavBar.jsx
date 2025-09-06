import React from "react";
import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center py-6 mb-20 ">
      <div className="pt-4  ">
        <img src={logo} alt="logoimage" className="w-14" />
      </div>
      <div className="flex justify-center items-center gap-4 px-10 text-2xl  ">
        <FaLinkedin />
        <FaGithub/>
        <FaInstagram/>
      </div>
    </nav>
  );
};

export default NavBar;
