import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 group/navbar ${isScrolled ? "bg-navy/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"}`}
    >
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        initial={{ filter: 'brightness(1) blur(0px)' }}
        whileHover={{ filter: 'brightness(1.08) blur(8px)' }}
        transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
        style={{ background: isScrolled ? 'rgba(15,23,42,0.85)' : 'transparent' }}
      />
      <style>{`
        .nav-link {
          position: relative;
          transition: color 0.2s;
        }
        .nav-link .nav-underline {
          position: absolute;
          left: 0; right: 0; bottom: -4px;
          height: 3px;
          background: linear-gradient(90deg, #0ea5e9 0%, #a78bfa 100%);
          border-radius: 2px;
          opacity: 0;
          transform: scaleX(0);
          transition: opacity 0.2s, transform 0.3s cubic-bezier(0.77,0,0.175,1);
        }
        .nav-link:hover .nav-underline, .nav-link:focus .nav-underline {
          opacity: 1;
          transform: scaleX(1);
        }
      `}</style>
      <div className="container mx-auto flex justify-between items-center relative z-10">
        <a href="#" className="text-xl font-semibold text-white">
          <span className="text-accent">Nam</span>Dev
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
            { href: "#skills", label: "Skills" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="nav-link relative text-slate hover:text-accent focus:text-accent transition-colors duration-200"
              whileHover={{ scale: 1.12, color: "#0ea5e9", textShadow: "0 0 12px #0ea5e9, 0 0 24px #a78bfa" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {link.label}
              <span className="nav-underline" />
            </motion.a>
          ))}
          <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent">
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-light hover:text-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-light p-4 absolute w-full">
          <div className="flex flex-col gap-4">
            <a href="#about" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </a>
            <a href="#projects" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </a>
            <a href="#skills" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Skills
            </a>
            <a href="#contact" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 w-full">
              Resume
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
