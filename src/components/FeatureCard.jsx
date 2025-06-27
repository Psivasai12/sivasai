
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20 transition-all duration-300 hover:bg-opacity-15 hover:shadow-lg hover:shadow-green-400/10"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        {icon}
      </motion.div>
      <motion.h3 
        className="text-xl font-semibold mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default FeatureCard;
