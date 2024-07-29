import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="sticky top-0 z-50 bg-purple-900 bg-opacity-90 backdrop-blur-sm shadow-md"
  >
    <nav className="container mx-auto py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MonsterScale</h1>
      <div className="space-x-4">
        <Button variant="ghost">Features</Button>
        <Button variant="ghost">Pricing</Button>
        <Button variant="ghost">About</Button>
        <Button variant="secondary">Login</Button>
      </div>
    </nav>
  </motion.header>
);

export default Header;
