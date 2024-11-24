import React from "react";
import { Link } from "react-scroll";
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="bg-gradient text-white shadow-lg md:sticky top-0 z-10 navbar-border">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <span className="title-font font-bold text-white mb-4 md:mb-0 text-xl">
          My Portfolio
        </span>
        <nav className="md:ml-auto flex flex-wrap items-center text-base">
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="nav-item glow-effect cursor-pointer"
          >
            About Me
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="nav-item glow-effect cursor-pointer"
          >
            Projects
          </Link>
          <Link 
            to="resume" 
            smooth={true} 
            duration={500} 
            className="nav-item glow-effect cursor-pointer"
          >
            Resume
          </Link>
          <Link 
            to="contacts" 
            smooth={true} 
            duration={500} 
            className="nav-item glow-effect cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
