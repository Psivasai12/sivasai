
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02, y: -5 }}
    className="relative group"
  >
    {/* Glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    
    {/* Card content */}
    <div className="relative backdrop-blur-xl bg-white/[0.03] p-8 rounded-2xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_16px_64px_0_rgba(31,38,135,0.5)] transition-all duration-300 group">
      <div className="mb-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-200 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  </motion.div>
);

export default FeatureCard;
