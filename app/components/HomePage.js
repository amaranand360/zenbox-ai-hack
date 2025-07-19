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
    <div className="flex flex-col h-screen bg-gray-800">
      {/* Header */}
      <div className="px-8 py-6 border-b border-gray-700 bg-gray-900 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
              🏠
            </div>
            <h1 className="text-2xl font-bold text-white">Home</h1>
          </div>
          <div className="text-sm text-gray-400 bg-gray-700 px-4 py-2 rounded-lg border border-gray-600">
            Beta v0.57
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <div className="max-w-4xl mx-auto w-full space-y-16">
          {/* Logo and Title */}
          <div className="text-center space-y-8">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-lg">
              🧠
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Search everything</span>, ask anything
              </h2>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-3xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search, Ask, or Create"
                  className="w-full bg-gray-700 border border-gray-600 rounded-2xl px-6 py-4 pr-40 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-lg"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <div className="flex items-center gap-2 bg-gray-600 rounded-lg px-3 py-2 border border-gray-500">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <span className="text-sm font-medium text-white">{selectedModel}</span>
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <button
                    type="button"
                    className="p-2 hover:bg-gray-600 rounded-lg transition-all duration-200"
                    title="Voice input"
                  >
                    <svg className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Suggested Prompts */}
          <div className="flex flex-wrap gap-4 justify-center">
            {suggestedPrompts.map((prompt, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(prompt.text)}
                className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-purple-500/50 rounded-xl px-4 py-3 text-sm transition-all duration-200 group text-gray-300 hover:text-white"
              >
                <span className="text-lg">{prompt.icon}</span>
                <span className="group-hover:text-purple-400 transition-colors font-medium">{prompt.text}</span>
              </button>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="bg-gray-700 border border-gray-600 rounded-2xl p-6 hover:bg-gray-600 transition-all duration-200 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${action.gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                    {action.icon}
                  </div>
                  {action.status && (
                    <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-2 py-1 rounded-lg">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400 font-medium">{action.status}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-white group-hover:text-purple-400 transition-colors">
                    {action.title}
                  </h3>
                  {action.subtitle && (
                    <p className="text-sm text-gray-400">{action.subtitle}</p>
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
