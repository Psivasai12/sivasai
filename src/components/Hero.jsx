
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download } from "lucide-react";

const Hero = ({ email, setEmail, handleSubmit }) => (
  <>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight"
    >
      DevOps Engineer & Cloud Architect
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
      className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-12"
    >
      <Button 
        size="lg" 
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg px-8"
      >
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </Button>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email to get in touch"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-72 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-blue-400 rounded-lg"
          required
        />
        <Button 
          type="submit" 
          variant="outline" 
          className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 rounded-lg"
        >
          Contact Me <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </motion.div>
  </>
);

export default Hero;
