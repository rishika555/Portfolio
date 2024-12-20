import React from "react";
import { Link } from "react-scroll";
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="bg-gradient shadow-lg md:sticky top-0 z-10">
      {/* Flex container */}
      <div className="container mx-auto flex items-center justify-between">        
        {/* Right-aligned navigation links */}
        <nav>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="nav-item glow-effect"
          >
            About Me
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500} 
            className="nav-item glow-effect"
          >
            Projects
          </Link>
          <Link 
            to="contacts" 
            smooth={true} 
            duration={500} 
            className="nav-item glow-effect"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
