
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Your Name</h3>
            <p className="text-slate-300">Full-Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="mailto:your.email@example.com"
              className="p-3 bg-slate-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-sky-500 rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile"
              className="p-3 bg-slate-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-sky-500 rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/yourusername"
              className="p-3 bg-slate-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-sky-500 rounded-lg transition-all duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-6 w-full text-center">
            <p className="text-slate-400">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
