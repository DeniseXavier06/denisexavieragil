import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Portfólio", href: "/portfolio" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const homeNavItems = [
    { name: "Sobre", sectionId: "about" },
    { name: "Experiência", sectionId: "experience" },
    { name: "Skills", sectionId: "skills" },
    { name: "Contato", sectionId: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-white font-display text-xl">
            Denise Xavier
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-white/80 hover:text-white transition-colors ${
                  location.pathname === item.href ? "text-secondary-light font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            {location.pathname === "/" &&
              homeNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-white/80 hover:text-white transition-colors ${
                    location.pathname === item.href ? "text-secondary-light font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {location.pathname === "/" &&
                homeNavItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.sectionId)}
                    className="text-white/80 hover:text-white transition-colors text-left"
                  >
                    {item.name}
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
