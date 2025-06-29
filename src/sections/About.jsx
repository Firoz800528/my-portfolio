// src/sections/About.jsx
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto pt-20 px-6">
      <Fade direction="up" triggerOnce>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          <span className="border-b-4 border-yellow-400 pb-1">About Me</span>
        </h2>

        <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
          <p>
            Hello! I’m <strong className="text-gray-900">Md. Firozzaman</strong>, a passionate frontend developer with a love for building beautiful and functional web applications. My programming journey began in high school when I discovered HTML and CSS — and I’ve been hooked ever since.
          </p>

          <p>
            I specialize in creating interactive user interfaces with technologies like <strong>React</strong> and <strong>Tailwind CSS</strong>. I value clean code, thoughtful design, and delivering seamless user experiences.
          </p>

          <p>
            Outside the code editor, I’m a creative spirit — an avid painter, nature explorer, and occasional weekend soccer player. These interests fuel my creativity and help me stay inspired.
          </p>

          <p>
            I’m always open to learning new tools and collaborating with other passionate developers. Let’s build something great together!
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default About;
