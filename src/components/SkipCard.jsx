import React from 'react';

const SkipCard = ({ skip, onSelect, onDetails, isSelected }) => {
    const vatAmount = (skip.price_before_vat * skip.vat) / 100;
    const totalPrice = skip.price_before_vat + vatAmount;
    //   const dummyImage = '/skip.jpg';
    const imageSrc = (skip.size === 20 || skip.size === 40)
        ? 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg'
        : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg';

    // Highlight selected card with a blue ring
    const selectedClass = isSelected ? 'ring-4 ring-blue-500' : '';

    return (
        <div className={`bg-white shadow-xl rounded-xl overflow-hidden m-2 flex-shrink-0 w-64 transform hover:scale-105 transition1 ${selectedClass}`}>
            {/* Image with overlay badges */}
            <div className="relative">
                <img src={imageSrc} alt="Skip" className="h-40 w-full object-cover" />
                <div className="absolute top-2 right-2 flex flex-col space-y-1">
                    {!skip.allowed_on_road && (
                        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                            Not Allowed on road
                        </span>
                    )}
                    {!skip.allows_heavy_waste && (
                        <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                            No Heavy Waste
                        </span>
                    )}
                </div>
            </div>
            {/* <img src={dummyImage} alt="Skip" className="h-40 w-full object-cover" /> */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Allowability Indicators */}
                {/* <div className="flex flex-wrap gap-2 mb-2">
                    {!skip.allowed_on_road && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                            Not allowed on road
                        </span>
                    )}
                    {!skip.allows_heavy_waste && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                            No heavy waste
                        </span>
                    )}
                </div> */}
                <h2 className="font-semibold text-lg">{skip.size}m³ Skip</h2>
                <p className="text-sm text-gray-600">Hire: {skip.hire_period_days} days</p>
                <p className="mt-2 text-xl font-bold">£{totalPrice.toFixed(2)} incl. VAT</p>
                <div className="mt-4 flex justify-between items-center">
                    <button
                        onClick={() => onDetails(skip)}
                        className="text-sm text-blue-600 hover:underline focus:outline-none"
                    >
                        Details
                    </button>
                    <button
                        onClick={() => onSelect(skip)}
                        className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-500 focus:outline-none"
                    >
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SkipCard;