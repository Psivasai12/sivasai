
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <main className="container mx-auto mt-20 text-center">
        <Hero email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
        <Features />
        <TechStack />
        <Projects />
        <Experience />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
