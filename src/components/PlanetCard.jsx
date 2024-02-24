import PropTypes from 'prop-types';
import { useState } from 'react';
import Resident from './Resident';

export default function PlanetCard({planet}){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="shadow-xl p-10 m-2 bg-white w-50">
          <div className='flex gap-5 items-center'>
          <img src="https://img.freepik.com/premium-photo/space-stars-galaxies-background-digital-illustration_160901-5988.jpg?w=740" alt="" width="40" height="40" className='rounded-full object-contain' />
          <h2 className="text-2xl font-semibold text-center box-border ">{planet.name}</h2>
          </div>
          <div className="mt-4 ">
          <p className="text-gray-700">{`Population: ${planet.residents.length}`}</p>
          <p className="text-gray-700">{`Climate: ${planet.climate}`}</p>
          <p className="text-gray-700">{`Terrain: ${planet.terrain}`}</p>
          </div>
          {planet.residents.length >0 ? <button className="px-5 py-2 my-5 text-sm rounded-full cursor-pointer bg-gradient-to-br from-orange-300 to-red-500 text-white font-bold" onClick={()=>setIsOpen(true)}>View Residents</button>:<div className='text-orange-400 my-5 text-xl font-bold'>No Residents</div>}
        <Resident open={isOpen} onClose={()=> setIsOpen(false)} residentsURL={planet.residents} />

      </div>
      )
}

PlanetCard.propTypes = {
    planet: PropTypes.object.isRequired, // Use `object` instead of `array` for the planet prop
  };