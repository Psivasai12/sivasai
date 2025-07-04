
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.05, 
      y: -10,
      rotateY: 5,
    }}
    className="relative group perspective-1000"
  >
    {/* Multiple glow layers */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    
    {/* Card content */}
    <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/[0.12] to-white/[0.06] p-8 rounded-3xl border border-white/20 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform-gpu">
      <div className="mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 transform group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-white transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
        {description}
      </p>
      
      {/* Inner gradient highlight */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  </motion.div>
);

export default FeatureCard;
