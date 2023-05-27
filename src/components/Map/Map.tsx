import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useRouter } from "next/navigation";
import { cities } from "@/constants";
import { Icon } from "leaflet";
import { MapProps } from "./Map.types";

import "leaflet/dist/leaflet.css";
import "./Map.css";

const Map = ({ className = "" }: MapProps) => {
  const router = useRouter();

  return (
    <MapContainer
      bounds={Object.values(cities).map((city) => [city.lat, city.lng])}
      scrollWheelZoom={false}
      className={`Map ${className}`}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {Object.keys(cities).map((slug) => {
        const { lat, lng } = cities[slug as keyof typeof cities];
        return (
          <Marker
            key={slug}
            icon={
              new Icon({
                iconUrl: "/pin.svg",
                iconSize: [16, 34],
                iconAnchor: [8, 34],
              })
            }
            position={[lat, lng]}
            eventHandlers={{ click: () => router.push(`/city/${slug}`) }}
          />
        );
      })}
    </MapContainer>
  );
};

export default Map;
