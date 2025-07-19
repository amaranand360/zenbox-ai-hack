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
    <div className={`bg-background-secondary border-r border-border-primary flex flex-col transition-all duration-300 ${
      isCollapsed ? 'w-20' : 'w-80'
    }`}>
      {/* Header */}
      <div className="p-6 border-b border-border-primary flex items-center justify-between bg-background-secondary/80 backdrop-blur-sm">
        {!isCollapsed && (
          <div className="flex items-center gap-3 animate-slide-in">
            <div className="w-10 h-10 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl flex items-center justify-center text-xl shadow-glow animate-glow-pulse">
              🧠
            </div>
            <span className="font-bold text-xl text-text-primary">Brain</span>
            <span className="text-xs bg-accent-purple px-3 py-1.5 rounded-full text-white font-semibold shadow-glow-sm">BETA</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-3 hover:bg-background-tertiary rounded-xl transition-all duration-200 hover:scale-105"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg className="w-5 h-5 text-text-muted hover:text-text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto sidebar-scrollbar">
        {/* Main Menu */}
        <div className="p-4 space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group ${
                currentPage === item.id
                  ? 'bg-background-tertiary border border-accent-purple/50 shadow-glow-sm'
                  : 'hover:bg-background-tertiary/50 hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-xl sm:text-2xl">{item.icon}</span>
              {!isCollapsed && (
                <div className="flex-1 flex items-center justify-between animate-slide-in">
                  <span className="text-sm font-semibold text-text-primary group-hover:text-accent-purple transition-colors">{item.label}</span>
                  {item.badge && (
                    <span className="text-xs bg-background-hover px-3 py-1.5 rounded-full text-text-muted font-medium border border-border-primary">
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
          <div className="px-4 pb-6">
            <div className="text-xs text-text-muted mb-4 px-2 font-semibold uppercase tracking-wider">Models</div>
            <div className="space-y-1">
              {modelItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage('models')}
                  className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-background-tertiary/50 transition-all duration-200 group hover:scale-105"
                  style={{ animationDelay: `${(index + 2) * 50}ms` }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Apps Section */}
        {!isCollapsed && (
          <div className="px-4 pb-6">
            <div className="text-xs text-text-muted mb-4 px-2 font-semibold uppercase tracking-wider">Apps</div>
            <div className="space-y-1">
              {appItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => item.id === 'connect' ? null : setCurrentPage('apps')}
                  className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group hover:scale-105 ${
                    item.id === 'connect'
                      ? 'hover:bg-accent-purple/10 hover:border-accent-purple/30 border border-transparent'
                      : 'hover:bg-background-tertiary/50'
                  }`}
                  style={{ animationDelay: `${(index + 6) * 50}ms` }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className={`text-sm font-medium transition-colors ${
                    item.id === 'connect'
                      ? 'text-accent-purple group-hover:text-accent-pink'
                      : 'text-text-secondary group-hover:text-text-primary'
                  }`}>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chats Section */}
        {!isCollapsed && (
          <div className="px-4 pb-6">
            <div className="text-xs text-text-muted mb-4 px-2 font-semibold uppercase tracking-wider">Chats</div>
            <div className="space-y-1">
              {chatItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage('talk')}
                  className="w-full flex items-start gap-4 p-3 rounded-xl hover:bg-background-tertiary/50 transition-all duration-200 group hover:scale-105"
                  style={{ animationDelay: `${(index + 12) * 50}ms` }}
                >
                  <div className="w-2 h-2 bg-text-muted rounded-full mt-2 flex-shrink-0 group-hover:bg-accent-purple transition-colors"></div>
                  <span className="text-sm text-left leading-tight font-medium text-text-secondary group-hover:text-text-primary transition-colors">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-6 border-t border-[#333] bg-[#0a0a0a]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-lg font-bold shadow-lg">
              A
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">Amar's Workspace</div>
              <div className="text-xs text-gray-400">Free Plan</div>
            </div>
            <button className="p-2 hover:bg-[#2a2a2a] rounded-xl transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
