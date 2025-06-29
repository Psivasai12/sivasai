
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const Hero = ({ email, setEmail, handleSubmit }) => (
  <>
    {/* Animated floating elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-40"
      />
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          x: [0, 5, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 left-5 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-50"
      />
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="mb-6 flex justify-center"
    >
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 border border-white/[0.08] backdrop-blur-sm">
        <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
        <span className="text-sm text-gray-300">Available for exciting opportunities</span>
      </div>
    </motion.div>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
    >
      <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
        DevOps Engineer
      </span>
      <br />
      <span className="bg-gradient-to-r from-cyan-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
        & Cloud Architect
      </span>
    </motion.h2>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-lg lg:text-xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed"
    >
      Automating infrastructure, optimizing CI/CD pipelines, and building scalable cloud solutions. 
      Passionate about DevOps culture, Infrastructure as Code, and continuous delivery.
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12"
    >
      <Button 
        size="lg" 
        className="relative overflow-hidden group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 rounded-xl px-8 py-3 border-0"
      >
        <span className="relative z-10 flex items-center">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Button>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative">
          <Input
            type="email"
            placeholder="Enter your email to get in touch"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-72 bg-white/[0.05] border border-white/[0.1] text-white placeholder-gray-400 focus:border-blue-400/50 focus:bg-white/[0.08] rounded-xl backdrop-blur-sm transition-all duration-300"
            required
          />
        </div>
        <Button 
          type="submit" 
          variant="outline" 
          className="border border-white/[0.2] bg-white/[0.05] text-white hover:bg-white/[0.1] hover:border-white/[0.3] transition-all duration-300 rounded-xl backdrop-blur-sm group"
        >
          <span className="flex items-center">
            Contact Me 
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </Button>
      </form>
    </motion.div>
  </>
);

export default Hero;
