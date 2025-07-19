'use client';

import { useState } from 'react';

const AppsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const connectedApps = [
    {
      id: 'google-calendar',
      name: 'Google Calendar',
      description: 'Sync between Google Calendar and ClickUp',
      icon: '📅',
      color: 'bg-blue-600',
      status: 'connected',
      category: 'productivity'
    }
  ];

  const availableApps = [
    {
      id: 'bitbucket',
      name: 'Bitbucket',
      description: 'Link Bitbucket commits, branches, and pull requests directly to tasks',
      icon: '🪣',
      color: 'bg-blue-700',
      status: 'available',
      category: 'development'
    },
    {
      id: 'box',
      name: 'Box',
      description: 'Attach Box files to tasks, comments and search for Box content',
      icon: '📦',
      color: 'bg-blue-500',
      status: 'available',
      category: 'storage'
    },
    {
      id: 'dropbox',
      name: 'Dropbox',
      description: 'Attach Dropbox files to tasks and search for Dropbox files directly',
      icon: '📁',
      color: 'bg-blue-600',
      status: 'available',
      category: 'storage'
    },
    {
      id: 'github',
      name: 'GitHub',
      description: 'Easily view and link GitHub PRs, commits, and more to tasks in ClickUp',
      icon: '🐙',
      color: 'bg-gray-800',
      status: 'available',
      category: 'development'
    },
    {
      id: 'gitlab',
      name: 'GitLab',
      description: 'Link GitLab activity directly to ClickUp tasks',
      icon: '🦊',
      color: 'bg-orange-600',
      status: 'available',
      category: 'development'
    },
    {
      id: 'google-drive',
      name: 'Google Drive',
      description: 'Easily attach, create, and search for Google Drive files directly',
      icon: '💾',
      color: 'bg-yellow-500',
      status: 'available',
      category: 'storage'
    },
    {
      id: 'jira',
      name: 'Jira',
      description: 'Preview, create, and search Jira issues all within ClickUp',
      icon: '🔷',
      color: 'bg-blue-600',
      status: 'available',
      category: 'project-management'
    },
    {
      id: 'notion',
      name: 'Notion',
      description: 'Preview, create, and search Notion databases all within ClickUp',
      icon: '📝',
      color: 'bg-gray-700',
      status: 'available',
      category: 'productivity'
    },
    {
      id: 'onedrive',
      name: 'OneDrive',
      description: 'Easily attach, create, and search for OneDrive files directly',
      icon: '☁️',
      color: 'bg-blue-600',
      status: 'available',
      category: 'storage'
    },
    {
      id: 'outlook-calendar',
      name: 'Outlook Calendar',
      description: 'Sync between Outlook Calendar and ClickUp',
      icon: '📅',
      color: 'bg-blue-700',
      status: 'available',
      category: 'productivity'
    },
    {
      id: 'sharepoint',
      name: 'SharePoint',
      description: 'Easily attach, create, and search for SharePoint files directly',
      icon: '🔗',
      color: 'bg-blue-600',
      status: 'available',
      category: 'storage'
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Stay in the loop. Slack with ClickUp',
      icon: '💬',
      color: 'bg-purple-600',
      status: 'available',
      category: 'communication'
    },
    {
      id: 'teams',
      name: 'Teams',
      description: 'Stay in the loop. Teams with ClickUp',
      icon: '👥',
      color: 'bg-blue-600',
      status: 'available',
      category: 'communication'
    },
    {
      id: 'zoom',
      name: 'Zoom',
      description: 'Start meetings with one click',
      icon: '📹',
      color: 'bg-blue-500',
      status: 'available',
      category: 'communication'
    }
  ];

  const allApps = [...connectedApps, ...availableApps];
  const filteredApps = allApps.filter(app =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleConnect = (appId) => {
    console.log('Connecting to app:', appId);
    // In a real app, this would handle the OAuth flow or connection process
  };

  return (
    <div className="flex flex-col h-full bg-[#1a1a1a]">
      {/* Header */}
      <div className="px-8 py-6 border-b border-[#333]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                🔗
              </div>
              <h1 className="text-3xl font-bold text-white">Connected apps</h1>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
              Search through and ask about all of your external apps. Ask questions about your
              calendar events, your team's GitHub repo, and more. Connect your apps to get started.
            </p>
          </div>

          {/* Search */}
          <div className="relative max-w-lg">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search apps..."
              className="w-full bg-[#2a2a2a] border border-[#444] rounded-xl px-5 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
            />
            <svg className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      <div className="flex-1 overflow-y-auto px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="bg-[#1e1e1e] border border-[#333] rounded-2xl p-6 hover:border-[#444] hover:bg-[#252525] transition-all duration-200 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${app.color} rounded-xl flex items-center justify-center text-xl shadow-lg`}>
                      {app.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg group-hover:text-purple-300 transition-colors">
                        {app.name}
                      </h3>
                    </div>
                  </div>

                  {app.status === 'connected' && (
                    <div className="flex items-center gap-2 bg-green-600/20 border border-green-500/30 px-3 py-1.5 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400 font-medium">Connected</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {app.description}
                </p>

                {/* Action Button */}
                <button
                  onClick={() => handleConnect(app.id)}
                  className={`w-full py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                    app.status === 'connected'
                      ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-600/25'
                      : 'bg-[#2a2a2a] text-gray-300 hover:bg-[#3a3a3a] border border-[#444] hover:border-purple-500/50 hover:text-white'
                  }`}
                >
                  {app.status === 'connected' ? 'Connected' : 'Connect'}
                </button>
              </div>
            ))}
          </div>

          {filteredApps.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-[#2a2a2a] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="text-gray-400 text-lg mb-2">No apps found</div>
              <div className="text-sm text-gray-500">Try adjusting your search query</div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="px-8 py-6 border-t border-[#333] bg-[#161616]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              🔗
            </div>
            <div>
              <div className="text-base font-semibold text-white">
                {connectedApps.length} app{connectedApps.length !== 1 ? 's' : ''} connected
              </div>
              <div className="text-sm text-gray-400">
                Connect more apps to unlock the full power of Brain AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsPage;
