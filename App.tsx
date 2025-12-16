import React, { useState } from 'react';
import { StepWizard } from './components/StepWizard';
import { Troubleshooting } from './components/Troubleshooting';
import { BookOpen } from 'lucide-react';

export default function App() {
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-br from-slate-50 to-blue-50">
      
      <header className="w-full max-w-4xl flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg shadow-md">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800">
              Web公開ガイド
            </h1>
            <p className="text-sm text-slate-500 hidden md:block">
              すべてブラウザ上の操作だけで完結する一番簡単な方法
            </p>
          </div>
        </div>
      </header>

      <main className="w-full max-w-4xl flex flex-col gap-6">
        <StepWizard />

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowTroubleshooting(!showTroubleshooting)}
            className="text-slate-500 hover:text-blue-600 underline text-sm transition-colors"
          >
            {showTroubleshooting ? 'トラブルシューティングを隠す' : 'うまくいかないときは？'}
          </button>
        </div>

        {showTroubleshooting && (
          <div className="animate-fade-in">
            <Troubleshooting />
          </div>
        )}
      </main>
      
      <footer className="mt-12 text-center text-slate-400 text-xs pb-4">
        <p>GitHub Pages Publishing Guide</p>
      </footer>
    </div>
  );
}