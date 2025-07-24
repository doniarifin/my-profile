"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

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
    `hover:text-[#A8D5E3] hover:underline transition ${
      activeSection === id ? "text-[#A8D5E3] underline font-semibold" : ""
    }`;

  return (
    <header className="fixed top-0 w-full bg-gray-800 py-3 text-gray-300 shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-lg">Doni's Profile</h1>
        <nav className="space-x-6">
          <a href="#about" className={navLinkClass("about")}>About</a>
          <a href="#experience" className={navLinkClass("experience")}>Experience</a>
          <a href="#projects" className={navLinkClass("projects")}>Projects</a>
          <a href="#contact" className={navLinkClass("contact")}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
