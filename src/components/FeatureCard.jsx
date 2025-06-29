
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02, y: -5 }}
    className="backdrop-blur-xl bg-white/[0.05] p-8 rounded-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 group"
  >
    <div className="mb-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-200 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

export default FeatureCard;
