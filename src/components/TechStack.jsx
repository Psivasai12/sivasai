
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
    <section className="mt-24">
      <h3 className="text-3xl font-bold text-center mb-12">Technology Stack</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg"
          >
            <h4 className="text-xl font-semibold mb-4 text-green-400">{tech.category}</h4>
            <div className="flex flex-wrap gap-2">
              {tech.items.map((item) => (
                <span
                  key={item}
                  className="bg-green-600 bg-opacity-20 text-green-300 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
