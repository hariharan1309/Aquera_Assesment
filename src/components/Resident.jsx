import PropTypes from 'prop-types';
import { useState,useEffect } from 'react';
export default function Resident({ open, onClose, residentsURL }) {
    const [resident, setResident] = useState([]);
    useEffect(() => {
        const fetchPlanets = async () => {
          try {
            const promises = residentsURL.map(async (url) => {
              const response = await fetch(url);
              const data = await response.json();
              return data;
            });
      
            // Use Promise.all to wait for all requests to complete
            const planetDataArray = await Promise.all(promises);
      
            // Now planetDataArray contains data for each planet
            setResident(planetDataArray);
          } catch (error) {
            console.error(error);
          }
        };
      
        // Call the fetchPlanets function unconditionally
        fetchPlanets();
      }); 
    if (!open){
        return null;
    }       
      
    return (
    <>
        <div className="fixed inset-0 z-50 backdrop-blur-sm backdrop-filter overflow-y-auto p-5">
        <h2 className="text-3xl text-center underline font-bold">Residents :</h2>

          <ul className="relative max-h-[80vh] overflow-y-auto p-[20px] w-[400px] mx-auto mt-16 scrollbar-hide bg-white rounded-lg shadow-xl">
            <div>
              {resident.map((residentData, index) => (
                <li key={index} className="p-5 m-2 shadow-xl">
                  <div className="mt-4">
                    <p className="text-gray-700">{`Name: ${residentData.name}`}</p>
                    <p className="text-gray-700">{`Height: ${residentData.height}`}</p>
                    <p className="text-gray-700">{`Mass: ${residentData.mass}`}</p>
                    <p className="text-gray-700">{`Gender: ${residentData.gender}`}</p>
                    <p className="text-gray-700">{`DOB: ${residentData.birth_year}`}</p>
                  </div>
                </li>
              ))}
              <button
                className="px-5 py-2 m-5 text-sm rounded-full cursor-pointer bg-gradient-to-br from-orange-300 to-red-500 text-white font-semibold"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </ul>
        </div>
      </>
    );
}
Resident.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    residentsURL: PropTypes.array.isRequired,
};

