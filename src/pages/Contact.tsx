
import { Phone, MapPin, Mail, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      details: ["+52 967 123 4567", "+52 967 987 6543"],
      action: {
        label: "Llamar Ahora",
        href: "tel:+529671234567",
      },
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "WhatsApp",
      details: ["+52 967 123 4567"],
      action: {
        label: "Enviar Mensaje",
        href: "https://wa.me/529671234567",
      },
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Correo Electrónico",
      details: ["info@saktechnology.com", "soporte@saktechnology.com"],
      action: {
        label: "Enviar Email",
        href: "mailto:info@saktechnology.com",
      },
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Direcciones",
      details: [
        "Andador del Carmen #11B, Avenida Miguel Hidalgo",
        "Andador de Guadalupe #5C, Belisario Domínguez",
      ],
      action: {
        label: "Ver Ubicaciones",
        href: "/locations",
        isLink: true,
      },
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contáctenos
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Estamos aquí para ayudarle con todas sus necesidades de telefonía móvil. Póngase en contacto con nosotros por teléfono, correo electrónico o visite una de nuestras sucursales.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 text-brand-blue">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-700">
                      {detail}
                    </p>
                  ))}
                </div>
                <div className="mt-auto">
                  {info.action.isLink ? (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-brand-blue text-brand-blue hover:text-brand-darkBlue hover:border-brand-darkBlue"
                    >
                      <a href={info.action.href}>{info.action.label}</a>
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-brand-blue text-brand-blue hover:text-brand-darkBlue hover:border-brand-darkBlue"
                    >
                      <a
                        href={info.action.href}
                        target={info.action.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.action.label}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envíe un Mensaje
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ubicaciones
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Visite una de nuestras sucursales en San Cristóbal de las Casas para recibir atención personalizada.
              </p>

              <div className="space-y-6">
                <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <div className="h-64">
                    <Map address="Andador del Carmen #11B, Avenida Miguel Hidalgo, San Cristóbal de las Casas, Chiapas, México" />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-bold">Sucursal Centro</h3>
                    <p className="text-sm text-gray-600">Andador del Carmen #11B, Avenida Miguel Hidalgo</p>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <div className="h-64">
                    <Map address="Andador de Guadalupe #5C, Belisario Domínguez, San Cristóbal de las Casas, Chiapas, México" />
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-bold">Sucursal Guadalupe</h3>
                    <p className="text-sm text-gray-600">Andador de Guadalupe #5C, Belisario Domínguez</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Horario de Atención
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos disponibles en los siguientes horarios para atenderle.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md">
              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Lunes - Viernes</span>
                  <span className="text-gray-700">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Sábado</span>
                  <span className="text-gray-700">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Domingo</span>
                  <span className="text-gray-700">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-brand-darkBlue to-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Necesita una cotización rápida?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Llámenos directamente o envíenos un mensaje por WhatsApp para una respuesta inmediata.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-gray-100">
              <a href="tel:+529671234567">Llamar Ahora</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <a 
                href="https://wa.me/529671234567" 
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
