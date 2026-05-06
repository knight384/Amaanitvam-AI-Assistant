import React, { useState } from "react";
import { motion } from "motion/react";
import { Heart, ShieldCheck, Zap, Globe, Sparkles, CheckCircle2, ArrowRight, Users } from "lucide-react";
import { cn } from "../lib/utils";

const impactTiers = [
  {
    amount: "500",
    label: "Digital Starter",
    impact: "Provides basic internet access for 5 students for a month.",
    icon: Globe,
    color: "from-blue-500 to-blue-600",
  },
  {
    amount: "2000",
    label: "AI Explorer",
    impact: "Funds an AI foundational workshop for a local community group.",
    icon: Zap,
    color: "from-brand-purple to-purple-600",
  },
  {
    amount: "5000",
    label: "Tech Trailblazer",
    impact: "Provides a refurbished laptop and 1-year of digital mentoring.",
    icon: Sparkles,
    color: "from-brand-cyan to-cyan-600",
    popular: true,
  },
];

export const Donate = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-black mb-8"
          >
            Invest in <span className="text-brand-purple">Impact</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg"
          >
            Your contribution directly funds technology infrastructure and training for 
            those who need it most. 100% of public donations go to field projects.
          </motion.p>
        </div>

        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto glass p-12 text-center rounded-[3rem]"
          >
            <div className="w-20 h-20 bg-brand-cyan rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-brand-cyan/20">
              <Heart size={40} className="text-black" />
            </div>
            <h2 className="text-4xl font-bold mb-4">You're a Hero!</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Your donation has been successfully processed. Access to technology transforms lives, 
              and you've just made that possible for someone today.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="bg-brand-purple text-white px-10 py-4 rounded-2xl font-black hover:bg-brand-purple/80 transition-all"
            >
              Back to Support
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Impact Tiers */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              {impactTiers.map((tier, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setSelectedTier(tier.amount); setCustomAmount(""); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "relative glass p-8 rounded-[2.5rem] text-left transition-all border-2",
                    selectedTier === tier.amount ? "border-brand-purple bg-brand-purple/5" : "border-transparent",
                    tier.popular ? "md:scale-105 z-10" : "scale-100"
                  )}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                      Most Impact
                    </div>
                  )}
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br text-white shadow-lg", tier.color)}>
                    <tier.icon size={24} />
                  </div>
                  <div className="text-4xl font-black mb-1">₹{tier.amount}</div>
                  <div className="text-brand-cyan font-bold text-sm mb-4">{tier.label}</div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {tier.impact}
                  </p>
                </motion.button>
              ))}
            </div>

            {/* Donation Form */}
            <div className="glass p-8 md:p-10 rounded-[2.5rem] sticky top-24">
              <h3 className="text-2xl font-bold mb-8">Make a Contribution</h3>
              
              <form onSubmit={handleDonate} className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-4">Choose Amount</label>
                  <div className="relative group">
                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold">₹</span>
                    <input 
                      type="number"
                      value={customAmount || (selectedTier || "")}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedTier(null);
                      }}
                      placeholder="Custom Amount"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-10 pr-6 text-2xl font-bold focus:outline-none focus:border-brand-cyan transition-all group-hover:bg-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl glass border-white/5">
                    <ShieldCheck className="text-brand-cyan" size={24} />
                    <div className="text-xs text-gray-400">
                      <span className="font-bold text-white block mb-1 uppercase tracking-widest">Secure SSL Encryption</span>
                      Your payment information is handled safely.
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing || (!selectedTier && !customAmount)}
                  className="w-full bg-white text-black py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all enabled:hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full"
                    />
                  ) : (
                    <>Complete Payment <ArrowRight size={20} /></>
                  )}
                </button>

                <p className="text-[10px] text-gray-600 text-center uppercase tracking-widest font-black">
                  Amaanitvam Foundation is a registered 501(c)(3) nonprofit.
                </p>
              </form>
            </div>
          </div>
        )}

        {/* Fundraising Progress Section */}
        <section className="mt-20 mb-20">
          <div className="glass p-8 md:p-12 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap size={120} className="text-brand-cyan" />
            </div>
            
            <div className="max-w-3xl relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-brand-cyan">Active Campaign</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Build a Digital Lab for Rural Schools</h2>
              <p className="text-gray-400 mb-10 text-lg">
                We are raising funds to equip 5 remote villages in the Himalayan region with modular 
                AI labs and reliable satellite internet connection.
              </p>

              <div className="space-y-8">
                {/* Progress Bar Container */}
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-4xl font-black text-white">₹15,20,000</span>
                      <span className="text-gray-500 font-bold ml-2">raised of ₹25,00,000 goal</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-brand-purple">65%</span>
                    </div>
                  </div>
                  
                  {/* The actual progress bar */}
                  <div className="h-6 w-full bg-white/5 rounded-full p-1 border border-white/10 relative group cursor-help">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-brand-purple via-brand-cyan to-white rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[shimmer_2s_linear_infinite]" />
                    </motion.div>

                    {/* Interactive Milestones */}
                    {[25, 50, 75].map((milestone) => (
                      <div 
                        key={milestone}
                        className="absolute top-1/2 -translate-y-1/2 w-1 h-3 bg-white/20 rounded-full"
                        style={{ left: `${milestone}%` }}
                      >
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                          Phase {milestone/25}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <div className="flex items-center gap-2">
                      <Users size={12} />
                      412 Global Donors
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap size={12} className="text-brand-cyan" />
                      12 Days Remaining
                    </div>
                  </div>
                </div>

                {/* Milestone Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { phase: "Phase 1", status: "Completed", desc: "Logistics & Site Prep", current: true },
                    { phase: "Phase 2", status: "In Progress", desc: "Hardware Procurement", current: true },
                    { phase: "Phase 3", status: "Pending", desc: "Training & Launch", current: false },
                  ].map((m, i) => (
                    <div key={i} className={cn(
                      "p-4 rounded-2xl border transition-all",
                      m.current ? "bg-white/5 border-white/10" : "bg-black/20 border-white/5 opacity-50"
                    )}>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-black text-brand-cyan uppercase tracking-widest">{m.phase}</span>
                        {m.status === "Completed" && <CheckCircle2 size={12} className="text-green-500" />}
                      </div>
                      <div className="text-sm font-bold text-white mb-1">{m.desc}</div>
                      <div className="text-[10px] text-gray-500 font-medium">{m.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Visual Section */}
        <section className="mt-32 border-t border-white/5 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Where does my <br /> money go?</h2>
              <ul className="space-y-6">
                {[
                  "Acquiring high-quality hardware for rural hubs",
                  "Subsiding digital literacy teachers' honorariums",
                  "Developing localized AI educational tools",
                  "Community outreach and enrollment programs",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="text-brand-cyan flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square glass rounded-full flex items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-brand-purple/10 blur-[80px]" />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 0]
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                  className="w-full h-full border border-brand-purple/20 rounded-full border-dashed flex items-center justify-center"
                >
                  <Heart size={120} className="text-brand-purple opacity-50" />
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-10">
                  <div className="text-6xl font-black text-white mb-2">92%</div>
                  <div className="text-xs uppercase tracking-widest font-black text-brand-cyan">Direct Field Funding</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
