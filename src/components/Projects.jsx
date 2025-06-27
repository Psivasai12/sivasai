
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
    <section className="mt-24">
      <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg"
          >
            <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-600 bg-opacity-20 text-blue-300 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
              <Button size="sm" variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
