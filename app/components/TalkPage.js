'use client';

import { useState, useRef, useEffect } from 'react';

const TalkPage = ({ selectedModel, setSelectedModel }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'user',
      content: 'i want to create next js app give the cmd new proj',
      timestamp: new Date()
    },
    {
      id: 2,
      type: 'assistant',
      content: `Here's the command to create a new Next.js app:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

Replace \`my-app\` with your desired project name. This will prompt you with several options:

• **TypeScript** (recommended: Yes)
• **ESLint** (recommended: Yes)  
• **Tailwind CSS** (your choice)
• **src/** directory (your choice)
• **App Router** (recommended: Yes)
• **Turbopack** (your choice for faster dev builds)

If you want to skip the prompts and use defaults, you can add flags:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --eslint --app
\`\`\``,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: `I understand you want help with: "${userMessage.content}". This is a simulated response from ${selectedModel}. In a real implementation, this would connect to the actual AI model API.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const formatMessage = (content) => {
    // Simple markdown-like formatting
    return content
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-[#0a0a0a] border border-[#333] rounded-lg p-4 my-2 overflow-x-auto"><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-[#333] px-1 py-0.5 rounded text-sm">$1</code>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/•/g, '•');
  };

  return (
    <div className="flex flex-col h-full bg-[#1a1a1a]">
      {/* Header */}
      <div className="px-8 py-6 border-b border-[#333] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
            ☀️
          </div>
          <div>
            <h1 className="font-bold text-xl text-white">{selectedModel}</h1>
            <p className="text-sm text-gray-400 bg-[#2a2a2a] px-2 py-1 rounded-full inline-block">
              4x productivity
            </p>
          </div>
        </div>
        <button className="p-3 hover:bg-[#2a2a2a] rounded-xl transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {messages.map((message) => (
            <div key={message.id} className={`chat-message ${message.type === 'user' ? 'ml-auto' : ''}`}>
              {message.type === 'assistant' && (
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    ☀️
                  </div>
                  <div className="font-bold text-lg text-white">{selectedModel}</div>
                </div>
              )}
              <div className={`max-w-4xl ${message.type === 'user' ? 'ml-auto bg-[#2a2a2a] rounded-2xl px-6 py-4 border border-[#444]' : 'ml-14'}`}>
                <div
                  className={`${message.type === 'assistant' ? 'prose prose-invert max-w-none text-gray-200 leading-relaxed' : 'text-white'}`}
                  dangerouslySetInnerHTML={{
                    __html: message.type === 'assistant' ? formatMessage(message.content) : message.content
                  }}
                />
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="chat-message">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  ☀️
                </div>
                <div className="font-bold text-lg text-white">{selectedModel}</div>
              </div>
              <div className="flex items-center gap-3 ml-14">
                <div className="loading-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="text-gray-400 text-sm">Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="px-8 py-6 border-t border-[#333] bg-[#161616]">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSendMessage} className="relative">
            <div className="flex items-end gap-4">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={`Tell ${selectedModel} what to do next`}
                  className="w-full bg-[#2a2a2a] border border-[#444] rounded-2xl px-6 py-4 pr-16 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none min-h-[60px] max-h-32 text-base"
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                />
                <button
                  type="button"
                  className="absolute right-4 top-4 p-2 hover:bg-[#3a3a3a] rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-[#3a3a3a] rounded-xl px-4 py-3 border border-[#555]">
                  <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  <span className="text-sm font-medium">{selectedModel}</span>
                </div>
                <button
                  type="button"
                  className="p-3 hover:bg-[#3a3a3a] rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <div className="text-sm text-gray-500 mt-4 text-center bg-[#2a2a2a] rounded-xl px-4 py-2 border border-[#444]">
            {selectedModel} doesn't have access to your connectors, switch to Brain to ask about your data.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkPage;
