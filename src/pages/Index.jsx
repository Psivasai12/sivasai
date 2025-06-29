
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
    // Here you would typically send the email to your backend
    alert(`Thank you for reaching out! I'll get back to you at ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>
      
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto mt-8 px-4 max-w-7xl">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 py-20"
          >
            <div className="backdrop-blur-xl bg-white/[0.03] rounded-2xl p-12 border border-white/10 shadow-2xl">
              <Hero email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
            </div>
          </motion.div>
          
          {/* Content Sections */}
          <div className="space-y-20">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/[0.02] rounded-2xl p-8 lg:p-12 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Features />
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/[0.02] rounded-2xl p-8 lg:p-12 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <TechStack />
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/[0.02] rounded-2xl p-8 lg:p-12 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Projects />
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/[0.02] rounded-2xl p-8 lg:p-12 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Experience />
            </motion.section>
            
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/[0.02] rounded-2xl p-8 lg:p-12 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <Testimonials />
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
