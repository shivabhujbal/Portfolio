import { useNavigate } from 'react-router-dom';
import P1I1 from '../assets/P1I1.jpeg';

import P2I1 from '../assets/P2I1.png';

import P3I1 from '../assets/P3I1.png';


const projects = [
  {
    id:'1',
    title: "Chat Application",
    image: P1I1,
    category: "Web Development",
  },
  {
    id:'2',
    title: "Role Based Authorization using JWT",
    image: P2I1,
    category: "Authorization",
  },
  {
    id:'3',
    title: "Email ID Verification",
    image: P3I1,
    category: "Authentication",
  },
];

export default function Portfolio() {

  const navigate = useNavigate();

  const handleViewClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };


  return (
    <section id='portfolio' className="py-20 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-300">{project.category}</p>
                  <div className="text-center mt-3">
          <button className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-lg hover:bg-yellow-400 transition-colors"
          onClick={() => handleViewClick(project.id)}>
            View
          </button>
        </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-12">
          <button className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
            View More
          </button>
        </div> */}
      </div>
    </section>
  );
}
