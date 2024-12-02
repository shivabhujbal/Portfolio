import { motion } from "framer-motion";

export default function Education() {
  const educationData = [
    {
      title: "Bachelor of Engineering (B.E)",
      university: "Savitribai Phule Pune University",
      duration: "Jun 2019 - Jun 2023",
      description: "CGPA: 8.02",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      board: "Maharashtra State Board",
      subject: "PCM",
      duration: "Jun 2018 - Jun 2019",
      description: "Percentage: 68.15%",
    },
    {
      title: "Secondary School Certificate (SSC)",
      board: "Maharashtra State Board",
      duration: "Jun 2016 - Jun 2017",
      description: "Percentage: 92.40%",
    },
    {
      title: "Java Fullstack Development",
      institution: "ExcelR Solutions",
      duration: "June 2023 - Oct 2023",
      description: "",
      certificationLink:
        "https://drive.google.com/file/d/1KlUdXSqCLPdCi9DXdH-gpclT_x3Xeu-N/view?usp=sharing",
    },
    {
      title: "Python for Data Science and ML Bootcamp",
      platform: "Udemy",
      duration: "Jun 2022 - Aug 2022",
      description: "",
      certificationLink:
        "https://www.udemy.com/certificate/UC-e20c5de5-92a5-4872-9264-e33353ab70b6/",
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
    <section id="education" className="py-20 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Education</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="flex bg-gray-700 rounded-lg shadow-lg p-6"
              variants={itemVariants}
            >
              <div className="mr-4">
                <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-800"></div>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col mb-2">
                  <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                  <span className="text-yellow-500 font-bold">{edu.duration}</span>
                </div>
                <p className="text-gray-400 mb-2">
                  {edu.university || edu.institution || edu.college || edu.platform || edu.board}
                </p>
                <p className="text-gray-300">{edu.description}</p>
                {edu.certificationLink && (
                  <a
                    href={edu.certificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    View Certification
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
