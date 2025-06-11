import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Home, Calendar, Book, DollarSign, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", name: "Home", icon: <Home size={18} /> },
    { path: "/events", name: "Events", icon: <Calendar size={18} /> },
    { path: "/marketplace", name: "Marketplace", icon: <DollarSign size={18} /> },
    { path: "/notes", name: "Notes", icon: <Book size={18} /> },
    { path: "/profile", name: "Profile", icon: <User size={18} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${
        scrolled
          ? "bg-gradient-to-r from-purple-900/95 to-purple-800/95 backdrop-blur-sm shadow-lg"
          : "bg-gradient-to-r from-purple-900 to-purple-800"
      } text-white transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent flex items-center"
            >
              <span className="mr-2">🎓</span>
              Campus Connect
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg flex items-center transition-all ${
                  location.pathname === item.path
                    ? "bg-yellow-500/10 text-yellow-300 font-medium"
                    : "text-purple-100 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg font-medium hover:shadow-lg text-purple-900"
            >
              Sign In
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg ${
                      location.pathname === item.path
                        ? "bg-yellow-500/10 text-yellow-300 font-medium"
                        : "text-purple-100 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </div>
                  </Link>
                ))}
                <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg font-medium text-purple-900">
                  Sign In
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;