import React, { useState } from "react";
import { motion } from "motion/react";
import { Users, Code, BookOpen, Mic2, Heart, CheckCircle2, Send, Laptop, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

const roles = [
  {
    icon: Code,
    title: "Tech Mentor",
    desc: "Teach coding, AI basics, or digital tools to motivated youth in our community hubs.",
    commitment: "4-6 hours / week",
    color: "bg-blue-500",
  },
  {
    icon: BookOpen,
    title: "Content Creator",
    desc: "Help us design accessible learning materials and local language educational content.",
    commitment: "Flexible hours",
    color: "bg-brand-purple",
  },
  {
    icon: Mic2,
    title: "Outreach Lead",
    desc: "Speak at local schools and community gatherings to raise awareness about digital equity.",
    commitment: "Seasonal",
    color: "bg-brand-cyan",
  },
  {
    icon: Laptop,
    title: "Systems Support",
    desc: "Assist in maintaining the hardware and network infrastructure at our Foundation centers.",
    commitment: "8 hours / month",
    color: "bg-orange-500",
  },
];

export const Volunteer = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full glass border-white/5 text-brand-cyan text-xs font-black uppercase tracking-widest mb-6"
          >
            <Sparkles size={12} />
            Join the Movement
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black mb-8"
          >
            Become an <span className="bg-gradient-to-r from-brand-secondary to-white bg-clip-text text-transparent">Amaanitvam</span> <br /> Ambassador
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
          >
            Use your skills to change lives. Whether you're a tech expert or a passionate community organizer, there's a place for you here.
          </motion.p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-[2.5rem] relative overflow-hidden group"
            >
              <div className={cn("inline-flex p-3 rounded-2xl mb-6 text-white shadow-lg", role.color)}>
                <role.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{role.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {role.desc}
              </p>
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Commitment</span>
                <span className="text-[10px] uppercase font-bold text-white">{role.commitment}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Application Form */}
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <Users className="text-white/5 w-32 h-32 rotate-12" />
          </div>

          {formStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20">
                <CheckCircle2 size={40} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Application Received!</h2>
              <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                Thank you for your interest in joining Amaanitvam. Our team will review your application and reach out within 48 hours.
              </p>
              <button 
                onClick={() => setFormStatus("idle")}
                className="text-brand-cyan font-bold hover:underline"
              >
                Send another application
              </button>
            </motion.div>
          ) : (
            <>
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-2">Volunteer Application</h2>
                <p className="text-gray-400">Please fill out the form below and we'll get in touch.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Preferred Role</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-all appearance-none cursor-pointer">
                    <option className="bg-brand-bg">Tech Mentor</option>
                    <option className="bg-brand-bg">Content Creator</option>
                    <option className="bg-brand-bg">Outreach Lead</option>
                    <option className="bg-brand-bg">Systems Support</option>
                    <option className="bg-brand-bg">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Why do you want to join us?</label>
                  <textarea 
                    required
                    placeholder="Tell us a bit about your motivation..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-purple transition-all min-h-[150px] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full bg-brand-purple hover:bg-brand-purple/80 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all disabled:opacity-50"
                >
                  {formStatus === "submitting" ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>Submit Application <Send size={20} /></>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Loader2 = ({ className }: { className?: string }) => (
  <svg className={cn("animate-spin", className)} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);
