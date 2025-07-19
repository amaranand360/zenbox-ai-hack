'use client';

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';
import TalkPage from './components/TalkPage';
import ModelsPage from './components/ModelsPage';
import AppsPage from './components/AppsPage';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedModel, setSelectedModel] = useState('Brain');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage selectedModel={selectedModel} setSelectedModel={setSelectedModel} />;
      case 'talk':
        return <TalkPage selectedModel={selectedModel} setSelectedModel={setSelectedModel} />;
      case 'models':
        return <ModelsPage selectedModel={selectedModel} setSelectedModel={setSelectedModel} />;
      case 'apps':
        return <AppsPage />;
      default:
        return <HomePage selectedModel={selectedModel} setSelectedModel={setSelectedModel} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#1a1a1a] text-white">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main className="flex-1 overflow-hidden">
        {renderCurrentPage()}
      </main>
    </div>
  );
}
