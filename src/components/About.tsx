
const About = () => {
  const highlights = [
    "3+ Years of Development Experience",
    "10+ Successful Projects Delivered",
    "Full-Stack Expertise",
    "Agile & Team Collaboration",
    "Continuous Learning Mindset"
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-500 to-sky-500 p-1 rounded-2xl w-80 h-80 mx-auto lg:mx-0">
              <div className="bg-slate-200 rounded-xl w-full h-full flex items-center justify-center">
                <span className="text-slate-600 text-lg">Your Photo Here</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg text-slate-700">
              <p className="text-xl leading-relaxed">
                Hello! I'm a passionate Full-Stack Developer with a love for creating 
                innovative web applications that solve real-world problems. My journey 
                in development started with curiosity and has evolved into a career 
                focused on clean, efficient code and exceptional user experiences.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in modern web technologies and enjoy working across the 
                entire development stack. When I'm not coding, you'll find me exploring 
                new technologies, contributing to open-source projects, or sharing 
                knowledge with the developer community.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-900">Key Highlights</h3>
              <div className="grid grid-cols-1 gap-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
