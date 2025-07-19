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
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          model: selectedModel === 'ChatGPT' ? 'gpt-3.5-turbo' : 'gpt-3.5-turbo'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      const assistantMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: `Sorry, I encountered an error: ${error.message}. Please make sure your OpenAI API key is configured correctly.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const formatMessage = (content) => {
    // Enhanced markdown-like formatting for dark theme
    return content
      .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-900 border border-gray-600 rounded-lg p-4 my-3 overflow-x-auto text-gray-200"><code>$2</code></pre>')
      .replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-sm text-purple-300 border border-gray-600">$1</code>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-gray-200 italic">$1</em>')
      .replace(/^### (.*$)/gm, '<h3 class="text-lg font-semibold text-white mt-4 mb-2">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-xl font-bold text-white mt-5 mb-3">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold text-white mt-6 mb-4">$1</h1>')
      .replace(/^\* (.*$)/gm, '<li class="ml-4 text-gray-300">• $1</li>')
      .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 text-gray-300 list-decimal">$1</li>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-800">
      {/* Header */}
      <div className="px-8 py-6 border-b border-gray-700 bg-gray-900 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              ☀️
            </div>
            <div>
              <h1 className="font-bold text-xl text-white">{selectedModel}</h1>
              <p className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded-lg inline-block">
                4x productivity
              </p>
            </div>
          </div>
          <button className="p-3 hover:bg-gray-700 rounded-xl transition-colors">
            <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {messages.map((message) => (
            <div key={message.id} className={`${message.type === 'user' ? 'ml-auto max-w-2xl' : 'max-w-4xl'}`}>
              {message.type === 'assistant' && (
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    ☀️
                  </div>
                  <div className="font-bold text-lg text-white">{selectedModel}</div>
                </div>
              )}
              <div className={`${message.type === 'user' ? 'ml-auto bg-gray-700 rounded-2xl px-6 py-4 border border-gray-600' : 'ml-14'}`}>
                <div
                  className={`${message.type === 'assistant' ? 'prose prose-invert max-w-none text-gray-300 leading-relaxed' : 'text-white'} text-base`}
                  dangerouslySetInnerHTML={{
                    __html: message.type === 'assistant' ? formatMessage(message.content) : message.content
                  }}
                />
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="max-w-4xl">
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
      <div className="px-8 py-6 border-t border-gray-700 bg-gray-900 flex-shrink-0">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSendMessage} className="relative">
            <div className="flex items-end gap-4">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={`Tell ${selectedModel} what to do next`}
                  className="w-full bg-gray-700 border border-gray-600 rounded-2xl px-6 py-4 pr-16 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none min-h-[60px] max-h-32 text-base"
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
                  className="absolute right-4 top-4 p-2 hover:bg-gray-600 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-gray-600 rounded-xl px-4 py-3 border border-gray-500">
                  <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  <span className="text-sm font-medium text-white">{selectedModel}</span>
                </div>
                <button
                  type="button"
                  className="p-3 hover:bg-gray-700 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <div className="text-sm text-gray-400 mt-4 text-center bg-gray-700 rounded-xl px-4 py-2 border border-gray-600">
            {selectedModel} doesn't have access to your connectors, switch to Brain to ask about your data.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkPage;
