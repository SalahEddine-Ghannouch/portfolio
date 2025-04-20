import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';
import { 
  Code, Server, Database, Palette, Box, GitBranch, CircleDot, FileCode, Layout
} from 'lucide-react';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'react':
        return <Code className="h-6 w-6" />;
      case 'code':
        return <Code className="h-6 w-6" />;
      case 'server':
        return <Server className="h-6 w-6" />;
      case 'database':
        return <Database className="h-6 w-6" />;
      case 'palette':
        return <Palette className="h-6 w-6" />;
      case 'box':
        return <Box className="h-6 w-6" />;
      case 'git-branch':
        return <GitBranch className="h-6 w-6" />;
      case 'circle-dot':
        return <CircleDot className="h-6 w-6" />;
      case 'file-code':
        return <FileCode className="h-6 w-6" />;
      case 'layout':
        return <Layout className="h-6 w-6" />;
      default:
        return <Code className="h-6 w-6" />;
    }
  };

  const frontendSkills = skills.filter((skill) => skill.category === 'frontend');
  const backendSkills = skills.filter((skill) => skill.category === 'backend');
  const languageSkills = skills.filter((skill) => skill.category === 'languages');
  const toolSkills = skills.filter((skill) => skill.category === 'tools');

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Skills & Technologies" 
          subtitle="Technologies and tools I work with" 
        />
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Frontend */}
            <div className="bg-white dark:bg-dark-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Layout className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                Frontend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {frontendSkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={itemVariants}
                    className="flex items-center p-3 bg-gray-50 dark:bg-dark-600 rounded-lg hover:bg-primary-50 dark:hover:bg-dark-500 transition-colors duration-300"
                  >
                    <div className="p-2 mr-3 bg-primary-100 dark:bg-primary-900/30 rounded-md text-primary-600 dark:text-primary-400">
                      {getIcon(skill.icon)}
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white dark:bg-dark-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Server className="h-5 w-5 mr-2 text-secondary-600 dark:text-secondary-400" />
                Backend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {backendSkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={itemVariants}
                    className="flex items-center p-3 bg-gray-50 dark:bg-dark-600 rounded-lg hover:bg-secondary-50 dark:hover:bg-dark-500 transition-colors duration-300"
                  >
                    <div className="p-2 mr-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-md text-secondary-600 dark:text-secondary-400">
                      {getIcon(skill.icon)}
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white dark:bg-dark-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Code className="h-5 w-5 mr-2 text-accent-600 dark:text-accent-400" />
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {languageSkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={itemVariants}
                    className="flex items-center p-3 bg-gray-50 dark:bg-dark-600 rounded-lg hover:bg-accent-50 dark:hover:bg-dark-500 transition-colors duration-300"
                  >
                    <div className="p-2 mr-3 bg-accent-100 dark:bg-accent-900/30 rounded-md text-accent-600 dark:text-accent-400">
                      {getIcon(skill.icon)}
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white dark:bg-dark-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <GitBranch className="h-5 w-5 mr-2 text-primary-600 dark:text-primary-400" />
                Tools
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {toolSkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={itemVariants}
                    className="flex items-center p-3 bg-gray-50 dark:bg-dark-600 rounded-lg hover:bg-primary-50 dark:hover:bg-dark-500 transition-colors duration-300"
                  >
                    <div className="p-2 mr-3 bg-primary-100 dark:bg-primary-900/30 rounded-md text-primary-600 dark:text-primary-400">
                      {getIcon(skill.icon)}
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;