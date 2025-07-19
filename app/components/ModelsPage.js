'use client';

import { useState } from 'react';

const ModelsPage = ({ selectedModel, setSelectedModel }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const models = [
    {
      id: 'brain',
      name: 'Brain',
      icon: '🧠',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Our flagship model with access to all your connected apps and data',
      features: ['Connected Apps', 'Real-time Data', 'Productivity Focus'],
      status: 'recommended',
      badge: 'BETA'
    },
    {
      id: 'claude',
      name: 'Claude',
      icon: '🤖',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Anthropic\'s Claude Sonnet 4 - excellent for reasoning and analysis',
      features: ['Advanced Reasoning', 'Code Generation', 'Long Context'],
      status: 'available'
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      icon: '💭',
      gradient: 'from-green-500 to-teal-500',
      description: 'OpenAI\'s GPT-4 - versatile and creative AI assistant',
      features: ['Creative Writing', 'Problem Solving', 'General Knowledge'],
      status: 'available'
    },
    {
      id: 'gemini',
      name: 'Gemini',
      icon: '✨',
      gradient: 'from-yellow-500 to-orange-500',
      description: 'Google\'s Gemini Pro - multimodal AI with strong analytical capabilities',
      features: ['Multimodal', 'Data Analysis', 'Research'],
      status: 'available'
    }
  ];

  const filteredModels = models.filter(model =>
    model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    model.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleModelSelect = (modelId) => {
    setSelectedModel(modelId);
  };

  return (
    <div className="flex flex-col h-full bg-[#1a1a1a]">
      {/* Header */}
      <div className="px-8 py-6 border-b border-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                🤖
              </div>
              <h1 className="text-3xl font-bold text-white">Models</h1>
            </div>
            <div className="text-sm text-gray-400 bg-[#2a2a2a] px-3 py-1.5 rounded-full border border-[#444]">
              Choose your AI assistant
            </div>
          </div>

          {/* Search */}
          <div className="relative max-w-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search models..."
              className="w-full bg-[#2a2a2a] border border-[#444] rounded-xl px-5 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
            <svg className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Models Grid */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredModels.map((model) => (
              <div
                key={model.id}
                className={`bg-[#1e1e1e] border rounded-2xl p-8 cursor-pointer transition-all duration-200 hover:border-[#444] hover:bg-[#252525] ${
                  selectedModel === model.id ? 'border-purple-500 bg-[#2a1a2a] ring-2 ring-purple-500/20' : 'border-[#333]'
                }`}
                onClick={() => handleModelSelect(model.id)}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${model.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                      {model.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white">{model.name}</h3>
                      {model.badge && (
                        <span className="text-xs bg-purple-600 px-3 py-1 rounded-full text-white font-medium mt-1 inline-block">
                          {model.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {selectedModel === model.id && (
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-base mb-6 leading-relaxed">
                  {model.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {model.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {model.status === 'recommended' && (
                      <div className="flex items-center gap-2 bg-green-600/20 border border-green-500/30 px-3 py-1.5 rounded-full">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 font-medium">Recommended</span>
                      </div>
                    )}
                    {model.status === 'available' && (
                      <div className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1.5 rounded-full">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-xs text-blue-400 font-medium">Available</span>
                      </div>
                    )}
                  </div>

                  <button
                    className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedModel === model.id
                        ? 'bg-purple-600 text-white shadow-lg hover:bg-purple-700'
                        : 'bg-[#2a2a2a] text-gray-300 hover:bg-[#3a3a3a] border border-[#444] hover:border-purple-500/50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleModelSelect(model.id);
                    }}
                  >
                    {selectedModel === model.id ? 'Selected' : 'Select'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredModels.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-[#2a2a2a] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="text-gray-400 text-lg mb-2">No models found</div>
              <div className="text-sm text-gray-500">Try adjusting your search query</div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-8 py-6 border-t border-[#333] bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              ℹ️
            </div>
            <div>
              <div className="text-base font-semibold text-white">
                Current Selection: {selectedModel}
              </div>
              <div className="text-sm text-gray-400">
                Switch between models anytime during your conversation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelsPage;
