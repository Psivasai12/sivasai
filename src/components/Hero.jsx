
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Download } from "lucide-react";

const Hero = ({ email, setEmail, handleSubmit }) => (
  <>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-5xl font-bold mb-6"
    >
      DevOps Engineer & Cloud Architect
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-xl mb-8 max-w-3xl mx-auto"
    >
      Automating infrastructure, optimizing CI/CD pipelines, and building scalable cloud solutions. 
      Passionate about DevOps culture, Infrastructure as Code, and continuous delivery.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
    >
      <Button size="lg" className="bg-green-600 hover:bg-green-700">
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </Button>
      <form onSubmit={handleSubmit} className="flex">
        <Input
          type="email"
          placeholder="Get in touch via email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-64 mr-2 text-black"
          required
        />
        <Button type="submit" variant="outline">
          Contact Me <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </motion.div>
  </>
);

export default Hero;
