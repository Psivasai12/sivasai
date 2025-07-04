
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
    <section className="mt-20">
      <motion.h3 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
      >
        Technology Stack
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/8 via-purple-500/12 to-pink-500/8 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.15] to-white/[0.08] p-10 rounded-3xl border border-white/25 shadow-[0_20px_60px_0_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_0_rgba(6,182,212,0.12)] transition-all duration-500 hover:border-white/40">
              <h4 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                {tech.category}
              </h4>
              <div className="flex flex-wrap gap-4">
                {tech.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="bg-gradient-to-r from-cyan-500/15 to-purple-500/15 text-cyan-200 px-5 py-3 rounded-xl text-sm font-medium border border-cyan-400/25 hover:border-cyan-400/50 transition-all duration-300 cursor-default backdrop-blur-sm shadow-lg hover:shadow-cyan-400/20"
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
