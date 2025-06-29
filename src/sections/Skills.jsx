import { Fade } from 'react-awesome-reveal';

const Skills = () => {
  const frontendSkills = [
    { name: 'React', color: 'sky' },
    { name: 'JavaScript', color: 'yellow' },
    { name: 'Tailwind CSS', color: 'cyan' },
    { name: 'HTML5', color: 'orange' },
    { name: 'CSS3', color: 'blue' },
    { name: 'DaisyUI', color: 'purple' },
  ];

  const backendSkills = [
    { name: 'Node.js', color: 'green' },
    { name: 'Express', color: 'gray' },
    { name: 'MongoDB', color: 'emerald' },
  ];

  const tools = [
    { name: 'Git', color: 'red' },
    { name: 'GitHub', color: 'black' },
    { name: 'VSCode', color: 'blue' },
    { name: 'Chrome DevTools', color: 'yellow' },
  ];

  const colorMap = {
    sky: 'text-sky-700 bg-sky-50 border-sky-300',
    yellow: 'text-yellow-700 bg-yellow-50 border-yellow-300',
    cyan: 'text-cyan-700 bg-cyan-50 border-cyan-300',
    orange: 'text-orange-700 bg-orange-50 border-orange-300',
    blue: 'text-blue-700 bg-blue-50 border-blue-300',
    purple: 'text-purple-700 bg-purple-50 border-purple-300',
    green: 'text-green-700 bg-green-50 border-green-300',
    gray: 'text-gray-700 bg-gray-50 border-gray-300',
    emerald: 'text-emerald-700 bg-emerald-50 border-emerald-300',
    indigo: 'text-indigo-700 bg-indigo-50 border-indigo-300',
    red: 'text-red-700 bg-red-50 border-red-300',
    black: 'text-black bg-gray-100 border-gray-300',
  };

  const renderSkillGroup = (title, skills) => (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map(({ name, color }) => (
          <span
            key={name}
            className={`px-4 py-2 text-sm font-medium border rounded-full shadow-sm hover:shadow-md transition ${colorMap[color]}`}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 pt-20">
      <Fade direction="up" cascade damping={0.1} triggerOnce>
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          <span className="border-b-4 border-yellow-400 pb-1">Skills</span>
        </h2>

        {renderSkillGroup('Frontend Development', frontendSkills)}
        {renderSkillGroup('Backend Development', backendSkills)}
        {renderSkillGroup('Tools', tools)}
      </Fade>
    </section>
  );
};

export default Skills;
