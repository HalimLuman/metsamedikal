"use client";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        key: process.env.NEXT_PUBLIC_MAPS_API,
        version: "weekly",
      });

      try {
        await loader.load();
        const mapOptions = {
          center: { lat: 42.005596042754924, lng: 21.424890249999997 },
          zoom: 15,
          mapId: 'MY_NEXTJS_MAPID'
        };
        new google.maps.Map(mapRef.current, mapOptions);
      } catch (error) {
        console.error("Error loading Google Maps", error);
      }
    };

    initMap();
  }, []);

  return <div style={{ height: '400px' }} ref={mapRef} />;
}

export default Map;
