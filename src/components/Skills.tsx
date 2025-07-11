const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Web Development",
      skills: [
        { name: "React", level: 90 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 88 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Backend & Cloud",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 83 },
        { name: "MongoDB", level: 80 },
        { name: "SQL", level: 78 },
        { name: "AWS", level: 80 },
        { name: "Google Cloud", level: 78 },
        { name: "Firebase", level: 80 }
      ]
    },
    {
      title: "Core CS & Other Skills",
      skills: [
        { name: "Data Structures & Algorithms", level: 90 },
        { name: "Object-Oriented Design", level: 88 },
        { name: "Operating Systems", level: 85 },
        { name: "Application Security", level: 80 },
        { name: "CI/CD", level: 82 },
        { name: "Git / GitHub", level: 90 },
        { name: "Problem Solving", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies, frameworks, and computer science concepts I use to build secure, scalable, and customer-focused solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-sky-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
