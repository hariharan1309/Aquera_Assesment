// Planets.js
import PropTypes from 'prop-types';
import PlanetCard from './PlanetCard';

export default function Planets({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10">
      {data.map((planet) => (
        <PlanetCard key={planet.name} planet={planet} />
      ))}
    </div>
  );
}

Planets.propTypes = {
  data: PropTypes.array.isRequired,
};
