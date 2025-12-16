import React from 'react';
import { Check } from 'lucide-react';
import { STEPS } from '../constants';

interface StepIndicatorProps {
  currentStep: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <div className="w-full mb-8 px-2">
      {/* Mobile Text Indicator */}
      <div className="md:hidden flex justify-between items-center mb-4 text-sm font-medium text-slate-600">
        <span>Step {currentStep} / {STEPS.length}</span>
        <span className="text-blue-600">{STEPS[currentStep - 1].shortTitle}</span>
      </div>

      {/* Desktop Visual Indicator */}
      <div className="relative flex items-center justify-between w-full">
        {/* Background Line */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-200 -z-10" />
        
        {/* Active Line Progress */}
        <div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 -z-10 transition-all duration-500 ease-in-out" 
          style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
        />

        {STEPS.map((step) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;

          return (
            <div key={step.id} className="flex flex-col items-center group">
              <div 
                className={`
                  w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isCompleted ? 'bg-blue-600 border-blue-600 text-white' : ''}
                  ${isActive ? 'bg-white border-blue-600 text-blue-600 scale-110 shadow-lg' : ''}
                  ${!isActive && !isCompleted ? 'bg-white border-slate-300 text-slate-300' : ''}
                `}
              >
                {isCompleted ? <Check className="w-5 h-5 md:w-6 md:h-6" /> : step.id}
              </div>
              <span 
                className={`
                  absolute top-12 md:top-14 text-xs font-medium transition-colors duration-300 w-20 text-center hidden md:block
                  ${isActive ? 'text-blue-700' : 'text-slate-400'}
                `}
              >
                {step.shortTitle}
              </span>
            </div>
          );
        })}
      </div>
      <div className="h-6 md:h-10"></div> {/* Spacer for text */}
    </div>
  );
};