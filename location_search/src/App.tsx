import { useState } from "react";
import type { Place } from "./utils/Place";
import Map from "./components/Map";
import LocationSearch from "./components/LocationSearch";

function App() {
  const[place,setPlace]= useState<Place|null>(null);

  return <div className="flex h-screen">
    <div className="w-80">
       <LocationSearch onPlaceClick={(p)=>setPlace(p)}/>
    </div>
    <div className="flex-1">
      <Map place={place}/>
    </div>
  </div>
 }
export default App
