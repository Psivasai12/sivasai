
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
      className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-md"
    >
      <nav className="container mx-auto py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-green-400">DevOps Portfolio</h1>
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/">About</Link>
          </Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Experience</Button>
          <Button variant="ghost" asChild>
            <Link to="/blog">Blog</Link>
          </Button>
          {isLoggedIn ? (
            <>
              <Button variant="ghost" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="secondary" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <Button variant="secondary" asChild>
              <Link to="/login">Admin</Link>
            </Button>
          )}
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
