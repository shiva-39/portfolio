import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AbleHire – Inclusive Hiring Platform",
      description: "An AI-powered job search platform with voice search and chatbot. Optimized backend with MongoDB and AWS for scalable, cost-effective data storage.",
      techStack: ["React", "Node.js", "MongoDB", "AWS", "AI/ML"],
      image: "public/ablehireimg.jpeg",
      demoUrl: "https://able-hire.vercel.app/",
      githubUrl: "https://github.com/shiva-39/AbleHire"
    },
    {
      title: "AVA Connect – Welfare Platform",
      description: "A full-stack React and Express system to register 100+ artisans. Features IVR/DTMF integration for inclusive, fault-tolerant reporting and emergency alert broadcasts.",
      techStack: ["React", "Express", "Node.js", "MongoDB", "IVR", "AWS"],
      image: "avalogo.jpeg",
      demoUrl: "",
      githubUrl: "https://github.com/shiva-39/AVA_CREATIONS"
    },
    {
      title: "TripTogether – Real-Time Location Sharing App",
      description: "A secure, real-time location-sharing app using Firebase and Google Maps API. Supports 100+ users with event-driven architecture and low-latency SOS alerts.",
      techStack: ["React", "Firebase", "Google Maps API", "Node.js"],
      image: "trip.jpeg",
      demoUrl: "",
      githubUrl: "https://github.com/shiva-39/TripTogether"
    },
    {
      title: "Smile Genie – AI-based Facial Expression Analysis",
      description: "An AI-powered research project using real-time facial expression analysis to enhance user experience. Applied machine learning models for emotion detection and user feedback.",
      techStack: ["React", "Node.js", "Python", "Machine Learning", "AI"],
      image: "smile.jpeg",
      demoUrl: "",
      githubUrl: "https://github.com/shiva-39?tab=repositories"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my real-world projects designed to deliver secure, scalable, and customer-focused solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                    >
                      <ArrowUp className="rotate-45" size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-2 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 px-4 py-2 rounded-lg font-medium transition-all duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
