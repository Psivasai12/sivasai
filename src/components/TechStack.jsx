
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

  return (
    <section className="mt-16">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
      >
        Technology Stack
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/[0.12] to-white/[0.06] p-8 rounded-2xl border border-white/20 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
              <h4 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                {tech.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {tech.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-200 px-4 py-2 rounded-xl text-sm font-medium border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
