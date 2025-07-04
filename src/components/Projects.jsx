
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multi-Cloud Infrastructure Automation",
      description: "Terraform modules for deploying scalable applications across AWS, Azure, and GCP with automated disaster recovery and cost optimization.",
      technologies: ["Terraform", "AWS", "Azure", "Kubernetes"],
      github: "#",
      demo: "#"
    },
    {
      title: "GitOps CI/CD Pipeline",
      description: "Complete GitOps workflow using ArgoCD, Jenkins, and Kubernetes for automated deployments with advanced rollback capabilities and monitoring.",
      technologies: ["ArgoCD", "Jenkins", "Kubernetes", "Helm"],
      github: "#",
      demo: "#"
    },
    {
      title: "Monitoring & Alerting Stack",
      description: "Comprehensive monitoring solution with Prometheus, Grafana, and custom alerting for microservices architecture with real-time dashboards.",
      technologies: ["Prometheus", "Grafana", "AlertManager", "Docker"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="mt-20">
      <motion.h3 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/8 via-red-500/12 to-pink-500/8 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.15] to-white/[0.08] p-10 rounded-3xl border border-white/25 shadow-[0_20px_60px_0_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_0_rgba(249,115,22,0.12)] transition-all duration-500 hover:border-white/40">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                {project.title}
              </h4>
              <p className="text-gray-200 mb-8 leading-relaxed text-base">{project.description}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-orange-500/15 to-red-500/15 text-orange-200 px-4 py-2 rounded-lg text-sm font-medium border border-orange-400/25 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" variant="outline" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 rounded-xl backdrop-blur-sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="sm" variant="outline" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 rounded-xl backdrop-blur-sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
