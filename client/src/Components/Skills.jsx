import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaNodeJs, FaDatabase, FaServer, FaCode, FaCss3Alt,
  FaGitAlt, FaHtml5, FaPython, FaLeaf
} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-[#8B5CF6]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#8B5CF6]" /> },
  { name: 'MongoDB', icon: <FaLeaf className="text-[#8B5CF6]" /> },
  { name: 'Express', icon: <FaServer className="text-[#8B5CF6]" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-[#8B5CF6]" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-[#8B5CF6]" /> },
  { name: 'SQL', icon: <FaDatabase className="text-[#8B5CF6]" /> },
  { name: 'Python', icon: <FaPython className="text-[#8B5CF6]" /> },
  { name: 'C++', icon: <FaCode className="text-[#8B5CF6]" /> },
  { name: 'Git', icon: <FaGitAlt className="text-[#8B5CF6]" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-[#8B5CF6]" /> },
  { name: 'Tailwind CSS', icon: <FaCss3Alt className="text-[#8B5CF6]" /> },
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
    <section id="skills" className="py-12 bg-[#F9FAFB] dark:bg-[#1F2937]"> {/* Reduced py-20 to py-12 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8" // Reduced mb-12 to mb-8
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-[#F3F4F6] mb-3 tracking-tight"> {/* Reduced text-4xl to text-3xl, sm:text-5xl to sm:text-4xl, mb-4 to mb-3 */}
            Technical Skills
          </h2>
          <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-3xl mx-auto"> {/* Reduced text-xl to text-lg */}
            I specialize in full-stack development with expertise in the MERN stack and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Reduced gap-6 to gap-4 */}
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;