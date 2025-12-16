import React, { useState } from 'react';
import { STEPS } from '../constants';
import { StepIndicator } from './StepIndicator';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

export const StepWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFinished, setIsFinished] = useState(false);

  const activeStepData = STEPS.find(s => s.id === currentStep) || STEPS[0];

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsFinished(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setIsFinished(false);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in border border-slate-100">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">おめでとうございます！</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          これであなたのWebサイトが世界に公開されました。<br />
          URLを友達にシェアして自慢しましょう！
        </p>
        <div className="bg-slate-50 p-6 rounded-lg mb-8 max-w-lg mx-auto">
          <h3 className="font-bold text-slate-700 mb-2">公開URLの形式</h3>
          <p className="font-mono text-blue-600 break-all">
            https://[ユーザー名].github.io/[リポジトリ名]/
          </p>
        </div>
        <button
          onClick={handleRestart}
          className="px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-700 transition-colors"
        >
          最初から確認する
        </button>
      </div>
    );
  }

  const Icon = activeStepData.icon;

  return (
    <div className="flex flex-col w-full">
      <StepIndicator currentStep={currentStep} />

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 transition-all duration-300">
        {/* Step Header */}
        <div className="bg-blue-600 p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">{activeStepData.title}</h2>
              <p className="text-blue-100 text-sm md:text-base opacity-90">{activeStepData.description}</p>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6 md:p-8">
          <div className="prose prose-slate max-w-none mb-8">
            {activeStepData.details}
          </div>

          {/* Tips Section */}
          {activeStepData.tips && (
            <div className="mb-8 bg-amber-50 border border-amber-100 rounded-lg p-4">
              <p className="font-bold text-amber-800 mb-2 flex items-center text-sm">
                <span className="bg-amber-200 text-amber-800 rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2">i</span>
                ヒント
              </p>
              <ul className="list-disc list-inside text-sm text-amber-900 space-y-1 ml-1">
                {activeStepData.tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors
                ${currentStep === 1 
                  ? 'text-slate-300 cursor-not-allowed' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}
              `}
            >
              <ChevronLeft className="w-4 h-4" />
              戻る
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 shadow-md hover:shadow-lg transition-all active:scale-95"
            >
              {currentStep === STEPS.length ? '完了！' : '次へ進む'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};