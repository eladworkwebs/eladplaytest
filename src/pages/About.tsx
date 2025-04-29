
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Acerca de Sak Technology
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Conozca nuestra historia, misión y visión como el proveedor líder de servicios y productos de telefonía móvil en San Cristóbal de las Casas.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-brand-blue">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
              <p className="text-lg text-gray-700">
                Ser una empresa confiable, eficiente y ética en servicios móviles, ofreciendo soluciones de calidad que satisfagan las necesidades de nuestros clientes. Estamos comprometidos con la excelencia en cada servicio, desde reparaciones hasta ventas de dispositivos.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-brand-blue">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
              <p className="text-lg text-gray-700">
                Liderar el mercado de telefonía móvil en San Cristóbal de las Casas y sus alrededores con calidad y servicio excepcionales. Aspiramos a ser reconocidos por nuestra integridad, experiencia técnica y atención al cliente personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde nuestros inicios hasta convertirnos en líderes del sector.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500"
                alt="Historia de Sak Technology"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <p className="text-lg text-gray-700">
                Fundada con la visión de ofrecer servicios de reparación de alta calidad, Sak Technology comenzó como un pequeño negocio en San Cristóbal de las Casas. A lo largo de los años, nos hemos expandido para incluir venta de accesorios y dispositivos móviles, siempre manteniendo nuestro compromiso con la calidad y el servicio al cliente.
              </p>
              <p className="text-lg text-gray-700">
                Hoy contamos con dos sucursales estratégicamente ubicadas en la ciudad, un equipo de técnicos altamente capacitados y una amplia selección de productos de calidad para satisfacer las necesidades de nuestros clientes.
              </p>
              <p className="text-lg text-gray-700">
                Nuestro éxito se basa en la confianza que nuestros clientes han depositado en nosotros, y trabajamos cada día para mantener esa confianza ofreciendo soluciones honestas y efectivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían todas nuestras operaciones y servicios.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md border-t-2 border-t-brand-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integridad</h3>
              <p className="text-gray-700">
                Actuamos con honestidad y transparencia en todas nuestras interacciones. Nuestros clientes pueden confiar en nuestros diagnósticos y recomendaciones.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border-t-2 border-t-brand-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excelencia</h3>
              <p className="text-gray-700">
                Nos comprometemos a brindar servicios y productos de la más alta calidad, actualizando constantemente nuestras habilidades y conocimientos.
              </p>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md border-t-2 border-t-brand-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Servicio al Cliente</h3>
              <p className="text-gray-700">
                Ponemos a nuestros clientes en primer lugar, escuchando sus necesidades y ofreciendo soluciones personalizadas que superen sus expectativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Conozca más sobre nuestros servicios
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button asChild className="bg-brand-blue hover:bg-brand-darkBlue text-white">
              <Link to="/services">Ver Servicios</Link>
            </Button>
            <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:text-brand-darkBlue hover:border-brand-darkBlue">
              <Link to="/contact">Contactar</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
