import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJava, faGithub, faAws, faHtml5, faCss3, faJsSquare, faReact, faDocker, faAngular, 
  faMicrosoft
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCogs, faCircle ,faFileCode, faCode } from '@fortawesome/free-solid-svg-icons';

const skills = [
  { name: 'Java', icon: <FontAwesomeIcon icon={faJava} size="3x" color="#007396" /> }, 
  { name: 'Spring Boot', icon: <FontAwesomeIcon icon={faCode} size="3x" color="#F7DF1E" /> }, 
  { name: 'MySQL', icon: <FontAwesomeIcon icon={faDatabase} size="3x" color="#4479A1" /> },
  { name: 'Git/Github', icon: <FontAwesomeIcon icon={faGithub} size="3x" color="#FFF" /> },
  { name: 'JavaScript', icon: <FontAwesomeIcon icon={faJsSquare} size="3x" color="#F7DF1E" /> },
  { name: 'React.js', icon: <FontAwesomeIcon icon={faReact} size="3x" color="#61DAFB" /> },
  { name: 'Angular', icon: <FontAwesomeIcon icon={faAngular} size="3x" color="#DD0031" /> },
];

const additionalSkills = [
  'Microservices',
  'Junit',
  'Docker',
  'Spring Data JPA',
  'RESTful APIs',
  'Collections',
  'Multi Threading',
  'HTML',
  'CSS',
  'AWS',
  'Ms Office',
  'Agile Methodology',
  'SOLID principles',
  'Design Patterns',



];

export default function Skills() {
  return (
    <section id='skills' className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <div className="mx-auto mb-4 text-center">{skill.icon}</div>
              <p className="text-center text-gray-300">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <h2 className="text-xl font-bold text-white mt-12 mb-8 text-center">Additional Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {additionalSkills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-3 rounded-xl hover:bg-gray-700 transition-colors flex items-center space-x-2">
              <FontAwesomeIcon icon={faCircle} size="sm"  className="text-yellow-500" />
              <p className="text-gray-300">{skill}</p>
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
