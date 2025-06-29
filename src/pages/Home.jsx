import { useEffect } from "react";
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Education from '../sections/Education';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};

export default Home;
