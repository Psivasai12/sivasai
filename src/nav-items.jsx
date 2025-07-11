
import { Home, CreditCard, LogIn, LayoutDashboard, BookOpen } from "lucide-react";
import Index from "./pages/Index.jsx";
import PlanSelection from "./pages/PlanSelection.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Blog from "./pages/Blog.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <BookOpen className="h-4 w-4" />,
    page: <Blog />,
  },
  {
    title: "Plan Selection",
    to: "/plan-selection",
    icon: <CreditCard className="h-4 w-4" />,
    page: <PlanSelection />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <LogIn className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <Dashboard />,
  },
];
