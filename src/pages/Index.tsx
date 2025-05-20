
import { Smartphone, Wrench, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import Map from "@/components/Map";
const Index = () => {
  const services = [{
    icon: <Wrench size={24} />,
    title: "Reparación de Teléfonos",
    description: "Servicio profesional de reparación para todo tipo de teléfonos móviles, incluidas pantallas, baterías y más."
  }, {
    icon: <ShoppingCart size={24} />,
    title: "Venta de Accesorios",
    description: "Amplia gama de accesorios y repuestos originales para mejorar y proteger su dispositivo."
  }, {
    icon: <Smartphone size={24} />,
    title: "Venta de Teléfonos a Crédito",
    description: "Adquiera su nuevo smartphone con planes de financiamiento flexibles y adaptados a sus necesidades."
  }];
  return <>
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones completas para todas sus necesidades de telefonía móvil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />)}
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-brand-blue hover:bg-brand-darkBlue text-white">
              <Link to="/services">Ver Todos los Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500" alt="Tienda Sak Technology" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Acerca de Sak Technology
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                En Sak Technology, nos dedicamos a brindar soluciones confiables, eficientes y éticas en servicios móviles. Nuestra misión es ser una empresa líder en el mercado de telefonía móvil con calidad y servicio excepcionales.
              </p>
              <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:text-brand-darkBlue hover:border-brand-darkBlue">
                <Link to="/about">Conozca Más Sobre Nosotros</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestras Ubicaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visítenos en una de nuestras dos sucursales en San Cristóbal de las Casas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="h-64">
                <Map address="Andador del Carmen #11B, Avenida Miguel Hidalgo, San Cristóbal de las Casas, Chiapas, México" />
              </div>
              <div className="p-6 py-[24px] px-[23px] my-[18px] bg-white">
                <h3 className="text-xl font-bold mb-2">Sak Andador del Carmen</h3>
                <p className="text-gray-600 mb-4">Sak Technology, Avenida Miguel Hidalgo, Andador del Carmen 11B, 29200 San Cristóbal de las Casas, Chis.
                </p>
                <Button asChild size="sm" className="bg-brand-blue hover:bg-brand-darkBlue text-white">
                  <Link to="/locations">Ver Detalles</Link>
                </Button>
              </div>
            </div>
            
            <div className="rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="h-64">
                <Map address="Andador de Guadalupe #5C, Belisario Domínguez, San Cristóbal de las Casas, Chiapas, México" />
              </div>
              <div className="p-6 my-[18px] bg-white">
                <h3 className="text-xl font-bold mb-2">Sucursal Guadalupe</h3>
                <p className="text-gray-600 mb-4">
                  Andador de Guadalupe #5C, Belisario Domínguez
                </p>
                <Button asChild size="sm" className="bg-brand-blue hover:bg-brand-darkBlue text-white">
                  <Link to="/locations">Ver Detalles</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-darkBlue to-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Necesita ayuda con su dispositivo móvil?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctenos hoy para obtener una cotización gratuita o visite una de nuestras tiendas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              <Link to="/contact">Contactar Ahora</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 flex items-center gap-2">
              <a href="tel:+529671234567">
                <span className="flex items-center gap-2">
                  Llamar
                </span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>;
};
export default Index;
