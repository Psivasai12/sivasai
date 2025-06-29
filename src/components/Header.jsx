
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
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-xl"
    >
      <nav className="container mx-auto py-4 flex justify-between items-center px-4">
        <Link to="/">
          <motion.h1 
            className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            DevOps Portfolio
          </motion.h1>
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild className="hover:bg-white/20 transition-all duration-300">
            <Link to="/">About</Link>
          </Button>
          <Button variant="ghost" className="hover:bg-white/20 transition-all duration-300">Projects</Button>
          <Button variant="ghost" className="hover:bg-white/20 transition-all duration-300">Experience</Button>
          <Button variant="ghost" asChild className="hover:bg-white/20 transition-all duration-300">
            <Link to="/blog">Blog</Link>
          </Button>
          {isLoggedIn ? (
            <>
              <Button variant="ghost" asChild className="hover:bg-white/20 transition-all duration-300">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button 
                variant="secondary" 
                onClick={handleLogout}
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 transition-all duration-300"
              >
                Logout
              </Button>
            </>
          ) : (
            <Button 
              variant="secondary" 
              asChild
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300"
            >
              <Link to="/login">Admin</Link>
            </Button>
          )}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
