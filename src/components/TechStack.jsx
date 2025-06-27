
import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
    { category: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud", "DigitalOcean"] },
    { category: "Containers & Orchestration", items: ["Docker", "Kubernetes", "Docker Swarm", "Helm"] },
    { category: "Infrastructure as Code", items: ["Terraform", "CloudFormation", "Ansible", "Pulumi"] },
    { category: "CI/CD Tools", items: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps"] },
    { category: "Monitoring & Logging", items: ["Prometheus", "Grafana", "ELK Stack", "Datadog"] },
    { category: "Programming & Scripting", items: ["Python", "Bash", "Go", "JavaScript", "YAML"] }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      className="mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h3 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technology Stack
      </motion.h3>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.category}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20 transition-all duration-300 hover:bg-opacity-15 hover:shadow-lg hover:shadow-green-400/10"
          >
            <motion.h4 
              className="text-xl font-semibold mb-4 text-green-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {tech.category}
            </motion.h4>
            <motion.div 
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {tech.items.map((item, itemIndex) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + itemIndex * 0.05 + 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-green-600 bg-opacity-20 text-green-300 px-3 py-1 rounded-full text-sm cursor-default transition-all duration-200 hover:bg-opacity-30"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TechStack;
