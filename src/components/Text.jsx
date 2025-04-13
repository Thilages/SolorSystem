import React from 'react';
import { planetsData } from '../../constants';

const Text = ({ name }) => {
  const planet = planetsData[name];

  if (!planet) {
    console.error(`No data found for planet: ${name}`);
    return null;
  }

  const { name: planetName, size, description, funFact } = planet;

  return (
    <div className="fixed inset-0 flex pointer-events-none flex-col justify-between text-white p-4 z-10">
      {/* Top Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">{planetName}</h1>
        <p className="text-xl mt-2">{size}</p>
      </div>

      {/* Bottom Section */}
      <div className="text-center mb-4 px-5">
        <p className="text-lg mb-4">{description}</p>
        <p className="text-md text-gray-300 italic">{funFact}</p>
      </div>
    </div>
  );
};

export default Text;
