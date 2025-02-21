import React from 'react';

const projectsData = [
  { id: 1, title: 'Project 1', description: 'Brief description of the project goes here.', image: 'project-1.jpg' },
  { id: 2, title: 'Project 2', description: 'Brief description of the project goes here.', image: 'project-2.jpg' },
  { id: 3, title: 'Project 3', description: 'Brief description of the project goes here.', image: 'project-3.jpg' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image')}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <button className="text-indigo-400 group-hover:text-indigo-300 font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;