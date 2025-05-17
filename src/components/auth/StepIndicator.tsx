
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator = ({ currentStep, totalSteps }: StepIndicatorProps) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= index + 1 ? 'bg-safepath-purple text-white' : 'bg-gray-200 text-gray-600'
            }`}>
              {index + 1}
            </div>
            {index < totalSteps - 1 && (
              <div className={`w-16 h-1 ${
                currentStep > index + 1 ? 'bg-safepath-purple' : 'bg-gray-200'
              }`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
