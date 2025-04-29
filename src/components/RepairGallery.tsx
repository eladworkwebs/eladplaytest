
import { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Image as ImageIcon, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const RepairGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Reparación de Pantalla",
      image: "https://images.unsplash.com/photo-1595329088732-badb96baaa22?auto=format&fit=crop&q=80&w=800&h=550",
      description: "Reemplazo profesional de pantallas rotas o con fallas para diversos modelos de teléfonos."
    },
    {
      id: 2,
      title: "Cambio de Batería",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=550",
      description: "Sustitución de baterías desgastadas para prolongar la vida útil de su dispositivo."
    },
    {
      id: 3,
      title: "Reparación de Sistema",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=550",
      description: "Diagnóstico y solución de problemas de software y sistema operativo."
    },
    {
      id: 4,
      title: "Reparación de Cámara",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02ff9?auto=format&fit=crop&q=80&w=800&h=550",
      description: "Arreglo de cámaras frontales y traseras con problemas de enfoque o funcionamiento."
    },
    {
      id: 5,
      title: "Reparación de Carga",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&h=550",
      description: "Solución a problemas del puerto de carga y componentes relacionados."
    },
    {
      id: 6,
      title: "Recuperación de Datos",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=550",
      description: "Servicio especializado de recuperación de información valiosa de dispositivos dañados."
    }
  ];

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Galería de Reparaciones
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Explore nuestra galería de servicios de reparación realizados por nuestro equipo de técnicos certificados.
      </p>
      
      <Carousel className="max-w-5xl mx-auto">
        <CarouselContent>
          {galleryItems.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2 h-full">
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <div className="relative group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-white hover:bg-white/20"
                        onClick={() => openLightbox(item)}
                      >
                        <ZoomIn className="mr-2 h-5 w-5" />
                        <span>Ver detalles</span>
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 flex-grow">{item.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3 w-full" 
                      onClick={() => openLightbox(item)}
                    >
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Ver más
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-6 gap-4">
          <CarouselPrevious className="relative static left-0 translate-y-0" />
          <CarouselNext className="relative static right-0 translate-y-0" />
        </div>
      </Carousel>

      {/* Image Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3">
              {selectedImage && (
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto"
                />
              )}
            </div>
            <div className="p-6 md:w-1/3 flex flex-col">
              {selectedImage && (
                <>
                  <h2 className="text-2xl font-bold mb-4">{selectedImage.title}</h2>
                  <p className="text-gray-600 mb-6">{selectedImage.description}</p>
                </>
              )}
              <div className="mt-auto">
                <DialogClose asChild>
                  <Button className="w-full bg-brand-blue hover:bg-brand-darkBlue text-white">
                    Cerrar
                  </Button>
                </DialogClose>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RepairGallery;
