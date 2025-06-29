import { Fade } from 'react-awesome-reveal';

const educationData = [
  {
  degree: 'Diploma in Engineering',
  institution: 'Thakurgaon Polytechnic Institute',
  year: '2014 - 2018',
  description:
    'Completed a 4-year Diploma in Engineering with a strong foundation in core technical subjects, applied mathematics, physics, and hands-on training. Gained practical experience through lab work, technical workshops, and real-world project implementations under guidance.',
}

];

const Education = () => {
  return (
    <section id="education" className="max-w-5xl mx-auto pt-20 px-6">
      <Fade direction="up" triggerOnce>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          <span className="border-b-4 border-yellow-400 pb-1">Education</span>
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="border-l-4 border-yellow-400 bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
              <p className="text-lg text-gray-600">
                {edu.institution} — <span className="text-gray-500">{edu.year}</span>
              </p>
              <p className="mt-3 text-gray-700 text-justify leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Education;
