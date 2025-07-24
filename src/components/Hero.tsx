export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#F2F0EA] pt-24 text-center">
      {/* <img src="/avatar.png" className="w-32 h-32 rounded-full mb-4" alt="Profile" /> */}
      <h2 className="text-5xl md:text-7xl font-bold text-gray-800 font-monserrat">Dhoni Arifin</h2>
      <p className="text-xl text-gray-600 mt-2">Software Developer | Golang | Vue | React | Tailwind</p>
      <a href="#projects" className="mt-6 inline-block px-6 py-2 bg-gray-800 text-[#F2F0EA] rounded hover:bg-gray-600 hover:text-white transition">
        Projects
      </a>
    </section>
  );
}
