
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

  return (
    <section className="mt-16">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/[0.12] to-white/[0.06] p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-orange-500/20 transition-all duration-300">
              <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                {project.title}
              </h4>
              <p className="text-gray-200 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-200 px-3 py-1 rounded-lg text-sm font-medium border border-orange-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 rounded-xl">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button size="sm" variant="outline" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 rounded-xl">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
