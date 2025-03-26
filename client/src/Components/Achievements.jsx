import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaTrophy, FaChartBar } from 'react-icons/fa';

const achievements = [
  
  {
    name: 'LeetCode',
    description: 'Solved 300+ problems | Top 12% in Contests',
    icon: <FaCode className="text-[#8B5CF6] text-4xl" />,
  },
  {
    name: 'CodeChef',
    description: '3-Star Rating | Max Rating: 1615',
    icon: <FaTrophy className="text-[#8B5CF6] text-4xl" />,
  },
  {
    name: 'Codeforces',
    description: 'Max Rating: 1155',
    icon: <FaChartBar className="text-[#8B5CF6] text-4xl" />,
  },
  // {
  //   name: 'SIH Internal Hackathon Qualifier',
  //   description: 'Successfully cleared the internal hackathon round of Smart India Hackathon (SIH) with an innovative team project.',
  // }
];

const AchievementCard = ({ achievement, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-[#1F2937] rounded-xl p-6 shadow-md hover:shadow-xl 
                 transform hover:-translate-y-1 transition-all duration-300 
                 flex flex-col items-center space-y-4 border border-gray-200 dark:border-[#4B5563]"
    >
      <div>{achievement.icon}</div>
      <h3 className="text-[#111827] dark:text-[#F3F4F6] font-semibold text-xl">
        {achievement.name}
      </h3>
      <p className="text-[#6B7280] dark:text-[#9CA3AF] text-center">
        {achievement.description}
      </p>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-[#F9FAFB] dark:bg-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] dark:text-[#F3F4F6] mb-4 tracking-tight">
            Achievements
            <span className="block w-24 h-1 bg-[#8B5CF6] mx-auto mt-2 rounded"></span>
          </h2>
          <p className="text-xl text-[#6B7280] dark:text-[#9CA3AF] max-w-3xl mx-auto">
            Highlights of my competitive programming journey and accomplishments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.name} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;