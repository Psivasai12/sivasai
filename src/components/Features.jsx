
import { Server, Cloud, GitBranch, Monitor, Shield, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { motion } from "framer-motion";

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h3 
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Core Expertise
      </motion.h3>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        <FeatureCard
          icon={<Cloud className="h-12 w-12 mb-4 text-green-400" />}
          title="Cloud Infrastructure"
          description="Expert in AWS, Azure, and GCP. Design and implement scalable, cost-effective cloud architectures."
        />
        <FeatureCard
          icon={<GitBranch className="h-12 w-12 mb-4 text-green-400" />}
          title="CI/CD Pipelines"
          description="Build robust automation pipelines using Jenkins, GitLab CI, GitHub Actions, and Azure DevOps."
        />
        <FeatureCard
          icon={<Server className="h-12 w-12 mb-4 text-green-400" />}
          title="Infrastructure as Code"
          description="Terraform, CloudFormation, and Ansible expert. Version-controlled, reproducible infrastructure."
        />
        <FeatureCard
          icon={<Monitor className="h-12 w-12 mb-4 text-green-400" />}
          title="Monitoring & Observability"
          description="Implement comprehensive monitoring with Prometheus, Grafana, ELK stack, and distributed tracing."
        />
        <FeatureCard
          icon={<Shield className="h-12 w-12 mb-4 text-green-400" />}
          title="Security & Compliance"
          description="DevSecOps practices, vulnerability scanning, compliance automation, and security-first approach."
        />
        <FeatureCard
          icon={<Zap className="h-12 w-12 mb-4 text-green-400" />}
          title="Performance Optimization"
          description="Optimize application performance, reduce deployment times, and improve system reliability."
        />
      </motion.div>
    </motion.div>
  );
};

export default Features;
