import shivaPhoto from '/public/SHIVA_IMG.jpeg';

const About = () => {
  const highlights = [
    "Final-year B.Tech CSE student with a 9.1 GPA",
    "Strong in Data Structures, Algorithms, and OOP",
    "Proficient in Python, Java, JavaScript, SQL, and MERN stack",
    "Experienced in scalable systems using AWS, Firebase",
    "Practiced in CI/CD and Agile methodologies",
    "Built inclusive apps serving 100+ users"
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
            <div className="bg-gradient-to-br from-emerald-500 to-sky-500 p-1 rounded-2xl w-80 h-80 mx-auto lg:mx-0 overflow-hidden">
              <div className="bg-slate-200 rounded-xl w-full h-full flex items-center justify-center overflow-hidden">
                <img 
                  src={shivaPhoto} 
                  alt="Shiva Prasad Neela" 
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg text-slate-700">
              <p className="text-xl leading-relaxed">
                Hi, I'm Shiva Prasad Neela, a final-year Computer Science student at GRIET with a 9.1 GPA. I build secure, scalable, and user-focused web applications using the MERN stack, AWS, and Firebase.
                I have a strong foundation in data structures, algorithms, and object-oriented design, and I apply Agile and CI/CD practices to deliver high-quality software. My projects serve 100+ users and focus on inclusive, impactful design.
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
