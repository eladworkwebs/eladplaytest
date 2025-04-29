import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Smartphone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/5f1f068e-fa08-4a74-9c5a-7cec716b6a30.png" 
                alt="Sak Technology Logo" 
                className="h-10 w-auto filter invert"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Su experto confiable en reparación de móviles y accesorios en San Cristóbal de las Casas.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-blue transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-blue transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-blue transition-colors"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-brand-blue transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-blue transition-colors">Acerca de</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-brand-blue transition-colors">Servicios</Link>
              </li>
              <li>
                <Link to="/locations" className="text-gray-400 hover:text-brand-blue transition-colors">Ubicaciones</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brand-blue transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                <span className="text-gray-400">Andador del Carmen #11B, Avenida Miguel Hidalgo, San Cristóbal de las Casas</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-brand-blue shrink-0" />
                <span className="text-gray-400">Andador de Guadalupe #5C, Belisario Domínguez, San Cristóbal de las Casas</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-brand-blue shrink-0" />
                <a href="tel:+529671234567" className="text-gray-400 hover:text-brand-blue transition-colors">+52 967 123 4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-brand-blue shrink-0" />
                <a href="mailto:info@saktechnology.com" className="text-gray-400 hover:text-brand-blue transition-colors">info@saktechnology.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Sak Technology. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
