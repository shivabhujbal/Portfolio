import { FiGithub, FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import P1I1 from '../assets/P1I1.jpeg';
import P1I2 from '../assets/P1I2.jpeg';
import P1I3 from '../assets/P1I3.jpeg';
import P2I1 from '../assets/P2I1.png';
import P2I4 from '../assets/P2I4.png';
import P2I5 from '../assets/P2I5.png';
import P2I6 from '../assets/P2I6.png';
import P3I1 from '../assets/P3I1.png';
import P3I2 from '../assets/P3I2.png';
import P3I3 from '../assets/P3I3.png';
import P3I4 from '../assets/P3I4.png';

const projectsData = {
  '1': {
    title: 'Chat Application',
    date: 'DEC 2023',
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'JDBC'],
    features: [
      'Executed role-based access control, allowing admins and users to manage, create, and update groups.',
      'Ensured application reliability through unit testing with JUnit and API testing with Postman.',
      'Utilized Java frameworks such as Spring Boot, Spring Data JPA, Hibernate, and JDBC.',
      'Administered database indexing and query optimization.',
    ],
    sourceCodeLink: 'https://github.com/shivabhujbal/Company-Social-Group.git',
    images: [P1I1, P1I2, P1I3],
  },
  '2': {
    title: 'Role Based Authorization using JWT',
    date: 'JULY 2024',
    technologies: ['Java 17', 'Spring Boot', 'JWT', 'Spring Security', 'React'],
    features: [
      'Implemented Spring Security and JWT for application security and authorization.',
      'Developed login and registration features with separate dashboards for users and admins.',
      'Implemented password encoding for sensitive data.',
    ],
    sourceCodeLink: 'https://github.com/shivabhujbal/user-authorization-backend.git',
    images: [P2I1, P2I4, P2I5, P2I6],
  },
  '3': {
    title: 'Email ID Verification using EmailJS and React',
    date: 'AUG 2024',
    technologies: ['React', 'EmailJS', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Integrated EmailJS for sending email verification links.',
      'Designed and implemented email verification form with real-time validation.',
      'Used environment variables for EmailJS credentials.',
    ],
    sourceCodeLink: 'https://github.com/shivabhujbal/email-otp-verification-react',
    images: [P3I1, P3I2, P3I3, P3I4],
  },
};

export default function Projects() {
  const { projectId } = useParams();  
  const project = projectsData[projectId];
  const navigate = useNavigate();  // Using useNavigate here
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) return <div>Project not found</div>;

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Back Arrow */}
        <motion.div
          className="absolute top-6 left-6 cursor-pointer text-yellow-500"
          onClick={() => navigate('/')}  // Using navigate() instead of history.push()
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FiArrowLeft className="h-8 w-8" />
        </motion.div>

        <div className="text-white text-center mb-12">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.title}
          </motion.h2>
          <p className="text-white text-xl mt-4">{project.date}</p>
        </div>

        {/* Technologies & Features */}
        <div className="lg:flex lg:justify-between mt-6">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h3 className="text-2xl text-white font-bold">Technologies Used</h3>
            <ul className="list-disc pl-6 mt-2">
              {project.technologies.map((tech, index) => (
                <li key={index} className="text-gray-300">{tech}</li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl text-white font-bold">Features</h3>
            <ul className="list-disc pl-6 mt-2">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-300">{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Source Code Link */}
        <div className="mt-6 text-center">
          <a
            href={project.sourceCodeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400"
          >
            View Source Code <FiGithub className="inline ml-2" />
          </a>
        </div>

        {/* Project Images */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="relative"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image}
                alt={`${project.title} Image ${index + 1}`}
                className="w-full h-auto rounded-lg cursor-pointer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
          onClick={handleCloseModal}
        >
          <motion.img
            src={selectedImage}
            alt="Selected"
            className="max-w-4xl max-h-screen object-contain rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </section>
  );
}
