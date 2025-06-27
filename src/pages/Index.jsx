
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

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header />
      <motion.main 
        className="container mx-auto mt-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Hero email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
        <Features />
        <TechStack />
        <Projects />
        <Experience />
        <Testimonials />
      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default Index;
