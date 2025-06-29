import { Fade } from 'react-awesome-reveal';

const experienceData = [
  {
    title: 'Aspiring Frontend Developer',
    company: 'Fresher',
    period: 'Currently Exploring Opportunities',
    description: [
      'Enthusiastic and self-motivated with a strong foundation in web technologies and modern JavaScript frameworks.',
      'Completed several personal projects focused on responsive design, clean UI/UX, and functional frontend logic.',
      'Actively learning and contributing to open-source projects to enhance real-world problem-solving and collaboration skills.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20">
      <Fade direction="up" triggerOnce>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          <span className="border-b-4 border-yellow-400 pb-1">Experience</span>
        </h2>

        <div className="space-y-8">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="border-l-4 border-yellow-400 bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition"
            >
              <h3 className="text-2xl font-bold text-gray-800">{exp.title}</h3>
              <p className="text-base text-gray-600 font-medium">
                {exp.company} — <span className="text-gray-500 font-bold">{exp.period}</span>
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700 text-justify space-y-2 leading-relaxed">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Experience;
