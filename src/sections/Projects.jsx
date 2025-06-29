import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';

// Project data
const projects = [
  {
    id: '1',
    name: 'Freelance Task',
    description:
      'A freelance marketplace platform where users post tasks and freelancers bid to complete them. Features role-based dashboards, JWT authentication, task filtering, and bid management. Built with MERN stack, Tailwind CSS, and DaisyUI.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'DaisyUI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Axios',
      'React Router',
    ],
    images: [
      'https://i.imgur.com/BVufCux.jpeg',
      'https://i.imgur.com/95vZtvZ.jpeg',
      'https://i.imgur.com/A4aOqTl.jpeg',
      'https://i.imgur.com/Eh7uHv4.jpeg',
    ],
    links: {
      live: 'https://freelance-task-46d26.web.app/',
      github: 'https://github.com/Firoz800528/freelanc-task',
    },
  },
  {
    id: '2',
    name: 'Know Share',
    description:
      'A knowledge-sharing platform where users can post, browse, and interact with educational content. Includes user authentication, blog management, and category filtering. Built using the MERN stack and responsive design with Tailwind CSS.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'DaisyUI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Axios',
      'React Router',
    ],
    images: [
      'https://i.imgur.com/n4yngkP.jpeg',
      'https://i.imgur.com/gPVq5Cb.jpeg',
      'https://i.imgur.com/O4z7r5H.jpeg',
      'https://i.imgur.com/70PweJo.jpeg',
    ],
    links: {
      live: 'https://knowledge-sharing-platfo-44028.web.app/',
      github: 'https://github.com/Firoz800528/Knowledge-sharing-project',
    },
  },
  {
    id: '3',
    name: 'Job Track',
    description:
      'A job tracking tool for managing job applications and interview progress. Allows users to add, update, and categorize jobs by status. Developed using the MERN stack and styled with Tailwind and DaisyUI.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'DaisyUI',
      'Node.js',
      'Express.js',
      'MongoDB',
      'React Router',
    ],
    images: [
      'https://i.imgur.com/dmUsQpk.jpeg',
      'https://i.imgur.com/HkTwPbK.jpeg',
      'https://i.imgur.com/bHClihW.jpeg',
      'https://i.imgur.com/Ixd611K.jpeg',
    ],
    links: {
      live: 'https://jobtrack-83acf.web.app/',
      github: 'https://github.com/Firoz800528/job-track',
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl pt-20 mx-auto px-6 space-y-16">
      <Fade direction="up" triggerOnce>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          <span className="border-b-4 border-yellow-400 pb-1">Projects</span>
        </h2>

        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Fade>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const { name, description, technologies, images, links } = project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevImage = () => {
    setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const nextImage = () => {
    setCurrentImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center md:flex-row min-h-[300px]">
      {/* Image Slider with Animation */}
      <div className="md:w-1/2 w-full h-64 md:h-[400px] relative bg-black overflow-hidden">
        {/* Fade animation */}
        <div className="relative w-full h-full">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${name} screenshot ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ${
                index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-yellow-400 text-white rounded-full p-1 md:p-2 opacity-80 hover:opacity-100 transition"
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-yellow-400 text-white rounded-full p-1 md:p-2 opacity-80 hover:opacity-100 transition"
          aria-label="Next image"
        >
          ›
        </button>

        {/* Indicators */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 md:gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                idx === currentImageIndex ? 'bg-yellow-500' : 'bg-yellow-300'
              }`}
              aria-label={`Show image ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Details */}
      <div className="md:w-1/2 p-4 md:p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">{name}</h3>

          <section className="mb-4 md:mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-1">📝 Description</h4>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">{description}</p>
          </section>

          <section className="mb-4 md:mb-6">
            <h4 className="text-lg md:text-xl font-semibold mb-2">🛠️ Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-400 text-white text-xs md:text-sm px-2 md:px-3 py-1 rounded-full shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h4 className="text-lg md:text-xl font-semibold mb-2">🔗 Project Links</h4>
            <ul className="flex flex-col gap-2 text-yellow-600 font-medium">
              <li>
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  🔴 Live Site
                </a>
              </li>
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  💻 GitHub Repository
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Projects;
