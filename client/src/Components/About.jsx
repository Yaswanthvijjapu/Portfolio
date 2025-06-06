import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const profilePhoto = "./images/Myimg.jpg"; 
const resumePdf = '/resume.pdf'; 

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-5 bg-[#F9FAFB] dark:bg-[#1F2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#111827] dark:text-[#F3F4F6] mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-xl text-[#6B7280] dark:text-[#9CA3AF] max-w-3xl mx-auto leading-relaxed">
            A passionate developer crafting innovative solutions with modern technologies.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg"
        >
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-lg text-left"
          >
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-6 leading-relaxed">
              Hi, I'm Yaswanth, a full-stack developer with a love for building scalable, user-friendly applications. 
              With expertise in the MERN stack and a knack for problem-solving, I enjoy turning ideas into reality through code.
            </p>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-6 leading-relaxed">
              When I’m not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sipping coffee while brainstorming my next big idea.
            </p>
            {/* <div className="text-center mt-6">
              <a
                href={resumePdf}
                download="Yaswanth_Vijjapu_Resume.pdf"
                className="inline-block bg-[#8B5CF6] text-white px-6 py-2 rounded-full font-medium
                           hover:bg-[#7C3AED] transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;