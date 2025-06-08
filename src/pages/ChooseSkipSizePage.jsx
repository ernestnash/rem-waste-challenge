import { useState } from 'react';
import ActionBar from '../components/ActionBar';
import HeroInfo from '../components/HeroInfo';
import SkipCarousel from '../components/SkipCarousel';
import SkipDetailsModal from '../components/SkipDetailsModal';
import useFetchSkips from '../hooks/useFetchSkips';
import Stepper from '../components/Stepper';

const ChooseSkipSizePage = () => {
  // In a real app, these would come from context or router state
  const address = 'LE10 1SH';
  const wasteType = 'Garden Waste';

  // Fetch skips based on postcode and area
  const { data: skips, loading, error } = useFetchSkips('LE10 1SH', 'Lowestoft');

  const [selectedSkip, setSelectedSkip] = useState(null);
  const [detailSkip, setDetailSkip] = useState(null);

  const handleSelect = (skip) => {
    setSelectedSkip(skip);
  };

  const handleDetails = (skip) => {
    setDetailSkip(skip);
  };

  const handleCloseDetails = () => {
    setDetailSkip(null);
  };

  const handleNext = () => {
    // TODO: navigate to summary or next step
    console.log('Proceeding with:', selectedSkip);
  };
  const handleBack = () => {
    // TODO: navigate back to previous page
    console.log('Returning to previous page');
  };

  //   console.log("data ", skips);
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Progress Stepper */}
      <Stepper currentStep={2} />
      {/* HeroInfo/Header with info */}
      <HeroInfo address={address} wasteType={wasteType} onEdit={() => {/* navigate back */ }} />

      {loading && <p className="text-center">Loading skip options...</p>}
      {error && <p className="text-center text-red-600">Failed to load skip options.</p>}

      {!loading && skips && (
        <SkipCarousel skips={skips} onSelect={handleSelect} onDetails={handleDetails} selectedSkip={selectedSkip} />
      )}

      <SkipDetailsModal skip={detailSkip} onClose={handleCloseDetails} />
      <ActionBar selectedSkip={selectedSkip} onNext={handleNext} onBack={handleBack} />
    </div>
  );
};

export default ChooseSkipSizePage;
