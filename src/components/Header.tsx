"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "contact"];
      const scrollY = window.scrollY + 100; // offset to trigger earlier

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (id: string) =>
    `hover:text-white hover:bg-[#242a31] rounded-md p-2 transition ${
      activeSection === id ? "text-white bg-[#242a31] p-2" : ""
    }`;

  return (
    <header className="fixed top-0 w-full bg-white text-[#242a31] shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img 
            src="/img/donilogo.png" 
            alt="logo" 
            className="w-[30px] h-[30px] object-contain"
          />
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          <a href="#about" className={navLinkClass("about")}>About</a>
          <a href="#experience" className={navLinkClass("experience")}>Experience</a>
          <a href="#projects" className={navLinkClass("projects")}>Projects</a>
          <a href="#contact" className={navLinkClass("contact")}>Contact</a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-2">
            <a href="#about" className={navLinkClass("about")}>About</a>
            <a href="#experience" className={navLinkClass("experience")}>Experience</a>
            <a href="#projects" className={navLinkClass("projects")}>Projects</a>
            <a href="#contact" className={navLinkClass("contact")}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
