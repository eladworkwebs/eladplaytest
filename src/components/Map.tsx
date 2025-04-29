
import { useEffect, useRef } from "react";

interface MapProps {
  address: string;
  zoom?: number;
}

const Map = ({ address, zoom = 15 }: MapProps) => {
  const mapRef = useRef<HTMLIFrameElement>(null);

  // Encode the address for the Google Maps URL
  const encodedAddress = encodeURIComponent(address);
  
  // Create the Google Maps embed URL
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full h-full min-h-[300px]">
      <iframe
        ref={mapRef}
        title={`Map showing ${address}`}
        src={mapUrl}
        className="w-full h-full border-0 rounded-lg"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
