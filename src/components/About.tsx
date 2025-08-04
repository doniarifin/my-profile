export default function About() {
  return (
    <section id="about" className="py-30 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 text-lg leading-8">
          Hello! I'm <strong>Dhoni</strong>, a <strong>Software Developer</strong> based in Jember, with over 2 years of experience in the tech industry. 
          I'm proficient in working with <strong>Vue.js</strong>, <strong>React</strong>, and <strong>Tailwind CSS</strong>, 
          and I also have backend development skills using <strong>Golang</strong>.
        </p>
        <p className="mt-4 text-gray-700 text-lg leading-8">
          I’m passionate about creating clean, fast, and user-friendly interfaces, and I enjoy solving real-world problems through technology.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {['Golang', 'React', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'SQL', 'MongoDB'].map(skill => (
          <span
            key={skill}
            className="bg-[#A8D5E3] text-gray-800 px-4 py-2 rounded-full text-sm font-medium rounded-md shadow-xl"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
    
  );
}
