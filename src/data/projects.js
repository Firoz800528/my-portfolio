// src/data/projects.js
const projects = [
  {
    id: 'project1',
    name: 'Portfolio Website',
    image: '/images/portfolio.png',
    techStack: ['React', 'Tailwind CSS', 'React Router'],
    description: 'A personal portfolio website to showcase projects, skills, and experience.',
    liveLink: 'https://yourportfolio.com',
    githubLink: 'https://github.com/yourusername/portfolio',
    challenges: 'Implementing responsive design and routing.',
    improvements: 'Add blog section and CMS integration in future.',
  },
  {
    id: 'project2',
    name: 'Task Management App',
    image: '/images/taskapp.png',
    techStack: ['MERN Stack', 'Express', 'MongoDB'],
    description: 'A full-stack task management application with user authentication and real-time updates.',
    liveLink: 'https://taskapp.com',
    githubLink: 'https://github.com/yourusername/taskapp-client',
    challenges: 'Real-time data sync and authentication flows.',
    improvements: 'Mobile app version and enhanced notifications.',
  },
  {
    id: 'project3',
    name: 'E-commerce Store',
    image: '/images/ecommerce.png',
    techStack: ['Next.js', 'Stripe API', 'MongoDB'],
    description: 'An e-commerce platform with payment integration and product management.',
    liveLink: 'https://mystore.com',
    githubLink: 'https://github.com/yourusername/ecommerce-client',
    challenges: 'Payment gateway integration and handling complex product data.',
    improvements: 'Add user reviews and advanced search filters.',
  },
];

export default projects;
