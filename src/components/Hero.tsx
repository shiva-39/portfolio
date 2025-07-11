import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-2 h-2 bg-slate-500 rounded-full"></div>
          <div className="absolute top-20 right-20 w-2 h-2 bg-slate-500 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-slate-500 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-2 h-2 bg-slate-500 rounded-full"></div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-sky-200 bg-clip-text text-transparent">
            Shiva Prasad Neela
          </h1>
          <h2 className="text-2xl md:text-3xl text-emerald-400 font-semibold mb-6">
            Aspiring Software Engineer | Full-Stack Developer
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Final-year CS student skilled in data structures, algorithms, and building secure, scalable web solutions.
             </p>
          <button
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Projects
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-slate-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
