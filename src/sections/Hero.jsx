// src/sections/Hero.jsx
import { Fade } from 'react-awesome-reveal';
import profilePhoto from '../assets/profile-photo.jpg'; // Replace with your photo

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 bg-white text-center"
    >
      <Fade direction="up" cascade damping={0.2} triggerOnce>
        <img
          src={profilePhoto}
          alt="Md. Firozzaman"
          className="w-50 h-50 rounded-full border-4 border-yellow-400 shadow-lg object-cover mb-6"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-700 mb-2">
          Hi, I'm <span className="text-yellow-500">Md. Firozzaman</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Frontend Developer | React & Tailwind CSS Enthusiast
        </p>

       <a
        href="https://drive.google.com/file/d/1FSuxzuyWvCqzO2T7R2svijYgdC-CYHW6/view?usp=sharing" target='_blank'
        download
        className="
            inline-block
            bg-yellow-400
            hover:bg-yellow-500
            text-white
            font-semibold
            rounded-full
            shadow
            transition
            mb-8
            w-full
            text-base sm:text-lg md:text-xl
            px-4 sm:px-6 md:px-8
            py-2.5 sm:py-3 md:py-3.5
            text-center
        "
        >
        My Resume
        </a>

        <div className="flex space-x-6 text-2xl text-gray-600">
          <a
            href="https://github.com/Firoz800528"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/firoz-zaman-357423361/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://x.com/FZaman800528"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
          >
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
