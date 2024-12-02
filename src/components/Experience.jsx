import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      year: 'JUL 2024 - NOV 2024',
      title: 'Software Developer Trainee',
      company: 'Numetry Technologies',
      location: 'WFH',
      responsibilities: [
        'Completed challenging tasks as a Software Developer Trainee, consistently delivering high-quality solutions within tight deadlines.',
        'Worked on a Resume Builder website project, where my primary role is to connect the frontend with backend APIs, ensuring seamless data flow and user interactions.',
        'Developed and integrated frontend components using React.js, focusing on creating dynamic and user-friendly interfaces.',
        'Collaborated with backend teams to ensure efficient API integration, enhanced the overall functionality of the project.',
      ],
    },
    {
      year: 'OCT 2023 - DEC 2023',
      title: 'Software Developer Intern',
      company: 'AI Variant',
      location: 'Remote',
      responsibilities: [
        'Developed a RESTful API using Spring Boot and Java 17, enhancing backend functionality, streamlining data processing, and improving response time.',
        'Led a team of 6 interns, overseeing task coordination and ensuring timely completion of project milestones, while fostering a collaborative and productive work environment.',
        'Designed and optimized MySQL databases, reducing query execution time by 20%, resulting in improved overall application performance.',
        'Implemented 5 new API endpoints, significantly expanding functionality and providing enhanced capabilities for client applications.',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} className="mb-12 flex" variants={itemVariants}>
              <div className="flex flex-col items-center mr-4">
                <div className="w-px h-full bg-yellow-500"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center mb-2">
                  <span className="text-yellow-500 font-bold mr-4">{exp.year}</span>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                </div>
                <p className="text-gray-400 mb-2">{exp.company} - {exp.location}</p>
                <ul className="list-disc pl-5 text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="mb-2">{resp}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
