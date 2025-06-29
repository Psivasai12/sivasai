
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
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950/50 to-slate-900"></div>
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative z-10 text-white">
        <Header />
        
        <main className="container mx-auto mt-8 px-4 max-w-7xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 py-20"
          >
            <div className="relative">
              {/* Glow effect behind hero */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
                <Hero email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
              </div>
            </div>
          </motion.div>
          
          {/* Content Sections */}
          <div className="space-y-20">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 lg:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_16px_64px_0_rgba(31,38,135,0.5)] transition-all duration-500">
                <Features />
              </div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 lg:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_16px_64px_0_rgba(31,38,135,0.5)] transition-all duration-500">
                <TechStack />
              </div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-red-600/10 to-pink-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 lg:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_16px_64px_0_rgba(31,38,135,0.5)] transition-all duration-500">
                <Projects />
              </div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 lg:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_16px_64px_0_rgba(31,38,135,0.5)] transition-all duration-500">
                <Experience />
              </div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 via-green-600/10 to-emerald-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 lg:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_16px_64px_0_rgba(31,38,135,0.5)] transition-all duration-500">
                <Testimonials />
              </div>
            </motion.section>
          </div>
        </main>
      </div>
      
      <div className="relative z-10 mt-32">
        <Footer />
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Index;
