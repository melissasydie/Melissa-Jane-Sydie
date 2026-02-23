
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { geminiConsultant } from '../services/geminiService';

const ChatConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Good day! I am your Sydie Media automated consultant. How may I assist your brand modernization today?' }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory, isOpen]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    const response = await geminiConsultant.chat(userMessage);
    setChatHistory(prev => [...prev, { role: 'bot', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[150]">
      {isOpen ? (
        <div className="w-[340px] md:w-[420px] bg-white border border-[#2D2A26]/10 flex flex-col shadow-[15px_15px_0px_0px_rgba(0,168,168,1)] overflow-hidden h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="p-6 bg-[#00A8A8] flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#FFC857]" />
              <span className="font-black uppercase tracking-[0.2em] text-[10px]">The AI Consultant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-60 transition-opacity">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#FCFAF2]">
            {chatHistory.map((chat, i) => (
              <div key={i} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 text-sm font-light leading-relaxed border ${
                  chat.role === 'user' 
                  ? 'bg-[#FF7B7B] text-white border-[#FF7B7B] shadow-[4px_4px_0px_0px_rgba(45,42,38,0.1)]' 
                  : 'bg-white text-[#2D2A26] border-[#2D2A26]/10 shadow-[4px_4px_0px_0px_rgba(0,168,168,0.1)]'
                }`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 border border-[#2D2A26]/10 flex items-center gap-3 shadow-[4px_4px_0px_0px_rgba(0,168,168,0.1)]">
                  <div className="w-2 h-2 bg-[#00A8A8] animate-ping rounded-full" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#00A8A8]">Synthesizing...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-8 border-t border-[#2D2A26]/5 bg-white">
            <div className="flex gap-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Inquire about our process..."
                className="flex-1 bg-transparent border-b-2 border-[#2D2A26]/10 px-0 py-3 text-sm text-[#2D2A26] focus:outline-none focus:border-[#00A8A8] transition-colors placeholder:text-[#2D2A26]/30"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-[#2D2A26] px-6 py-3 text-white font-black uppercase tracking-widest text-[10px] hover:bg-[#FF7B7B] disabled:opacity-50 transition-all"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#FFC857] text-[#2D2A26] p-6 shadow-[8px_8px_0px_0px_rgba(45,42,38,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_rgba(45,42,38,1)] transition-all flex items-center gap-5 group"
        >
          <div className="w-10 h-10 border-2 border-[#2D2A26] rounded-full flex items-center justify-center group-hover:bg-[#2D2A26] group-hover:text-white transition-all">
            <MessageSquare className="w-5 h-5" />
          </div>
          <span className="font-black uppercase tracking-[0.2em] text-xs">Consult AI</span>
        </button>
      )}
    </div>
  );
};

export default ChatConsultant;
