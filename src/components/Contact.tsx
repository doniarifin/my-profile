import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <section id="contact" className="py-34 mb-30 bg-[#F2F0EA]">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-700 text-lg mb-8">
          I am excited about new challenges and opportunities.
          I'm ready to contribute, learn, and grow, with the hope of advancing my skills and career.
          Let's get in touch.
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex gap-4 text-center text-gray">
            <a
              href="mailto:muh.dhoni@gmail.com"
              className="text-gray content-center underline w-[40px]"
            >
              <FontAwesomeIcon icon={faEnvelope} className="hover:text-[#A8D5E3] transition duration-200" />
            </a>
            <a
              href="https://www.linkedin.com/in/mdhoni-zahrul-am"
              className="text-gray content-center underline w-[40px]"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="hover:text-[#A8D5E3] transition duration-200" />
            </a>
            <a
              href="https://github.com/doniarifin"
              className="text-gray content-center underline w-[40px]"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="hover:text-[#A8D5E3] transition duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
