
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Sus Expertos de Confianza en Tecnología Móvil
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Reparación profesional de teléfonos, accesorios de calidad y ventas a crédito en San Cristóbal de las Casas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-darkBlue text-white px-8">
              <Link to="/contact">Contáctenos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-brand-blue text-brand-blue hover:text-brand-darkBlue hover:border-brand-darkBlue">
              <Link to="/services">Nuestros Servicios</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600"
            alt="Reparación de teléfonos móviles"
            className="rounded-lg shadow-xl max-w-full h-auto object-cover"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
