import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-learning Platform',
    description: 'A comprehensive e-learning platform with courses, quizzes, and progress tracking. Features include user authentication, payment processing, and responsive design.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    imageUrl: 'https://images.pexels.com/photos/5905710/pexels-photo-5905710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com/elearning',
    githubUrl: 'https://github.com/salaheddine-ghannouch/elearning',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Portfolio Website',
    description: 'My personal portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS with smooth animations and responsive design.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://salaheddine-ghannouch.github.io/MyPortfolio/',
    githubUrl: 'https://github.com/salaheddine-ghannouch/MyPortfolio',
    featured: true
  },
  {
    id: 'project-3',
    title: 'Task Management App',
    description: 'A productivity app for managing tasks, projects, and deadlines. Features include drag-and-drop interface, priority levels, and team collaboration.',
    technologies: ['Vue.js', 'Firebase', 'Vuex', 'TailwindCSS'],
    imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com/taskmanager',
    githubUrl: 'https://github.com/salaheddine-ghannouch/taskmanager'
  },
  {
    id: 'project-4',
    title: 'Weather Forecast App',
    description: 'A weather application that provides real-time forecasts, historical data, and location-based weather information using the OpenWeatherMap API.',
    technologies: ['JavaScript', 'API Integration', 'HTML/CSS', 'Chart.js'],
    imageUrl: 'https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    liveUrl: 'https://example.com/weather',
    githubUrl: 'https://github.com/salaheddine-ghannouch/weather'
  }
];