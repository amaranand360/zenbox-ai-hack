'use client';

import { useState } from 'react';

const HomePage = ({ selectedModel, setSelectedModel }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const models = [
    { id: 'brain', name: 'Brain', icon: '🧠', color: 'from-purple-500 to-pink-500' },
    { id: 'claude', name: 'Claude', icon: '🤖', color: 'from-blue-500 to-cyan-500' },
    { id: 'chatgpt', name: 'ChatGPT', icon: '💭', color: 'from-green-500 to-teal-500' },
    { id: 'gemini', name: 'Gemini', icon: '✨', color: 'from-yellow-500 to-orange-500' },
  ];

  const suggestedPrompts = [
    { icon: '💡', text: 'Give me some tips for effective self-study' },
    { icon: '📝', text: 'Create a reminder to pack my gym bag' },
    { icon: '🎯', text: 'Help me plan my weekly goals' },
  ];

  const quickActions = [
    { 
      title: 'Talk to Text',
      subtitle: 'Magical voice input',
      icon: '🎤',
      gradient: 'from-purple-600 to-blue-600',
      status: 'Talk'
    },
    {
      title: 'Chat with Gemini 2.5 Pro',
      subtitle: '',
      icon: '✨',
      gradient: 'from-orange-500 to-red-500',
      status: ''
    },
    {
      title: 'Write my standup',
      subtitle: '',
      icon: '📝',
      gradient: 'from-green-500 to-blue-500',
      status: ''
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality
      console.log('Searching:', searchQuery);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background-primary main-scrollbar">
      {/* Header */}
      <div className="px-6 sm:px-8 lg:px-12 py-6 border-b border-border-primary bg-background-secondary/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl flex items-center justify-center shadow-glow animate-glow-pulse">
              🏠
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">Home</h1>
          </div>
          <div className="text-xs sm:text-sm text-text-muted bg-background-tertiary px-4 py-2 rounded-full border border-border-primary hover:border-border-secondary transition-colors">
            Beta v0.57
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto w-full space-y-12 sm:space-y-16">
          {/* Logo and Title */}
          <div className="text-center space-y-8 animate-fade-in">
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r from-accent-purple to-accent-pink rounded-4xl flex items-center justify-center text-4xl sm:text-5xl mb-8 mx-auto shadow-glow-lg animate-glow-pulse">
              🧠
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                <span className="gradient-text">Search everything</span>, ask anything
              </h2>
              <p className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Your AI-powered workspace for productivity and creativity
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-4xl mx-auto animate-slide-in">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search, Ask, or Create"
                  className="w-full bg-background-tertiary border border-border-primary rounded-3xl px-8 py-6 pr-48 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-purple focus:ring-2 focus:ring-accent-purple/20 transition-all duration-300 text-lg sm:text-xl group-hover:border-border-secondary group-hover:shadow-glow-sm"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-3">
                  <button
                    type="button"
                    className="p-3 hover:bg-background-hover rounded-xl transition-all duration-200 hover:scale-105"
                    title="Attach file"
                  >
                    <svg className="w-5 h-5 text-text-muted hover:text-text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <div className="flex items-center gap-2 bg-background-hover rounded-xl px-4 py-2.5 border border-border-primary hover:border-border-secondary transition-all duration-200 cursor-pointer">
                    <div className="w-4 h-4 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full shadow-glow-sm"></div>
                    <span className="text-sm font-medium text-text-primary">{selectedModel}</span>
                    <svg className="w-3 h-3 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <button
                    type="button"
                    className="p-3 hover:bg-background-hover rounded-xl transition-all duration-200 hover:scale-105"
                    title="Voice input"
                  >
                    <svg className="w-5 h-5 text-text-muted hover:text-accent-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Suggested Prompts */}
          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(prompt.text)}
                className="flex items-center gap-3 bg-background-tertiary hover:bg-background-hover border border-border-primary hover:border-accent-purple/50 rounded-2xl px-6 py-4 text-sm sm:text-base transition-all duration-200 group hover:scale-105 hover:shadow-glow-sm"
              >
                <span className="text-lg sm:text-xl">{prompt.icon}</span>
                <span className="group-hover:text-accent-purple transition-colors font-medium">{prompt.text}</span>
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full animate-fade-in">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="card card-interactive group hover:scale-105 hover:shadow-glow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-r ${action.gradient} rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-glow group-hover:shadow-glow-lg transition-all duration-300`}>
                    {action.icon}
                  </div>
                  {action.status && (
                    <div className="flex items-center gap-2 bg-accent-green/20 border border-accent-green/30 px-3 py-2 rounded-full">
                      <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                      <span className="text-xs text-accent-green font-semibold">{action.status}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-xl sm:text-2xl text-text-primary group-hover:text-accent-purple transition-colors">
                    {action.title}
                  </h3>
                  {action.subtitle && (
                    <p className="text-sm sm:text-base text-text-muted leading-relaxed">{action.subtitle}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
