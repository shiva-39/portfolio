import { ArrowDown } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: "Project Lead – Smile Genie",
      company: "Independent Research Project",
      period: "May 2024 – Aug 2024",
      description: "Led an AI-based real-time facial expression analysis project using machine learning to enhance user experience through emotion detection and feedback systems."
    },
    {
      title: "Knowledge Lead – Advanced Academic Center (AAC)",
      company: "GRIET",
      period: "Mar 2024 – Present",
      description: "Conducted peer-led knowledge sessions on cutting-edge technologies and encouraged collaborative technical learning in academic settings."
    }
  ];

  const education = [
    {
      degree: "B.Tech, Computer Science and Engineering",
      school: "Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad",
      period: "2022 – Present",
      description: "Current GPA: 9.1. Focused on data structures, algorithms, object-oriented programming, and distributed systems."
    },
    {
      degree: "Intermediate (MPC)",
      school: "Narayana Junior College, Hyderabad",
      period: "2020 – 2022",
      description: "Percentage: 97.7%. Emphasized Mathematics, Physics, and Chemistry."
    },
    {
      degree: "High School (CBSE)",
      school: "Genius High School, Bhongir",
      period: "2015 – 2020",
      description: "Percentage: 87.8%. Developed strong fundamentals in STEM."
    }
  ];

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 mx-auto mb-6"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            My professional journey and educational background
          </p>
          <a href="/Shiva's_Resume.pdf" download className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2">
            <ArrowDown size={20} />
            <span>Download Resume</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-emerald-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full"></div>
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-slate-900 mb-1">{exp.title}</h4>
                    <p className="text-emerald-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-slate-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-slate-700">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-sky-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full"></div>
                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-slate-900 mb-1">{edu.degree}</h4>
                    <p className="text-sky-600 font-medium mb-2">{edu.school}</p>
                    <p className="text-slate-500 text-sm mb-3">{edu.period}</p>
                    <p className="text-slate-700">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
