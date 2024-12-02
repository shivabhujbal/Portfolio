import { motion } from 'framer-motion';
import abtImg from '../assets/about.jpg';
import resume from '../assets/resume.pdf'

export default function About() {
  // Dynamic data
  const aboutData = {
    heading: 'About Me',
    altText: 'Shivsambh Bhujbal',
    paragraphs: [
      "Hello, I'm Shivsambh Bhujbal, a dedicated Fullstack Developer with a passion for delivering high-performance, scalable applications. With expertise in Java, Spring Boot, JavaScript, React.js, MySQL, Spring Data JPA, HTML, CSS, and Bootstrap, I bring a well-rounded skill set to every project.",
      "🚀 My focus lies in developing robust backend solutions with Spring Boot while creating dynamic, responsive front-end interfaces using React.js and JavaScript. I am committed to crafting seamless user experiences that not only meet but exceed expectations, ensuring the successful delivery of impactful and efficient software solutions.",
    ],
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {aboutData.heading}
        </motion.h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={abtImg}
              alt={aboutData.altText}
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>

    
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-300 mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <motion.a
              href={resume} 
              download="Shivsambh's_Resume.pdf"
            >
            <motion.button
              className="mt-8 bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>

            </motion.a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
