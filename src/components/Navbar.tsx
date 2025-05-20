
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-semibold text-white">
          <span className="text-accent">Nam</span>Dev
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
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
    </nav>
  );
};

export default Navbar;
