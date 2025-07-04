
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-2xl bg-gradient-to-r from-white/[0.09] via-white/[0.07] to-white/[0.09] border-b border-white/20 shadow-[0_8px_40px_0_rgba(0,0,0,0.12)]"
    >
      <nav className="container mx-auto py-5 flex justify-between items-center px-6 max-w-7xl">
        <Link to="/">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-12 h-12 group">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-400 rounded-2xl blur-lg opacity-60 group-hover:opacity-90 transition-opacity duration-300"
              />
              <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-400 rounded-2xl flex items-center justify-center shadow-[0_8px_32px_0_rgba(59,130,246,0.3)] group-hover:shadow-[0_12px_48px_0_rgba(59,130,246,0.4)] transition-all duration-300">
                <span className="text-white font-bold text-xl drop-shadow-lg">D</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent drop-shadow-sm">
              DevOps Portfolio
            </h1>
          </motion.div>
        </Link>
        
        <div className="flex items-center space-x-2">
          {['About', 'Projects', 'Experience'].map((item, index) => (
            <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <Button 
                variant="ghost" 
                asChild={item === 'About'} 
                className="text-gray-200 hover:text-white hover:bg-white/15 transition-all duration-300 rounded-2xl backdrop-blur-sm font-medium px-4 py-2 hover:shadow-lg hover:shadow-white/10"
              >
                {item === 'About' ? (
                  <Link to="/">{item}</Link>
                ) : (
                  <span className="cursor-pointer">{item}</span>
                )}
              </Button>
            </motion.div>
          ))}
          
          <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
            <Button variant="ghost" asChild className="text-gray-200 hover:text-white hover:bg-white/15 transition-all duration-300 rounded-2xl backdrop-blur-sm font-medium px-4 py-2 hover:shadow-lg hover:shadow-white/10">
              <Link to="/blog">Blog</Link>
            </Button>
          </motion.div>
          
          <div className="ml-8 flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  <Button variant="ghost" asChild className="text-gray-200 hover:text-white hover:bg-white/15 transition-all duration-300 rounded-2xl backdrop-blur-sm font-medium">
                    <Link to="/dashboard">Dashboard</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="secondary" 
                    onClick={handleLogout}
                    className="relative overflow-hidden bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-200 border border-red-400/40 hover:from-red-500/30 hover:to-pink-500/30 hover:border-red-400/60 transition-all duration-300 rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-red-500/20 font-medium"
                  >
                    <span className="relative z-10">Logout</span>
                  </Button>
                </motion.div>
              </>
            ) : (
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="secondary" 
                  asChild
                  className="relative overflow-hidden bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-200 border border-cyan-400/40 hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400/60 transition-all duration-300 rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-cyan-500/20 font-medium"
                >
                  <Link to="/login">
                    <span className="relative z-10">Admin</span>
                  </Link>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
