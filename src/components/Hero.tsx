"use client"

import React, { useState, useEffect } from "react";
import "@/app/css/RunImage.css"; 

const images = [
  { src: "/img/golang.svg", alt: "logo.png", text: "Golang" },
  { src: "/img/vuejs.svg", alt: "logo.png", text: "VueJS" },
  { src: "/img/nuxtjs.svg", alt: "logo.png", text: "NuxtJS" },
  { src: "/img/reactjs.svg", alt: "logo.png", text: "ReactJS" },
  { src: "/img/nextjs.svg", alt: "logo.png", text: "NextJS" },
  { src: "/img/tailwindcss.svg", alt: "logo.png", text: "Tailwind CSS" },
];

export default function Hero() {
  const [startRun, setStartRun] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartRun(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center bg-background pt-24">
      <div className="text-center items-center p-5">
        {/* <img src="/avatar.png" className="w-32 h-32 rounded-full mb-4" alt="Profile" /> */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-primary font-monserrat">M. Dhoni Arifin</h2>
        <p className="text-xl text-gray-800 mt-2">Software Developer | Golang | Vue | React | Tailwind</p>
        {/* <a href="#projects" className="mt-6 inline-block px-6 py-2 bg-primary text-white rounded hover:bg-gray-800 hover:text-white transition">
          Projects
        </a> */}
      </div>
      <div className="text-center items-center gap-2">
        {/* <div className="pb-5">
          <p className="text-gray-700 text-lg leading-8">
            Hello! I'm <strong>Dhoni</strong>, a <strong>Software Developer</strong> based in Jember, with over 2 years of experience in the tech industry. 
            I'm proficient in working with <strong>Vue.js</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>, 
            and I also have backend development skills using <strong>Golang</strong>. 
            I’m passionate about creating clean, fast, and user-friendly interfaces, and I enjoy solving real-world problems through technology.
          </p>
        </div> */}
        <div className="pt-10 p-5 text-center items-center">
          {/* <h2 className="text-2xl font-bold mb-4">My Tech Stack</h2> */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-between">
            {images.map((img, idx) => (
              <div
                key={idx}
                // className="w-full h-[150px] bg-[#F2F0EA] flex flex-col gap-2 items-center justify-center rounded-md shadow-lg"
                className={`img-run w-full h-[150px] bg-[#F2F0EA] flex flex-col gap-2 items-center justify-center rounded-md shadow-lg ${startRun ? "run" : ""}`}
                style={{ animationDelay: `${idx * 0.3}s` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-[60%] h-[60%] object-contain"
                />
                <div>
                  {img.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
