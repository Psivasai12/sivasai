
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download, Sparkles, Star } from "lucide-react";

const Hero = ({ email, setEmail, handleSubmit }) => (
  <>
    {/* Floating decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 360, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -180, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-10 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-50"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 right-20 w-4 h-4"
      >
        <Star className="w-full h-full text-yellow-400" />
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-8 flex justify-center"
    >
      <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border border-cyan-400/30 backdrop-blur-sm shadow-lg">
        <Sparkles className="w-5 h-5 text-cyan-400 mr-3" />
        <span className="text-sm font-medium text-cyan-100">Available for exciting opportunities</span>
      </div>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
    >
      <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
        DevOps Engineer
      </span>
      <br />
      <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
        & Cloud Architect
      </span>
    </motion.h1>
    
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-xl lg:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-light"
    >
      Automating infrastructure, optimizing CI/CD pipelines, and building scalable cloud solutions. 
      Passionate about DevOps culture, Infrastructure as Code, and continuous delivery.
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16"
    >
      <Button 
        size="lg" 
        className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 rounded-2xl px-10 py-4 text-lg font-semibold border-0 transform hover:scale-105"
      >
        <span className="relative z-10 flex items-center">
          <Download className="mr-3 h-5 w-5" />
          Download Resume
        </span>
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </Button>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          <Input
            type="email"
            placeholder="Enter your email to get in touch"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="relative w-80 bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:border-cyan-400/50 focus:bg-white/15 rounded-2xl backdrop-blur-sm transition-all duration-300 py-3 px-4 text-lg"
            required
          />
        </div>
        <Button 
          type="submit" 
          variant="outline" 
          className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 rounded-2xl backdrop-blur-sm group py-3 px-6 text-lg font-medium"
        >
          <span className="flex items-center">
            Contact Me 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Button>
      </form>
    </motion.div>
  </>
);

export default Hero;
