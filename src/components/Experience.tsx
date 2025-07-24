export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'PT Kano Teknologi Utama',
      period: 'May 2022 - Dec 2024',
      desc: 'Developed and maintained web applications for various clients using Golang for backend services and Vue.js with Tailwind CSS for frontend interfaces. Integrated MongoDB for data management and ensured code quality, performance, and scalability. Collaborated closely with internal teams and clients to deliver reliable and maintainable software solutions aligned with business goals.',
    },
  ];

  return (
    <section id="experience" className="py-34 bg-[#F2F0EA]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-md">
              <h3 className="text-xl font-semibold">{exp.role} | {exp.company}</h3>
              <span className="text-gray-500 text-sm">{exp.period}</span>
              <p className="mt-2 text-gray-700 text-justify">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
