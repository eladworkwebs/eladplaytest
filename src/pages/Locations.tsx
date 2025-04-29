
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Map from "@/components/Map";

const Locations = () => {
  const locations = [
    {
      id: 1,
      name: "Sucursal Centro",
      address: "Andador del Carmen #11B, Avenida Miguel Hidalgo",
      phone: "+52 967 123 4567",
      hours: "Lunes a Sábado: 9:00 AM - 7:00 PM",
      mapAddress: "Andador del Carmen #11B, Avenida Miguel Hidalgo, San Cristóbal de las Casas, Chiapas, México",
    },
    {
      id: 2,
      name: "Sucursal Guadalupe",
      address: "Andador de Guadalupe #5C, Belisario Domínguez",
      phone: "+52 967 987 6543",
      hours: "Lunes a Sábado: 10:00 AM - 8:00 PM",
      mapAddress: "Andador de Guadalupe #5C, Belisario Domínguez, San Cristóbal de las Casas, Chiapas, México",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestras Ubicaciones
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Visítenos en una de nuestras sucursales en San Cristóbal de las Casas para recibir atención personalizada.
          </p>
        </div>
      </section>

      {/* Locations List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {locations.map((location) => (
              <div key={location.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-auto">
                    <Map address={location.mapAddress} />
                  </div>
                  <div className="p-8 flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {location.name}
                    </h2>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-brand-blue shrink-0 mt-1 mr-3" />
                        <span className="text-gray-700">{location.address}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-brand-blue shrink-0 mr-3" />
                        <a 
                          href={`tel:${location.phone}`}
                          className="text-gray-700 hover:text-brand-blue transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-brand-blue shrink-0 mr-3" />
                        <span className="text-gray-700">{location.hours}</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto flex flex-wrap gap-3">
                      <Button asChild className="bg-brand-blue hover:bg-brand-darkBlue text-white">
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapAddress)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Obtener Direcciones
                        </a>
                      </Button>
                      
                      <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:text-brand-darkBlue hover:border-brand-darkBlue">
                        <a href={`tel:${location.phone}`}>
                          Llamar
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Visítenos Hoy
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Nuestras sucursales están ubicadas estratégicamente para su comodidad en San Cristóbal de las Casas. Contamos con técnicos expertos que le atenderán de manera personalizada para resolver cualquier problema con su dispositivo móvil.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-brand-blue hover:bg-brand-darkBlue text-white">
                <Link to="/contact">Contactar</Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-blue text-brand-blue hover:text-brand-darkBlue hover:border-brand-darkBlue">
                <Link to="/services">Ver Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Public Transportation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Cómo Llegar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Información sobre transporte público y estacionamiento.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transporte Público</h3>
                <p className="text-gray-700 mb-4">
                  Ambas sucursales están ubicadas en zonas céntricas accesibles mediante transporte público. Las rutas de colectivos que pasan cerca incluyen:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Ruta Centro - Merposur</li>
                  <li>Ruta Guadalupe - Centro</li>
                  <li>Ruta Periférica</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Estacionamiento</h3>
                <p className="text-gray-700 mb-4">
                  Para su comodidad, cerca de nuestras sucursales encontrará las siguientes opciones de estacionamiento:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Estacionamiento público a una cuadra de Sucursal Centro</li>
                  <li>Estacionamiento en la plaza comercial junto a Sucursal Guadalupe</li>
                  <li>Estacionamiento en la vía pública (sujeto a disponibilidad)</li>
                </ul>
              </div>
            </div>
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
              <a href="tel:+529671234567">Llamar</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Locations;
