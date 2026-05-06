import React from "react";
import { motion } from "motion/react";
import { ArrowRight, BrainCircuit, Users, Globe, ExternalLink, Milestone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        {/* Background Gradients */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-cyan/20 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-purple/20 text-brand-secondary text-sm font-semibold mb-8"
          >
            <Sparkles size={14} className="text-brand-cyan" />
            Empowering Through Intelligence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
          >
            Humanity Meets <br />
            <span className="bg-gradient-to-r from-brand-cyan via-white to-brand-purple bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed"
          >
            Amaanitvam Foundation leverages cutting-edge AI to bridge the digital divide 
            and provide quality education and support to underprivileged communities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/assistant"
              className="w-full md:w-auto bg-brand-purple hover:bg-brand-purple/80 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all group"
            >
              Try AI Assistant <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/donate"
              className="w-full md:w-auto glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
            >
              Make an Impact
            </Link>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-bg to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Lives Impacted", value: "50K+", icon: Users, color: "text-brand-cyan" },
              { label: "AI Sessions", value: "1.2M", icon: BrainCircuit, color: "text-brand-purple" },
              { label: "Global Partners", value: "24", icon: Globe, color: "text-brand-secondary" },
              { label: "Project Cities", value: "12", icon: Milestone, color: "text-white" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl text-center space-y-4"
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Core Initiatives</h2>
              <p className="text-gray-400 text-lg">
                We combine human empathy with technological precision to solve the 
                most pressing challenges in digital literacy.
              </p>
            </div>
            <Link to="#" className="flex items-center gap-2 text-brand-cyan font-bold hover:underline">
              View all projects <ExternalLink size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Project Saksham",
                desc: "Empowering rural youth with basic AI and computing skills for modern employment.",
                img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
                tag: "Education",
              },
              {
                title: "Tele-Assistance",
                desc: "An AI-powered vernacular companion for senior citizens in remote locations.",
                img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800",
                tag: "Health Tech",
              },
              {
                title: "Amaanitvam Hub",
                desc: "Community centers equipped with hardware for digital exploration and learning.",
                img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
                tag: "Community",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group glass rounded-3xl overflow-hidden"
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 glass-dark rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-cyan">
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                  <button className="text-white font-bold flex items-center gap-2 group/btn">
                    Learn More <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
          {/* Gradient blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-purple/20 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-cyan/20 blur-[80px]" />

          <h2 className="text-3xl md:text-5xl font-black mb-8">Ready to be part of the <br /> technological revolution?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
            Whether you choose to donate your time or resources, your contribution 
            makes a tangible difference in bridging the digital gap.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/volunteer" className="w-full md:w-auto bg-white text-black px-10 py-4 rounded-2xl font-black hover:bg-gray-200 transition-all shadow-xl">
              Become a Volunteer
            </Link>
            <Link to="/donate" className="w-full md:w-auto border border-white/20 hover:bg-white/5 text-white px-10 py-4 rounded-2xl font-black transition-all">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
