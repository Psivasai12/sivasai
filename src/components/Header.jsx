
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
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/[0.05] border-b border-white/10 shadow-lg"
    >
      <nav className="container mx-auto py-4 flex justify-between items-center px-6 max-w-7xl">
        <Link to="/">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              DevOps Portfolio
            </h1>
          </motion.div>
        </Link>
        
        <div className="flex items-center space-x-1">
          <Button variant="ghost" asChild className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg">
            <Link to="/">About</Link>
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg">
            Projects
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg">
            Experience
          </Button>
          <Button variant="ghost" asChild className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg">
            <Link to="/blog">Blog</Link>
          </Button>
          
          <div className="ml-4 flex items-center space-x-2">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" asChild className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button 
                  variant="secondary" 
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border border-red-500/30 hover:bg-gradient-to-r hover:from-red-500/30 hover:to-pink-500/30 transition-all duration-200 rounded-lg"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button 
                variant="secondary" 
                asChild
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-200 rounded-lg"
              >
                <Link to="/login">Admin</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
