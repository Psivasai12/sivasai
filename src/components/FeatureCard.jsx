
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ 
      scale: 1.05, 
      y: -15,
      rotateY: 8,
    }}
    className="relative group perspective-1000"
  >
    {/* Multiple enhanced glow layers */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 via-purple-500/20 to-pink-500/15 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-purple-400/10 to-pink-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    
    {/* Card content with enhanced styling */}
    <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/[0.15] to-white/[0.08] p-10 rounded-3xl border border-white/25 shadow-[0_20px_70px_0_rgba(0,0,0,0.2)] hover:shadow-[0_30px_90px_0_rgba(6,182,212,0.15)] transition-all duration-500 transform-gpu group-hover:border-white/40">
      <motion.div 
        className="mb-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-white transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 text-base">
        {description}
      </p>
      
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
      
      {/* Inner glow enhancement */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/3 via-purple-500/5 to-pink-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  </motion.div>
);

export default FeatureCard;
