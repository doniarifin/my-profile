export default function Projects() {
  const projects = [
    {
      name: 'SAP Career Site Customization',
      tech: ['HTML', 'CSS', 'JavaScript'],
      desc: 'Customized client-provided UI mockups into responsive and branded web interfaces, enhancing user experience in the recruitment process. Focused on aligning design with client identity and improving overall usability of the career site.',
    },
    {
      name: 'SHEPro Apps',
      tech: ['Golang', 'Vue.js', 'Tailwind CSS', 'MongoDB'],
      desc: 'A web application developed to support Health, Safety, and Environmental (HSE) monitoring and reporting within a mining company, including dashboards and data management tools.',
    },
  ];

  const portofolio = [
    {
      name: 'CV Generator',
      tech: ['Vue.js', 'Tailwind CSS'],
      desc: 'An application for creating CVs instantly.',
      link: 'https://doniarifin.github.io/cv-generator-vue/',
    },
  ];

  return (
    <section id="projects" className="py-34 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
              <p className="text-gray-600 text-justify">{proj.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[#A8D5E3] text-gray-800 text-sm px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 pt-20">
        <h3 className="text-2xl font-bold text-center mb-10">Personal Portofolio</h3>
        <div className="grid md:grid-cols-1 gap-8">
          {portofolio.map((proj, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
              <p className="text-gray-600 text-justify">{proj.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[#A8D5E3] text-gray-800 text-sm px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                className="pt-8 text-center"
              >
                <span
                  className="bg-[#FF78AC] hover:bg-gray-800 hover:text-white text-gray-800 text-md px-3 py-2 rounded"
                >
                  <a 
                    href={proj.link}
                    target="_blank"
                  >Live Demo</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
