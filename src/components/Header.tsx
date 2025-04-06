
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-bold text-maverick-800">
          <span className="text-maverick-600">Maverick</span> AI
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          <a href="#features" className="nav-link">Features</a>
          <a href="#product" className="nav-link">Product</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a 
            href="#schedule" 
            className="ml-4 inline-flex items-center justify-center rounded-md bg-maverick-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-maverick-700 transition-colors uppercase tracking-wide"
          >
            Schedule Demo
          </a>
        </nav>
        
        <button className="md:hidden text-maverick-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
