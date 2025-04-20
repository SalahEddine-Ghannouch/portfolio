import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../../data/experience';
import SectionHeading from '../ui/SectionHeading';
import { Briefcase, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-900/40">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Professional Experience" 
          subtitle="My professional journey and career milestones" 
        />
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-primary-300 dark:before:bg-primary-800 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                <div className="absolute -left-8 top-0 w-6 h-6 bg-white dark:bg-dark-700 border-2 border-primary-500 dark:border-primary-700 rounded-full" />
                
                <div className="bg-white dark:bg-dark-700 rounded-lg shadow-md p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400 mt-2 sm:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <p className="text-dark-500 dark:text-gray-300 text-base mb-6">
                    {exp.company}
                  </p>
                  
                  <p className="text-dark-500 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          <ChevronRight className="h-3 w-3 mr-1" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;