import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:block bg-[#0f1c2e] text-gray-300 text-sm py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919810428612" className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
              <Phone size={13} /> 98104-28612
            </a>
            <a href="mailto:rashtriya94@yahoo.co.in" className="flex items-center gap-1.5 hover:text-orange-400 transition-colors">
              <Mail size={13} /> rashtriya94@yahoo.co.in
            </a>
          </div>
          <span className="text-gray-500 text-xs">
            101, 1st Floor, B-Wing, Pankaj Heights, Mumbai - 400 004
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-900/10"
            : "bg-[#1e3a5f]"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group" onClick={() => setMenuOpen(false)}>
            <div className="bg-white rounded-xl p-1.5 shadow-md group-hover:scale-105 transition-transform border-2 border-blue-500">
              <img 
                src="/logo.jpeg" 
                alt="Rashtriya Tubes & Fittings Logo" 
                className="h-16 sm:h-20 w-auto object-contain mix-blend-multiply" 
              />
            </div>
            <div className="leading-tight mt-1">
              <div className={`font-black text-4xl tracking-tight transition-colors flex items-baseline ${scrolled ? "text-[#1e3a5f]" : "text-white"}`}>
                R<span className="text-[46px] font-serif italic text-blue-500 px-px">Λ</span>shtriya
              </div>
              <div className={`text-[13px] font-bold tracking-widest uppercase transition-colors ${scrolled ? "text-orange-500" : "text-orange-400"}`}>
                Tubes & Fittings
              </div>
              <div className="mt-1.5 inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-2.5 py-0.5 rounded shadow-sm border border-orange-400/20 transform -skew-x-6 hover:skew-x-0 transition-transform">
                <span className="text-xs font-black italic tracking-wider transform skew-x-6">36TH ANNIVERSARY</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-orange-500 text-white shadow-md"
                      : scrolled
                      ? "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-3 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-[#1e3a5f] hover:bg-gray-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
            >
              <div className="p-4 space-y-1">
                {navLinks.map(({ label, to }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg font-semibold text-sm transition-colors ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block mt-2 bg-orange-500 text-white text-center px-4 py-3 rounded-lg font-bold text-sm"
                >
                  Get Quote
                </Link>
                <div className="pt-3 border-t border-gray-100 space-y-2 text-sm text-gray-500">
                  <a href="tel:+919810428612" className="flex items-center gap-2 hover:text-orange-500">
                    <Phone size={14} /> 98104-28612
                  </a>
                  <a href="mailto:rashtriya94@yahoo.co.in" className="flex items-center gap-2 hover:text-orange-500">
                    <Mail size={14} /> rashtriya94@yahoo.co.in
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
