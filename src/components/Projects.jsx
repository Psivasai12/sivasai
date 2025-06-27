
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Automation",
      description: "Terraform modules for deploying scalable applications across AWS, Azure, and GCP with automated disaster recovery.",
      technologies: ["Terraform", "AWS", "Azure", "Kubernetes"],
      github: "#",
      demo: "#"
    },
    {
      title: "GitOps CI/CD Pipeline",
      description: "Complete GitOps workflow using ArgoCD, Jenkins, and Kubernetes for automated deployments with rollback capabilities.",
      technologies: ["ArgoCD", "Jenkins", "Kubernetes", "Helm"],
      github: "#",
      demo: "#"
    },
    {
      title: "Monitoring & Alerting Stack",
      description: "Comprehensive monitoring solution with Prometheus, Grafana, and custom alerting for microservices architecture.",
      technologies: ["Prometheus", "Grafana", "AlertManager", "Docker"],
      github: "#",
      demo: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
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
        Featured Projects
      </motion.h3>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03, 
              y: -8,
              transition: { duration: 0.3 }
            }}
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20 transition-all duration-300 hover:bg-opacity-15 hover:shadow-lg hover:shadow-blue-400/10"
          >
            <motion.h4 
              className="text-xl font-semibold mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {project.title}
            </motion.h4>
            <motion.p 
              className="text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {project.description}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + techIndex * 0.05 + 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-600 bg-opacity-20 text-blue-300 px-2 py-1 rounded text-sm transition-all duration-200 hover:bg-opacity-30"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" variant="outline" className="transition-all duration-200">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="sm" variant="outline" className="transition-all duration-200">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
