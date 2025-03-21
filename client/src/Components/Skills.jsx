import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaNodeJs, FaDatabase, FaServer, FaCode, FaCss3Alt,
  FaGitAlt, FaDocker, FaAws
} from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiGraphql } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-[#8B5CF6]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#8B5CF6]" /> },
  { name: 'MongoDB', icon: <FaDatabase className="text-[#8B5CF6]" /> },
  { name: 'Express', icon: <FaServer className="text-[#8B5CF6]" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#8B5CF6]" /> },
  { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-[#8B5CF6]" /> },
  { name: 'C++', icon: <FaCode className="text-[#8B5CF6]" /> },
  { name: 'Git', icon: <FaGitAlt className="text-[#8B5CF6]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-[#8B5CF6]" /> },
  { name: 'GraphQL', icon: <SiGraphql className="text-[#8B5CF6]" /> },
  { name: 'Docker', icon: <FaDocker className="text-[#8B5CF6]" /> },
  { name: 'AWS', icon: <FaAws className="text-[#8B5CF6]" /> },
];

const SkillCard = ({ skill, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-[#1F2937] rounded-xl p-6 shadow-md hover:shadow-xl 
                 transform hover:-translate-y-1 transition-all duration-300 
                 flex items-center space-x-4 border border-gray-200 dark:border-[#4B5563]"
    >
      <div className="text-3xl">{skill.icon}</div>
      <span className="text-[#111827] dark:text-[#F3F4F6] font-semibold text-lg">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#F9FAFB] dark:bg-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] dark:text-[#F3F4F6] mb-4 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-xl text-[#6B7280] dark:text-[#9CA3AF] max-w-3xl mx-auto">
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