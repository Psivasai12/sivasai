
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download } from "lucide-react";

const Hero = ({ email, setEmail, handleSubmit }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-5xl font-bold mb-6"
    >
      DevOps Engineer & Cloud Architect
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-xl mb-8 max-w-3xl mx-auto"
    >
      Automating infrastructure, optimizing CI/CD pipelines, and building scalable cloud solutions. 
      Passionate about DevOps culture, Infrastructure as Code, and continuous delivery.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button size="lg" className="bg-green-600 hover:bg-green-700 transition-all duration-300">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </motion.div>
      <motion.form 
        onSubmit={handleSubmit} 
        className="flex"
        whileHover={{ scale: 1.02 }}
      >
        <Input
          type="email"
          placeholder="Get in touch via email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-64 mr-2 text-black transition-all duration-300 focus:ring-2 focus:ring-green-400"
          required
        />
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button type="submit" variant="outline" className="transition-all duration-300">
            Contact Me <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  </motion.div>
);

export default Hero;
