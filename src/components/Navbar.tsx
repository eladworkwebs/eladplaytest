
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { title: "Inicio", path: "/" },
    { title: "Acerca de", path: "/about" },
    { title: "Servicios", path: "/services" },
    { title: "Ubicaciones", path: "/locations" },
    { title: "Contacto", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className="text-2xl font-bold text-brand-blue">
            Sak<span className="text-brand-darkBlue">Technology</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-700"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-base font-medium transition-colors hover:text-brand-blue ${
                location.pathname === item.path
                  ? "text-brand-blue"
                  : "text-gray-700"
              }`}
            >
              {item.title}
            </Link>
          ))}
          <Button
            asChild
            className="bg-brand-blue hover:bg-brand-darkBlue text-white"
          >
            <Link to="/contact">Cotización</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-4">
            <div className="flex flex-col space-y-6 pt-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xl font-medium transition-colors hover:text-brand-blue ${
                    location.pathname === item.path
                      ? "text-brand-blue"
                      : "text-gray-700"
                  }`}
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
              ))}
              <Button
                asChild
                className="bg-brand-blue hover:bg-brand-darkBlue text-white w-full mt-4"
              >
                <Link to="/contact" onClick={closeMenu}>
                  Cotización
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
