import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import BgImg from '../assets/background.jpg';

export default function Hero() {
  return (
    <section
    id='home'
      className="pt-20 pb-10 px-4 min-h-screen flex items-center bg-gray-900 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${BgImg})`,
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Left Section */}
        <div className="ml-5">
          <p className="text-sm text-white mb-2">I'M</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Shivsambh </span>
            <span className="text-yellow-500">Bhujbal</span>
          </h1>
          <p className="text-gray-400 mb-6">Java Full Stack Developer</p>
          <a
            href="#contact"
            className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
          >
            Hire Me
          </a>
          {/* Social Icons */}
          <div className="flex mt-6 gap-4">
            <a href="https://x.com/_shiva_1008" className="text-gray-400 hover:text-yellow-500">
              <FiTwitter />
            </a>
            <a href="https://www.linkedin.com/in/shivsambh-bhujbal-75987a1b8/" className="text-gray-400 hover:text-yellow-500">
              <FiLinkedin />
            </a>
            <a
              href="https://github.com/shivabhujbal"
              className="text-gray-400 hover:text-yellow-500"
            >
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
