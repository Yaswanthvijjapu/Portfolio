import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaNodeJs, FaDatabase, FaServer, FaCode, FaCss3Alt,
  FaGitAlt, FaDocker, FaAws
} from 'react-icons/fa'; // Font Awesome icons
import { SiTypescript, SiNextdotjs, SiGraphql } from 'react-icons/si'; // Simple Icons

const skills = [
  { name: 'React', icon: <FaReact className="text-blue-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'MongoDB', icon: <FaDatabase className="text-green-800" /> },
  { name: 'Express', icon: <FaServer className="text-gray-700" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
  { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-teal-500" /> },
  { name: 'C++', icon: <FaCode className="text-blue-800" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'GraphQL', icon: <SiGraphql className="text-pink-600" /> },
  { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
  { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
];

const SkillCard = ({ skill, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl 
                 transform hover:-translate-y-1 transition-all duration-300 
                 flex items-center space-x-4 border border-gray-200 dark:border-gray-700"
    >
      <div className="text-3xl">{skill.icon}</div>
      <span className="text-gray-900 dark:text-gray-100 font-semibold text-lg">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I specialize in full-stack development with expertise in the MERN stack and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;