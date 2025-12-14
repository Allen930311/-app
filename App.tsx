import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ChatAssistant from './components/ChatAssistant';
import ImageGenerator from './components/ImageGenerator';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD);

  const renderContent = () => {
    switch (currentView) {
      case AppView.DASHBOARD:
        return <Dashboard />;
      case AppView.CHAT:
        return <ChatAssistant />;
      case AppView.VISUALIZER:
        return <ImageGenerator />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 font-sans selection:bg-emerald-500/30">
      <Sidebar currentView={currentView} onChangeView={setCurrentView} />
      <main className="flex-1 relative overflow-hidden">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
