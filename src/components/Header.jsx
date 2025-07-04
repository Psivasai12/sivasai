
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
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/[0.08] border-b border-white/20 shadow-2xl"
    >
      <nav className="container mx-auto py-4 flex justify-between items-center px-6 max-w-7xl">
        <Link to="/">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-12 h-12 group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-400 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-400 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-xl">D</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              DevOps Portfolio
            </h1>
          </motion.div>
        </Link>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" asChild className="text-gray-200 hover:text-white hover:bg-white/20 transition-all duration-300 rounded-2xl backdrop-blur-sm font-medium">
            <Link to="/">About</Link>
          </Button>
          <Button variant="ghost" className="text-gray-200 hover:text-white hover:bg-white/20 transition-all duration-300 rounded-2xl backdrop-blur-sm font-medium">
            Projects
          </Button>
          <Button variant="ghost" className="text-gray-200 hover:text-white hover:bg-white/20 transition-all duration-300 rounded-2xl backdrop-blur-sm font-medium">
            Experience
          </Button>
          <Button variant="ghost" asChild className="text-gray-200 hover:text-white hover:bg-white/20 transition-all duration-300 rounded-2xl backdrop-blur-sm font-medium">
            <Link to="/blog">Blog</Link>
          </Button>
          
          <div className="ml-8 flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" asChild className="text-gray-200 hover:text-white hover:bg-white/20 transition-all duration-300 rounded-2xl backdrop-blur-sm font-medium">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={handleLogout}
                  className="relative overflow-hidden bg-gradient-to-r from-red-500/30 to-pink-500/30 text-red-200 border border-red-400/50 hover:from-red-500/40 hover:to-pink-500/40 hover:border-red-400/70 transition-all duration-300 rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-red-500/25 font-medium"
                >
                  <span className="relative z-10">Logout</span>
                </Button>
              </>
            ) : (
              <Button 
                variant="secondary" 
                asChild
                className="relative overflow-hidden bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-cyan-200 border border-cyan-400/50 hover:from-cyan-500/40 hover:to-purple-500/40 hover:border-cyan-400/70 transition-all duration-300 rounded-2xl backdrop-blur-sm shadow-lg hover:shadow-cyan-500/25 font-medium"
              >
                <Link to="/login">
                  <span className="relative z-10">Admin</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
