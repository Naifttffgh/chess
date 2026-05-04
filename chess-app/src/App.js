import React from 'react';
import { GameBoard } from './components/GameBoard';
import { AnalysisPanel } from './components/AnalysisPanel';
import './styles/tailwind.css';

function App() {
  return (
    <div className="min-h-screen bg-chess-dark text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8 text-chess-accent">Stockfish Local Arena</h1>
      
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* الرقعة وشريط التقييم */}
        <GameBoard />
        
        {/* لوحة التحليل والنقلات العبقرية */}
        <AnalysisPanel />
      </div>
      
      <footer className="mt-10 text-sm text-gray-500">
        Engine: Stockfish 16 (Local Worker) | Display: 210Hz Optimized
      </footer>
    </div>
  );
}

export default App;
