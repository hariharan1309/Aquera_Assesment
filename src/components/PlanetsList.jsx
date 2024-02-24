
import { useState, useEffect } from 'react';
import Planets from './Planets';
export default function PlanetList () {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets/?format=json');
      const data = await response.json();
      setPlanets(data.results);
      setNextPage(data.next);
    };

    fetchPlanets();
  }, []);

  const loadMorePlanets = async () => {
    if (nextPage) {
      const response = await fetch(nextPage);
      const data = await response.json();
      setPlanets((prevPlanets) => [...prevPlanets, ...data.results]);
      setNextPage(data.next);
    }
  };

    return (
      <div className="mt-10">
        <section className="box-border">
          <Planets data={planets} />
        </section>
        {nextPage && (
          <button
            onClick={loadMorePlanets}
            className=" px-5 py-4 m-5 text-sm rounded-full cursor-pointer bg-gradient-to-br from-orange-300 to-red-500 text-white font-semibold"
          >
            Load More
          </button>
        )}
      </div>
    );
}
