
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior DevOps Engineer",
      duration: "2022 - Present",
      location: "Remote",
      achievements: [
        "Reduced deployment time by 75% through automated CI/CD pipelines",
        "Migrated legacy infrastructure to cloud-native solutions",
        "Implemented monitoring that improved system uptime to 99.9%"
      ]
    },
    {
      company: "CloudFirst Inc.",
      position: "DevOps Engineer",
      duration: "2020 - 2022",
      location: "San Francisco, CA",
      achievements: [
        "Designed and implemented Kubernetes clusters for microservices",
        "Automated infrastructure provisioning using Terraform",
        "Established security best practices and compliance workflows"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Systems Administrator",
      duration: "2018 - 2020",
      location: "Austin, TX",
      achievements: [
        "Managed on-premise and hybrid cloud infrastructure",
        "Developed automation scripts reducing manual tasks by 60%",
        "Led migration from physical servers to containerized workloads"
      ]
    }
  ];

  return (
    <section className="mt-24">
      <h3 className="text-3xl font-bold text-center mb-12">Professional Experience</h3>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg mb-6"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-green-400">{exp.position}</h4>
                <h5 className="text-lg text-gray-300">{exp.company}</h5>
              </div>
              <div className="flex flex-col md:items-end mt-2 md:mt-0">
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="mr-1 h-4 w-4" />
                  {exp.duration}
                </div>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <MapPin className="mr-1 h-4 w-4" />
                  {exp.location}
                </div>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
