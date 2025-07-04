
import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact email:", email);
    alert(`Thank you for reaching out! I'll get back to you at ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Multi-layered animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>
      
      {/* Animated mesh gradients */}
      <div className="fixed inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-purple-500/40 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/4 -right-32 w-80 h-80 bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-red-500/40 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-400/30 via-teal-500/30 to-cyan-500/30 rounded-full filter blur-3xl"
        />
      </div>
      
      {/* Geometric patterns overlay */}
      <div className="fixed inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, white 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}
        />
      </div>
      
      {/* Floating orbs */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-white/10 to-cyan-400/20"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-white">
        <Header />
        
        <main className="container mx-auto mt-8 px-4 max-w-7xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 py-20"
          >
            <div className="relative">
              {/* Dynamic hero background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/15 to-pink-500/10 rounded-3xl blur-3xl"></div>
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] border border-white/20 rounded-3xl p-12 shadow-[0_20px_80px_0_rgba(0,0,0,0.3)] hover:shadow-[0_30px_100px_0_rgba(59,130,246,0.15)] transition-all duration-700"
              >
                <Hero email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content Sections with enhanced styling */}
          <div className="space-y-20">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/8 via-cyan-500/12 to-blue-500/8 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-700"></div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.09] via-white/[0.06] to-white/[0.03] border border-white/15 rounded-3xl p-8 lg:p-12 shadow-[0_25px_90px_0_rgba(0,0,0,0.25)] hover:shadow-[0_35px_120px_0_rgba(16,185,129,0.12)] transition-all duration-700"
              >
                <Features />
              </motion.div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/8 via-pink-500/12 to-rose-500/8 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-700"></div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.09] via-white/[0.06] to-white/[0.03] border border-white/15 rounded-3xl p-8 lg:p-12 shadow-[0_25px_90px_0_rgba(0,0,0,0.25)] hover:shadow-[0_35px_120px_0_rgba(147,51,234,0.12)] transition-all duration-700"
              >
                <TechStack />
              </motion.div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/8 via-amber-500/12 to-yellow-500/8 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-700"></div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.09] via-white/[0.06] to-white/[0.03] border border-white/15 rounded-3xl p-8 lg:p-12 shadow-[0_25px_90px_0_rgba(0,0,0,0.25)] hover:shadow-[0_35px_120px_0_rgba(249,115,22,0.12)] transition-all duration-700"
              >
                <Projects />
              </motion.div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/8 via-blue-500/12 to-cyan-500/8 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-700"></div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.09] via-white/[0.06] to-white/[0.03] border border-white/15 rounded-3xl p-8 lg:p-12 shadow-[0_25px_90px_0_rgba(0,0,0,0.25)] hover:shadow-[0_35px_120px_0_rgba(99,102,241,0.12)] transition-all duration-700"
              >
                <Experience />
              </motion.div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/8 via-green-500/12 to-emerald-500/8 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-700"></div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative backdrop-blur-2xl bg-gradient-to-br from-white/[0.09] via-white/[0.06] to-white/[0.03] border border-white/15 rounded-3xl p-8 lg:p-12 shadow-[0_25px_90px_0_rgba(0,0,0,0.25)] hover:shadow-[0_35px_120px_0_rgba(20,184,166,0.12)] transition-all duration-700"
              >
                <Testimonials />
              </motion.div>
            </motion.section>
          </div>
        </main>
      </div>
      
      <div className="relative z-10 mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
