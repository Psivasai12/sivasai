
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download, Sparkles, Star, Zap, Rocket } from "lucide-react";

const Hero = ({ email, setEmail, handleSubmit }) => (
  <>
    {/* Enhanced floating decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-70 shadow-lg shadow-cyan-400/30"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -270, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-10 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-60 shadow-lg shadow-purple-400/30"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.9, 0.4],
          rotate: [0, 180, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 right-20 w-6 h-6"
      >
        <Zap className="w-full h-full text-yellow-400 drop-shadow-lg" />
      </motion.div>
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -15, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute top-1/4 left-1/4 w-5 h-5"
      >
        <Rocket className="w-full h-full text-emerald-400 drop-shadow-lg" />
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-10 flex justify-center"
    >
      <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 border border-cyan-400/30 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(6,182,212,0.15)] hover:shadow-[0_12px_48px_0_rgba(6,182,212,0.2)] transition-all duration-300 group">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="w-6 h-6 text-cyan-400 mr-4" />
        </motion.div>
        <span className="text-base font-medium text-cyan-100 group-hover:text-white transition-colors duration-300">Available for exciting opportunities</span>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mb-10"
    >
      <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight text-center">
        <motion.span 
          className="block bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          DevOps Engineer
        </motion.span>
        <motion.span 
          className="block bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          & Cloud Architect
        </motion.span>
      </h1>
    </motion.div>
    
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-xl lg:text-2xl mb-16 max-w-5xl mx-auto text-gray-200 leading-relaxed font-light text-center"
    >
      Automating infrastructure, optimizing CI/CD pipelines, and building scalable cloud solutions. 
      Passionate about DevOps culture, Infrastructure as Code, and continuous delivery excellence.
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-20"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          size="lg" 
          className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white shadow-[0_20px_60px_0_rgba(59,130,246,0.25)] hover:shadow-[0_30px_80px_0_rgba(59,130,246,0.35)] transition-all duration-500 rounded-2xl px-12 py-5 text-lg font-semibold border-0"
        >
          <span className="relative z-10 flex items-center">
            <Download className="mr-3 h-6 w-6" />
            Download Resume
          </span>
          <motion.div 
            className="absolute inset-0 bg-white/20 rounded-2xl"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </Button>
      </motion.div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-6">
        <motion.div 
          className="relative group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-2xl blur opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
          <Input
            type="email"
            placeholder="Enter your email to get in touch"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="relative w-80 bg-white/10 border border-white/25 text-white placeholder-gray-300 focus:border-cyan-400/60 focus:bg-white/15 rounded-2xl backdrop-blur-xl transition-all duration-300 py-4 px-5 text-lg shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] focus:shadow-[0_12px_48px_0_rgba(6,182,212,0.15)]"
            required
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            type="submit" 
            variant="outline" 
            className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 rounded-2xl backdrop-blur-xl group py-4 px-8 text-lg font-medium shadow-[0_8px_32px_0_rgba(255,255,255,0.08)] hover:shadow-[0_12px_48px_0_rgba(255,255,255,0.12)]"
          >
            <span className="flex items-center">
              Contact Me 
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-3 h-6 w-6" />
              </motion.div>
            </span>
          </Button>
        </motion.div>
      </form>
    </motion.div>
  </>
);

export default Hero;
