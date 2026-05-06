import React from "react";
import { Link } from "react-router-dom";
import { BrainCircuit, Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center">
                <BrainCircuit className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight">Amaanitvam</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering communities through digital literacy and AI innovation. 
              Bridging the technology gap for a more equitable future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-cyan hover:border-brand-cyan transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-brand-cyan transition-colors">Digital Literacy</Link></li>
              <li><Link to="#" className="hover:text-brand-cyan transition-colors">AI Workshops</Link></li>
              <li><Link to="#" className="hover:text-brand-cyan transition-colors">Youth Mentorship</Link></li>
              <li><Link to="#" className="hover:text-brand-cyan transition-colors">Women in Tech</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Organization</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="#" className="hover:text-brand-cyan transition-colors">Our Mission</Link></li>
              <li><Link to="#" className="hover:text-brand-cyan transition-colors">Team</Link></li>
              <li><Link to="/volunteer" className="hover:text-brand-cyan transition-colors">Volunteer</Link></li>
              <li><Link to="/donate" className="hover:text-brand-cyan transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest impact reports and stories.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-purple flex-1"
              />
              <button className="bg-brand-purple text-white p-2 rounded-lg hover:bg-brand-purple/80 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 Amaanitvam Foundation. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
