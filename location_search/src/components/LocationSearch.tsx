import { useState } from "react"
import type { Place } from "../utils/Place"
import { search } from "../utils/search"

interface LocationSearchProps{
    onPlaceClick:(place:Place)=> void
}


export default function LocationSearch({onPlaceClick}:LocationSearchProps){
    const[places,setPlaces] = useState<Place[]>([])
    const[searchTerm,setSearchTerm]=useState("")

    const handleSearch= async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const foundPlaces = await search(searchTerm);
        setPlaces(foundPlaces)
    }
    return <div className="h-full border-r bg-white p-4">
        <form onSubmit={handleSearch} className="mb-4 flex gap-2">
            <label htmlFor="term">Search</label>
            <input id="term" 
            type="text" 
            value={searchTerm} 
            onChange={e=>setSearchTerm(e.target.value)} 
            className="border border-gray-300" />
        </form>
        <label htmlFor="places">Results</label>
        <div id="places">
            
            {places?.map((place)=>
            <div key={place.id} className="rounded-md border bg-slate-50">
                
                <li>{place.name}</li>
                <button className="rounded-md bg-slate-900 text-white" onClick={()=>onPlaceClick(place)}>Go</button>
                </div>
            )}
        </div>
        
    </div>
}
