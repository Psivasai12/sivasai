
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
      className="sticky top-0 z-50 backdrop-blur-2xl bg-white/[0.02] border-b border-white/[0.05] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
    >
      <nav className="container mx-auto py-4 flex justify-between items-center px-6 max-w-7xl">
        <Link to="/">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative w-10 h-10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">D</span>
              </div>
            </div>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              DevOps Portfolio
            </h1>
          </motion.div>
        </Link>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" asChild className="text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all duration-300 rounded-xl backdrop-blur-sm">
            <Link to="/">About</Link>
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all duration-300 rounded-xl backdrop-blur-sm">
            Projects
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all duration-300 rounded-xl backdrop-blur-sm">
            Experience
          </Button>
          <Button variant="ghost" asChild className="text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all duration-300 rounded-xl backdrop-blur-sm">
            <Link to="/blog">Blog</Link>
          </Button>
          
          <div className="ml-6 flex items-center space-x-3">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" asChild className="text-gray-300 hover:text-white hover:bg-white/[0.08] transition-all duration-300 rounded-xl backdrop-blur-sm">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={handleLogout}
                  className="relative overflow-hidden bg-gradient-to-r from-red-500/20 via-pink-500/20 to-red-500/20 text-red-300 border border-red-500/30 hover:from-red-500/30 hover:via-pink-500/30 hover:to-red-500/30 transition-all duration-300 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-red-500/25"
                >
                  <span className="relative z-10">Logout</span>
                </Button>
              </>
            ) : (
              <Button 
                variant="secondary" 
                asChild
                className="relative overflow-hidden bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 text-blue-300 border border-blue-500/30 hover:from-blue-500/30 hover:via-purple-500/30 hover:to-cyan-500/30 transition-all duration-300 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-blue-500/25"
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
