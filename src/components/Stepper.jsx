import React from 'react';
import {
    FaCalendarAlt,
    FaCheck,
    FaClipboardCheck,
    FaCreditCard,
    FaLeaf,
    FaMapMarkerAlt,
    FaTruck,
} from 'react-icons/fa';

const steps = [
    { label: 'Postcode', icon: FaMapMarkerAlt },
    { label: 'Waste Type', icon: FaLeaf },
    { label: 'Select Skip', icon: FaTruck },
    { label: 'Permit Check', icon: FaClipboardCheck },
    { label: 'Choose Date', icon: FaCalendarAlt },
    { label: 'Payment', icon: FaCreditCard },
];

const Stepper = ({ currentStep }) => (
    <div className="flex items-center bg-white p-4 rounded-xl shadow-md mb-6 overflow-x-auto">
        {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;
            const Icon = step.icon;

            return (
                <React.Fragment key={step.label}>
                    {/* Step Circle + Label */}
                    <div className="flex flex-col items-center">
                        <div
                            className={`w-10 h-10 flex items-center justify-center rounded-full mb-1 transition
                                ${isCompleted
                                    ? 'bg-green-500 text-white'
                                    : isActive
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-500'}`}
                        >
                            {isCompleted ? <FaCheck /> : <Icon />}
                        </div>
                        <span
                            className={`text-xs text-center transition
                                ${isCompleted || isActive
                                    ? 'text-gray-900 font-medium'
                                    : 'text-gray-400'}`}
                        >
                            {step.label}
                        </span>
                    </div>

                    {/* Connector Bar (not after the last step) */}
                    {index < steps.length - 1 && (
                        <div
                            className={`flex-1 h-[2px] mx-2 rounded
                                ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}`}
                        />
                    )}
                </React.Fragment>
            );
        })}
    </div>
);

export default Stepper;
