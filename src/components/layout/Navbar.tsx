import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, BrainCircuit, Heart, Users, Home } from "lucide-react";
import { cn } from "../../lib/utils";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "AI Assistant", path: "/assistant", icon: BrainCircuit },
  { name: "Volunteer", path: "/volunteer", icon: Users },
  { name: "Donate", path: "/donate", icon: Heart },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
        isScrolled ? "bg-black/60 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-purple rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-brand-purple/20">
            <BrainCircuit className="text-white w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Amaanitvam
            </span>
            <span className="block text-[10px] uppercase tracking-widest text-brand-cyan font-bold leading-none">
              Foundation
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 glass p-1 rounded-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all relative",
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {item.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link
            to="/donate"
            className="bg-brand-purple hover:bg-brand-purple/80 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg shadow-brand-purple/30 hover:scale-105 active:scale-95"
          >
            Support Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 glass-dark rounded-2xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl transition-all",
                    location.pathname === item.path ? "bg-brand-purple text-white" : "text-gray-400 hover:bg-white/5"
                  )}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
