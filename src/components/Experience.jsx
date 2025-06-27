
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
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
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
        Professional Experience
      </motion.h3>
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02, 
              x: 10,
              transition: { duration: 0.2 }
            }}
            className="bg-white bg-opacity-10 p-6 rounded-lg mb-6 backdrop-blur-sm border border-white border-opacity-20 transition-all duration-300 hover:bg-opacity-15 hover:shadow-lg hover:shadow-green-400/10"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <h4 className="text-xl font-semibold text-green-400">{exp.position}</h4>
                <h5 className="text-lg text-gray-300">{exp.company}</h5>
              </motion.div>
              <motion.div 
                className="flex flex-col md:items-end mt-2 md:mt-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="mr-1 h-4 w-4" />
                  {exp.duration}
                </div>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <MapPin className="mr-1 h-4 w-4" />
                  {exp.location}
                </div>
              </motion.div>
            </div>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {exp.achievements.map((achievement, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.1 + 0.6 }}
                >
                  <motion.span 
                    className="text-green-400 mr-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + i * 0.1 + 0.7,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    •
                  </motion.span>
                  <span className="text-gray-300">{achievement}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;
