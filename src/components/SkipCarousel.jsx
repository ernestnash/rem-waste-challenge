import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SkipCard from './SkipCard';

const SkipCarousel = ({ skips, onSelect, onDetails, selectedSkip }) => {
  const containerRef = React.useRef(null);

  const scroll = (offset) => {
    containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <div className="relative mb-24">
      <button
        onClick={() => scroll(-300)}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 focus:outline-none"
      >
        <FaChevronLeft />
      </button>
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide py-2"
      >
        {skips.map(skip => (
          <SkipCard
            key={skip.id}
            skip={skip}
            onSelect={onSelect}
            onDetails={onDetails}
            isSelected={selectedSkip?.id === skip.id}
          />
        ))}
      </div>
      <button
        onClick={() => scroll(300)}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 focus:outline-none"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default SkipCarousel;