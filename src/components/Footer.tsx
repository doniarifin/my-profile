export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 pb-15">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          Handcrafted by Doni Arifin
        </p>
        <div className="flex text-lg gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/doniarifin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          |
          <a
            href="https://linkedin.com/in/mdhoni-zahrul-am"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          |
          <a
            href="mailto:muh.dhoni@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
