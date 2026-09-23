import "leaflet/dist/leaflet.css";
import { useEffect,useRef } from "react";
import {Map as LeafletMap} from "leaflet";
import { MapContainer, TileLayer,Marker } from "react-leaflet";
import type { Place } from "../utils/Place"



interface MapProps{
    place: Place| null
}

export default function Map({place}:MapProps){
    //LeafletMap is the map object that leaflet gives
    const mapRef = useRef<LeafletMap|null>(null)

    useEffect(()=>{
        if(mapRef.current && place){
            mapRef.current.flyTo([place.latitude,place.longitude])
        }  
    },[place])

    return <MapContainer ref={mapRef} center={[51.5074, -0.1278]} zoom={12} className="h-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        {place && <Marker position={[place.latitude,place.longitude]}/>}

    </MapContainer>
}