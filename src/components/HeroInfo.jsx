import React from 'react';
import { FaEdit } from 'react-icons/fa';

const HeroInfo = ({ address, wasteType, onEdit }) => (
  <div className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg flex items-center justify-between mb-6">
    <div>
      <h1 className="text-2xl font-bold">Choose Your Skip Size</h1>
      {/* <p className="mt-1">Select the skip size that best suits your needs</p> */}
      <p className="mt-1">{address} &mdash; {wasteType}</p>
    </div>
    <button onClick={onEdit} className="p-2 hover:bg-opacity-75 rounded-full">
      <FaEdit />
    </button>
  </div>
);

export default HeroInfo;