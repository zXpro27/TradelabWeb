'use client';

import React, { useState } from 'react';
import { useTradelab } from '@/hooks/useTradelabStore';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Terminal, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck,
  Headphones
} from 'lucide-react';

export default function ChatSupportModal() {
  const { isChatOpen, setIsChatOpen, chatMessages, sendChatMessage, t, language } = useTradelab();
  const [inputText, setInputText] = useState('');

  if (!isChatOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendChatMessage(inputText);
    setInputText('');
  };

  const handleQuickQuestion = (q: string) => {
    sendChatMessage(q);
  };

  return (
    <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[400px] bg-[#070b16] border border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.3)] hud-corner-all overflow-hidden flex flex-col max-h-[560px] backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-500/30 bg-black/60">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 border border-cyan-400/50 bg-cyan-950/40 flex items-center justify-center hud-corner-all">
            <Headphones className="w-3.5 h-3.5 text-cyan-300" />
          </div>
          <div>
            <h3 className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">
              {t.floating_assistant_title}
            </h3>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.assistant_online}
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsChatOpen(false)}
          className="p-1 text-slate-400 hover:text-cyan-300 border border-slate-700 hover:border-cyan-400 hud-corner-all transition-colors"
          aria-label="Close chat modal"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Inquiries Pill List */}
      <div className="p-2.5 bg-black/40 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto text-[10px] font-mono">
        <button
          onClick={() => handleQuickQuestion(t.assistant_quick_1)}
          className="px-2 py-1 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 whitespace-nowrap hud-corner-all transition-colors"
        >
          {t.assistant_quick_1}
        </button>
        <button
          onClick={() => handleQuickQuestion(t.assistant_quick_2)}
          className="px-2 py-1 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 whitespace-nowrap hud-corner-all transition-colors"
        >
          {t.assistant_quick_2}
        </button>
        <button
          onClick={() => handleQuickQuestion(t.assistant_quick_3)}
          className="px-2 py-1 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 text-cyan-300 whitespace-nowrap hud-corner-all transition-colors"
        >
          {t.assistant_quick_3}
        </button>
      </div>

      {/* Messages Stream */}
      <div className="p-3.5 flex-1 overflow-y-auto space-y-3 min-h-[240px] max-h-[340px] text-xs font-mono">
        {chatMessages.map((msg) => {
          const isOperator = msg.sender === 'operator';
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isOperator ? 'items-start' : 'items-end'}`}
            >
              <div
                className={`max-w-[85%] p-2.5 hud-corner-all leading-relaxed ${
                  isOperator
                    ? 'bg-cyan-950/30 border border-cyan-500/30 text-slate-200 shadow-[0_0_10px_rgba(6,182,212,0.05)]'
                    : 'bg-fuchsia-950/40 border border-fuchsia-500/40 text-fuchsia-100'
                }`}
              >
                <div className="flex items-center justify-between text-[9px] font-mono mb-1 pb-1 border-b border-white/10 opacity-70">
                  <span>{isOperator ? 'OPERATOR // SYS' : 'AGENT // ME'}</span>
                  <span>{msg.timestamp}</span>
                </div>
                <p className="text-[11px] leading-relaxed">{msg.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input Box */}
      <form onSubmit={handleSend} className="p-3 border-t border-cyan-500/20 bg-black/60 flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t.assistant_placeholder}
          className="flex-1 bg-slate-950 border border-slate-700 px-3 py-1.5 text-xs font-mono text-cyan-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 hud-corner-all"
        />
        <button
          type="submit"
          className="px-3.5 py-1.5 bg-cyan-400 hover:bg-cyan-300 text-cyan-950 text-xs font-mono font-bold tracking-wider hud-corner-all flex items-center gap-1 shrink-0"
        >
          <Send className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{t.assistant_send}</span>
        </button>
      </form>
    </div>
  );
}
