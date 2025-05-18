import { Smartphone, Wrench, ShoppingCart, HeadphonesIcon, Smartphone as SmartphoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const mainServices = [
    {
      icon: <Wrench size={24} />,
      title: "Reparación de Teléfonos",
      description:
        "Servicio profesional de diagnóstico y reparación para todo tipo de teléfonos móviles, realizado por técnicos certificados.",
    },
    {
      icon: <ShoppingCart size={24} />,
      title: "Venta de Accesorios",
      description:
        "Amplia gama de accesorios y repuestos originales de las mejores marcas para mejorar y proteger su dispositivo.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Venta de Teléfonos a Crédito",
      description:
        "Adquiera su nuevo smartphone con planes de financiamiento flexibles y adaptados a sus necesidades financieras.",
    },
  ];

  const repairServices = [
    "Reparación de pantalla",
    "Sustitución de batería",
    "Reparación de carga",
    "Reparación de botones",
    "Reparación de cámaras",
    "Reparación de altavoces",
    "Recuperación de datos",
    "Actualización de software",
  ];

  const accessories = [
    "Fundas y protectores",
    "Protectores de pantalla",
    "Cargadores y cables",
    "Auriculares y altavoces",
    "Soportes y bases",
    "Baterías externas",
    "Adaptadores",
    "Tarjetas de memoria",
  ];

  const galleryImages = [
    {
      src: "/lovable-uploads/444c71fd-bb6b-4471-be85-9c4862ae8a27.png",
      alt: "Baterías de iPhone y pantallas",
      title: "Repuestos Originales"
    },
    {
      src: "/lovable-uploads/82295bf1-b563-48de-9885-24f7d216e0bb.png",
      alt: "iPhones rojos en teclado",
      title: "Equipos Premium"
    },
    {
      src: "/lovable-uploads/6b9a4cb7-8d84-4c83-b164-e55f12dec637.png",
      alt: "iPhone mostrando diagnóstico",
      title: "Diagnóstico Profesional"
    },
    {
      src: "/lovable-uploads/1234e9c4-bb27-4c89-a0d9-fbcec5d671bd.png",
      alt: "Reparación de iPhone",
      title: "Servicio Técnico Especializado"
    },
    {
      src: "/lovable-uploads/8f468c11-21c2-4f05-a2ed-160819351280.png",
      alt: "Componentes de iPhone",
      title: "Repuestos de Calidad"
    },
    {
      src: "/lovable-uploads/374d1640-9d0b-4b59-a25e-2827742b813a.png",
      alt: "Memorias y componentes",
      title: "Componentes Originales"
    },
    {
      src: "/lovable-uploads/eae2e86b-c03e-4f93-8617-5c698deef43d.png",
      alt: "Reparación de pantalla",
      title: "Servicio de Pantallas"
    },
    {
      src: "/lovable-uploads/8d1729f6-ab37-4721-965b-e032eeea1719.png",
      alt: "Stock de repuestos",
      title: "Amplio Inventario"
    },
    {
      src: "/lovable-uploads/f4244949-b60e-4e3f-ab18-92495ce3e90f.png",
      alt: "iPhones rojos",
      title: "Equipos Disponibles"
    },
    {
      src: "/lovable-uploads/1b94b14b-53e9-44d5-908a-c0c9397e5cb1.png",
      alt: "iPhone con diagnóstico",
      title: "Software Especializado"
    },
    {
      src: "/lovable-uploads/19ac12e6-2985-46c6-a27c-f630d5cd4325.png",
      alt: "Pantalla de iPhone en reparación",
      title: "Reemplazo de Pantallas"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            En Sak Technology ofrecemos una amplia gama de servicios de alta calidad para satisfacer todas sus necesidades de telefonía móvil.
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-darkBlue text-white">
            <Link to="/contact">Solicitar Cotización</Link>
          </Button>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Servicios Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones completas para sus dispositivos móviles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Repair Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Servicios de Reparación
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nuestros técnicos especializados ofrecen soluciones rápidas y confiables para todo tipo de problemas con su dispositivo móvil.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {repairServices.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-2 text-brand-blue">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-brand-blue hover:bg-brand-darkBlue text-white">
                  <Link to="/contact">Solicitar Reparación</Link>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=500"
                alt="Servicios de reparación de teléfonos"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=500"
                alt="Accesorios para teléfonos móviles"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Accesorios y Productos
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Disponemos de una amplia selección de accesorios de calidad para complementar y proteger su dispositivo móvil.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {accessories.map((accessory, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-2 text-brand-blue">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{accessory}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-brand-blue hover:bg-brand-darkBlue text-white">
                  <Link to="/contact">Consultar Disponibilidad</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Sales Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Venta de Teléfonos a Crédito
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Adquiera su nuevo smartphone con nuestros planes de financiamiento flexibles, adaptados a sus posibilidades.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <SmartphoneIcon size={40} className="mx-auto text-brand-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Plan Básico</h3>
              <p className="text-gray-600 mb-4">
                Financiamiento para smartphones económicos con cuotas mensuales accesibles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-brand-blue">
              <SmartphoneIcon size={40} className="mx-auto text-brand-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Plan Estándar</h3>
              <p className="text-gray-600 mb-4">
                Financiamiento para smartphones de gama media con opciones de pago flexibles.
              </p>
              <div className="text-sm inline-block bg-brand-blue text-white px-3 py-1 rounded-full">
                Más Popular
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <SmartphoneIcon size={40} className="mx-auto text-brand-blue mb-4" />
              <h3 className="text-xl font-bold mb-2">Plan Premium</h3>
              <p className="text-gray-600 mb-4">
                Financiamiento para smartphones de alta gama con beneficios exclusivos.
              </p>
            </div>
          </div>
          
          <div className="mt-10">
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-darkBlue text-white">
              <Link to="/contact">Consultar Planes de Crédito</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Galería de Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nuestra galería para ver algunos de nuestros trabajos y servicios.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden group">
                        <CardContent className="p-0 relative">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="font-medium text-lg">{image.title}</h3>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center mt-8 gap-2">
                <CarouselPrevious className="static" />
                <CarouselNext className="static" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-brand-darkBlue to-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Necesita ayuda con su dispositivo móvil?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contáctenos hoy para obtener una cotización gratuita o visite una de nuestras tiendas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              <Link to="/contact">Contactar Ahora</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/locations">Ver Ubicaciones</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
