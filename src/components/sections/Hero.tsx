import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import Button from '../Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="lg:w-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Salaheddine Ghannouch
                <span className="block text-xl md:text-2xl lg:text-3xl font-medium text-dark-500 dark:text-gray-300 mt-2">
                  Full Stack Developer
                </span>
              </h1>
              
              <p className="text-lg text-dark-500 dark:text-gray-300 mb-8 max-w-xl">
                I build exceptional digital experiences that are fast, accessible,
                and responsive. Focused on creating elegant solutions to complex problems.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  href="#projects" 
                  variant="primary"
                  size="lg"
                >
                  View My Work
                </Button>
                <Button 
                  href="#contact" 
                  variant="outline"
                  size="lg"
                >
                  Contact Me
                </Button>
              </div>
              
              <div className="mt-10 flex space-x-5">
                <a 
                  href="https://github.com/salaheddine-ghannouch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/salaheddine-ghannouch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary-500 dark:border-primary-700 shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                alt="Salaheddine Ghannouch" 
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.a 
          href="#projects"
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-dark-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </motion.a>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-100 dark:bg-primary-900/20 rounded-bl-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary-100 dark:bg-secondary-900/20 rounded-tr-full -z-10"></div>
    </section>
  );
};

export default Hero;