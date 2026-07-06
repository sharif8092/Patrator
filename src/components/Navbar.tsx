import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Leaf, Menu, X, ShieldCheck } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "services", label: "Our Services" },
    { id: "waste-streams", label: "Waste Streams" },
    { id: "roadmap", label: "Compliance Steps" },
    { id: "calculator", label: "EPR Calculator" },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
      id="main-nav-container"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => handleNavClick("services")}>
            <div className="p-2.5 bg-gradient-to-tr from-emerald-600 to-teal-600 rounded-xl text-white shadow-lg shadow-emerald-200/50 transition-transform duration-300 hover:scale-105">
              <Leaf className="h-5 w-5" />
            </div>
            <div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-gray-900 leading-none block">
                Patr<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">ator</span>
              </span>
              <div className="flex items-center text-[8px] font-mono text-teal-700 tracking-widest font-bold uppercase mt-0.5">
                <ShieldCheck className="h-2.5 w-2.5 mr-1 text-emerald-500" />
                EPR COMPLIANCE HUB
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
                  activeTab === item.id
                    ? "text-emerald-700 bg-emerald-50/75"
                    : "text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}

          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-b border-gray-100 shadow-lg"
          id="mobile-dropdown-menu"
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium ${
                  activeTab === item.id
                    ? "bg-emerald-50 text-emerald-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-emerald-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
