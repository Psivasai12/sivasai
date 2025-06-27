
import { Server, Cloud, GitBranch, Monitor, Shield, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => (
  <div className="mt-16">
    <h3 className="text-3xl font-bold text-center mb-12">Core Expertise</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard
        icon={<Cloud className="h-12 w-12 mb-4" />}
        title="Cloud Infrastructure"
        description="Expert in AWS, Azure, and GCP. Design and implement scalable, cost-effective cloud architectures."
      />
      <FeatureCard
        icon={<GitBranch className="h-12 w-12 mb-4" />}
        title="CI/CD Pipelines"
        description="Build robust automation pipelines using Jenkins, GitLab CI, GitHub Actions, and Azure DevOps."
      />
      <FeatureCard
        icon={<Server className="h-12 w-12 mb-4" />}
        title="Infrastructure as Code"
        description="Terraform, CloudFormation, and Ansible expert. Version-controlled, reproducible infrastructure."
      />
      <FeatureCard
        icon={<Monitor className="h-12 w-12 mb-4" />}
        title="Monitoring & Observability"
        description="Implement comprehensive monitoring with Prometheus, Grafana, ELK stack, and distributed tracing."
      />
      <FeatureCard
        icon={<Shield className="h-12 w-12 mb-4" />}
        title="Security & Compliance"
        description="DevSecOps practices, vulnerability scanning, compliance automation, and security-first approach."
      />
      <FeatureCard
        icon={<Zap className="h-12 w-12 mb-4" />}
        title="Performance Optimization"
        description="Optimize application performance, reduce deployment times, and improve system reliability."
      />
    </div>
  </div>
);

export default Features;
