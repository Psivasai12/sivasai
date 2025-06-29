
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto mt-20 text-center px-4">
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 mb-12 border border-white/10 shadow-2xl">
            <Hero email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
          </div>
          
          <div className="space-y-24">
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl">
              <Features />
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl">
              <TechStack />
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl">
              <Projects />
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl">
              <Experience />
            </div>
            
            <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10 shadow-xl">
              <Testimonials />
            </div>
          </div>
        </main>
      </div>
      
      <div className="relative z-10 mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
