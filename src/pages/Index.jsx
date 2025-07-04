
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
      {/* Dynamic gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"></div>
      
      {/* Animated gradient overlays */}
      <div className="fixed inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/25 to-pink-500/25 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
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
              {/* Hero glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative backdrop-blur-sm bg-white/[0.05] border border-white/10 rounded-3xl p-12 shadow-2xl">
                <Hero email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
              </div>
            </div>
          </motion.div>
          
          {/* Content Sections */}
          <div className="space-y-16">
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
              <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                <Features />
              </div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-3xl blur-xl"></div>
              <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                <TechStack />
              </div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10 rounded-3xl blur-xl"></div>
              <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
                <Projects />
              </div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl"></div>
              <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
                <Experience />
              </div>
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-green-500/10 to-emerald-500/10 rounded-3xl blur-xl"></div>
              <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl hover:shadow-teal-500/10 transition-all duration-500">
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
