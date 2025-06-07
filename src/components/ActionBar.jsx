import React from 'react';

const ActionBar = ({ selectedSkip, onNext }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t shadow-lg flex items-center justify-between">
    {selectedSkip ? (
      <>
        <div>
          <p className="text-sm">Selected:</p>
          <h3 className="font-semibold">{selectedSkip.size}m³ Skip</h3>
        </div>
        <button
          onClick={onNext}
          className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-500 focus:outline-none"
        >
          Next
        </button>
      </>
    ) : (
      <span className="text-gray-500">Select a skip to continue</span>
    )}
  </div>
);

export default ActionBar;