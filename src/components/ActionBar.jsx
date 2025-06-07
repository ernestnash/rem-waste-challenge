
const ActionBar = ({ selectedSkip, onNext, onBack }) => (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t shadow-lg flex flex-col items-center justify-between">
        {selectedSkip ? (
            <>
                <div>
                    <p className='text-sm text-gray-600 hidden md:block'>Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</p>
                </div>
                <div className='flex md:flex-row flex-col w-full justify-between items-center'>
                    <div className='w-full md:w-fit gap-4 flex flex-row justify-between'>
                        <div>
                            <p className="text-sm">Selected:</p>
                            <h3 className="font-semibold">{selectedSkip.size}m³ Skip</h3>
                        </div>
                        <div className='flex flex-col md:flex-row md:gap-4 items-center justify-center'>
                            <p className='font-bold md:text-3xl'>£{selectedSkip.price_before_vat}</p>
                            <p className='text-sm'>{selectedSkip.hire_period_days} days Hire period</p>
                        </div>
                    </div>
                   <div className="flex w-full md:w-fit justify-between items-center gap-4 mt-2">
                     <button
                        onClick={onBack}
                        className="bg-gray-600 w-1/2 text-white px-5 py-2 rounded-md hover:bg-green-500 focus:outline-none"
                    >
                        Back
                    </button>
                     <button
                        onClick={onNext}
                        className="bg-green-600 w-1/2 text-white px-5 py-2 rounded-md hover:bg-green-500 focus:outline-none"
                    >
                        Continue
                    </button>
                   </div>
                </div>
            </>
        ) : (
            <span className="text-gray-500">Select a skip to continue</span>
        )}
    </div>
);

export default ActionBar;