'use client';

import { useState } from 'react';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'talk', label: 'Talk', icon: '💬', badge: '4x productivity' },
  ];

  const modelItems = [
    { id: 'brain', label: 'Brain', icon: '🧠' },
    { id: 'claude', label: 'Claude', icon: '🤖' },
    { id: 'chatgpt', label: 'ChatGPT', icon: '💭' },
    { id: 'gemini', label: 'Gemini', icon: '✨' },
  ];

  const appItems = [
    { id: 'clickup', label: 'ClickUp', icon: '📋' },
    { id: 'calendar', label: 'Google Calendar', icon: '📅' },
    { id: 'drive', label: 'Google Drive', icon: '💾' },
    { id: 'dropbox', label: 'Dropbox', icon: '📦' },
    { id: 'github', label: 'GitHub', icon: '🐙' },
    { id: 'connect', label: 'Connect app', icon: '➕' },
  ];

  const chatItems = [
    { id: 'nextjs', label: 'Next.js App Creation Command' },
    { id: 'meeting', label: 'Meeting with Amar at 11 AM' },
  ];

  return (
    <div className={`bg-gray-900 border-r border-gray-700 flex flex-col transition-all duration-300 ease-in-out ${
      isCollapsed ? 'w-16' : 'w-72'
    } min-h-screen`}>
      {/* Header */}
      <div className="px-6 py-6 border-b border-gray-700 flex items-center justify-between bg-gray-900">
        {!isCollapsed && (
          <div className="flex items-center gap-3 animate-slide-in min-w-0 flex-1">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-lg shadow-lg flex-shrink-0">
              🧠
            </div>
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent truncate">zenbox-ai</span>
            <span className="text-xs bg-purple-600 px-2 py-1 rounded-md text-white font-medium shadow-sm flex-shrink-0">BETA</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-700 rounded-lg transition-all duration-200 flex-shrink-0"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto sidebar-scrollbar">
        {/* Main Menu */}
        <div className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative ${
                currentPage === item.id
                  ? 'bg-gray-700 text-white border-l-4 border-purple-500'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-center w-6 h-6 flex-shrink-0">
                <span className="text-lg">{item.icon}</span>
              </div>
              {!isCollapsed && (
                <div className="flex-1 flex items-center justify-between min-w-0">
                  <span className="text-sm font-medium truncate">{item.label}</span>
                  {item.badge && (
                    <span className="text-xs bg-gray-600 px-2 py-1 rounded-md text-gray-300 font-medium flex-shrink-0 ml-2">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Models Section */}
        {!isCollapsed && (
          <div className="px-4 pb-4">
            <div className="text-xs text-gray-500 mb-3 px-2 font-semibold uppercase tracking-wider">Models</div>
            <div className="space-y-1">
              {modelItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage('models')}
                  className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-700 transition-all duration-200 group text-gray-400 hover:text-white"
                >
                  <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                    <span className="text-base">{item.icon}</span>
                  </div>
                  <span className="text-sm font-medium truncate">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Apps Section */}
        {!isCollapsed && (
          <div className="px-4 pb-4">
            <div className="text-xs text-gray-500 mb-3 px-2 font-semibold uppercase tracking-wider">Apps</div>
            <div className="space-y-1">
              {appItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => item.id === 'connect' ? null : setCurrentPage('apps')}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 group ${
                    item.id === 'connect'
                      ? 'hover:bg-purple-600/20 text-purple-400 hover:text-purple-300'
                      : 'hover:bg-gray-700 text-gray-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                    <span className="text-base">{item.icon}</span>
                  </div>
                  <span className="text-sm font-medium truncate">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chats Section */}
        {!isCollapsed && (
          <div className="px-4 pb-4">
            <div className="text-xs text-gray-500 mb-3 px-2 font-semibold uppercase tracking-wider">Chats</div>
            <div className="space-y-1">
              {chatItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage('talk')}
                  className="w-full flex items-start gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-700 transition-all duration-200 group text-gray-400 hover:text-white"
                >
                  <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0 group-hover:bg-purple-400 transition-colors"></div>
                  <span className="text-sm text-left leading-tight font-medium truncate">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-sm font-bold text-white shadow-lg flex-shrink-0">
              A
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white truncate">Amar's Workspace</div>
              <div className="text-xs text-gray-400">Free Plan</div>
            </div>
            <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0">
              <svg className="w-4 h-4 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
