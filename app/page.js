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
    <div className="layout-container bg-gray-800 text-white">
      <div className="sidebar-container">
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <main className="main-container overflow-hidden">
        <div className="content-wrapper">
          {renderCurrentPage()}
        </div>
      </main>
    </div>
  );
}
