import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';

const SkipDetailsModal = ({ skip, onClose }) => {
  if (!skip) return null;
  const vatAmount = (skip.price_before_vat * skip.vat) / 100;
  const totalPrice = skip.price_before_vat + vatAmount;
//   const dummyImage = '/skip.jpg';
const imageSrc = (skip.size === 20 || skip.size === 40)
    ? 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg'
    : 'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg';

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-11/12 md:w-2/3 lg:w-1/2 overflow-hidden">
        <div className="relative">
          {/* <img src={dummyImage} alt="Skip" className="w-full h-56 xl:h-96 object-cover" /> */}
          <img src={imageSrc} alt="Skip" className="w-full h-56 xl:h-96 object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white bg-opacity-75 p-2 rounded-full hover:bg-opacity-100 focus:outline-none"
          >
            <FaTimes className="text-gray-700" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{skip.size}m³ Skip Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div><strong>Hire Period:</strong> {skip.hire_period_days} days</div>
            <div><strong>Road Access:</strong> {skip.allowed_on_road ? 'Allowed' : 'Not Allowed'}</div>
            <div><strong>Heavy Waste:</strong> {skip.allows_heavy_waste ? 'Allowed' : 'Not Allowed'}</div>
            <div><strong>Base Price:</strong> £{skip.price_before_vat.toFixed(2)}</div>
            <div><strong>VAT ({skip.vat}%):</strong> £{vatAmount.toFixed(2)}</div>
            <div><strong>Total Price:</strong> £{totalPrice.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SkipDetailsModal;