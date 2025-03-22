// AllProjects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom'; // Add this import
import projectsData from '../projects.json';

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="bg-white dark:bg-[#1F2937] rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 
                 transition-all duration-500 ease-in-out hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#111827] dark:text-[#F3F4F6] mb-3 tracking-tight">{project.title}</h3>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] mb-4 leading-relaxed text-base">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#EDE9FE] dark:bg-[#4B5563] text-[#8B5CF6] rounded-full text-sm font-medium 
                         transition-colors duration-300 hover:bg-[#D8D6FE]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                       transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span className="font-medium">Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#8B5CF6] 
                       transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" />
            <span className="font-medium">Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const AllProjects = () => {
  return (
    <section className="py-24 bg-[#F9FAFB] dark:bg-[#1F2937] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] dark:text-[#F3F4F6] mb-4 tracking-tight">
            All Projects
          </h2>
          <p className="text-xl text-[#6B7280] dark:text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
            A complete collection of my web development projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-[#8B5CF6] text-white rounded-full text-lg font-medium
                       hover:bg-[#7C3AED] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;