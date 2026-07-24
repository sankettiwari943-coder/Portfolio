import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot, Mic, MicOff, Send, X, Volume2, VolumeX, Sparkles,
  MessageSquare, ChevronRight, CornerDownLeft, Command, User, ArrowUpRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  actionUrl?: string;
  actionText?: string;
}

export const AiAssistant: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(true);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: PORTFOLIO_DATA.aiKnowledge.greeting,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const recognitionRef = useRef<any>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  // Speech Synthesis (Text to Speech)
  const speakText = (text: string) => {
    if (!speechEnabled || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel(); // stop existing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.1;

    // Pick female or natural voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha') || v.name.includes('Zira')
    );
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  // Speech Recognition (Speech to Text)
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputQuery(transcript);
        handleSendMessage(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) {
      alert("Voice input is not supported in your browser.");
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Process User Questions & Execute Navigation Commands
  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');

    // Check Special Action Commands
    const lower = query.toLowerCase();
    let actionUrl: string | undefined;
    let actionText: string | undefined;

    if (lower.includes('project') || lower.includes('take me to projects')) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower.includes('skill')) {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    } else if (lower.includes('certif') || lower.includes('linkedin')) {
      actionUrl = PORTFOLIO_DATA.contacts.linkedin;
      actionText = 'Open Sanket\'s LinkedIn';
    } else if (lower.includes('github') || lower.includes('code')) {
      actionUrl = PORTFOLIO_DATA.contacts.github;
      actionText = 'Open Sanket\'s GitHub';
    } else if (lower.includes('whatsapp')) {
      actionUrl = PORTFOLIO_DATA.contacts.whatsappUrl;
      actionText = 'Open WhatsApp Chat';
    } else if (lower.includes('email') || lower.includes('mail')) {
      actionUrl = PORTFOLIO_DATA.contacts.emailMailto;
      actionText = 'Send Email to Sanket';
    }

    // Knowledge base matching
    let bestMatch = PORTFOLIO_DATA.aiKnowledge.faqs.find((faq) =>
      faq.keywords.some((kw) => lower.includes(kw))
    );

    let responseText = bestMatch
      ? bestMatch.answer
      : "I'm designed specifically to help visitors learn about Sanket Tiwari. I may not know much outside his portfolio, but feel free to ask about his skills, projects, education, certifications, or contact details!";

    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionUrl,
        actionText
      };
      setMessages((prev) => [...prev, aiMsg]);
      speakText(responseText);
    }, 400);
  };

  return (
    <>
      {/* Floating 3D Robot Avatar Companion Trigger (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Floating Speech Bubble Prompt when Minimized */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl glass-panel border border-[#00E5FF]/40 text-xs font-mono text-white shadow-xl cursor-pointer hover:border-[#00E5FF] transition-all"
            onClick={() => setIsOpen(true)}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] animate-pulse" />
            <span>Need help? Ask Sanket's AI Guide!</span>
          </motion.div>
        )}

        {/* 3D Futuristic Ceramic AI Companion Robot Icon */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isOpen ? { y: 0 } : { y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0F0F0F] border border-[#00E5FF]/50 shadow-[0_0_30px_rgba(0,229,255,0.4)] group overflow-hidden focus:outline-none"
        >
          {/* Ceramic Body & Glowing Cyan Eye FX */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 via-transparent to-white/10" />

          <div className="relative flex flex-col items-center justify-center">
            {/* Cyan Glowing Eyes */}
            <div className="flex gap-1.5 mb-1">
              <span className={`w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] ${isSpeaking || isListening ? 'animate-ping' : ''}`} />
              <span className={`w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] ${isSpeaking || isListening ? 'animate-ping' : ''}`} />
            </div>
            <Bot className="w-6 h-6 text-white group-hover:text-[#00E5FF] transition-colors" />
          </div>

          {/* Hover Jets Pulsing Light */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-[#00E5FF] shadow-[0_0_15px_#00E5FF]" />
        </motion.button>
      </div>

      {/* Expanded AI Guide Glassmorphism Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[600px] h-[75vh] flex flex-col rounded-3xl glass-panel border border-[#00E5FF]/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl bg-[#050505]/95 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#0F0F0F]/80">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-xl bg-[#00E5FF]/20 border border-[#00E5FF]/40 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#00E5FF]" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Sanket's AI Guide</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
                  </h4>
                  <p className="text-[10px] font-mono text-[#00E5FF]">
                    {isSpeaking ? "Speaking..." : isListening ? "Listening..." : "Online • Portfolio Assistant"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* TTS Voice Toggle */}
                <button
                  onClick={() => setSpeechEnabled(!speechEnabled)}
                  className="p-2 rounded-xl bg-white/5 text-[#A5A5A5] hover:text-[#00E5FF] transition-colors"
                  title={speechEnabled ? "Disable Voice Output" : "Enable Voice Output"}
                >
                  {speechEnabled ? <Volume2 className="w-4 h-4 text-[#00E5FF]" /> : <VolumeX className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-white/5 text-[#A5A5A5] hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Speaking / Listening Audio Waveform Indicator */}
            {(isSpeaking || isListening) && (
              <div className="px-4 py-2 bg-[#00E5FF]/10 border-b border-[#00E5FF]/20 flex items-center justify-between font-mono text-xs text-[#00E5FF]">
                <span>{isListening ? "Listening to your voice..." : "AI Assistant Speaking..."}</span>
                <div className="flex items-center gap-1 h-4">
                  <div className="w-1 bg-[#00E5FF] wave-bar" style={{ animationDelay: '0s' }} />
                  <div className="w-1 bg-[#00E5FF] wave-bar" style={{ animationDelay: '0.2s' }} />
                  <div className="w-1 bg-[#00E5FF] wave-bar" style={{ animationDelay: '0.4s' }} />
                  <div className="w-1 bg-[#00E5FF] wave-bar" style={{ animationDelay: '0.1s' }} />
                </div>
              </div>
            )}

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 space-y-2 ${
                      msg.sender === 'user'
                        ? 'bg-[#00E5FF] text-black font-medium shadow-[0_0_15px_rgba(0,229,255,0.3)]'
                        : 'bg-[#0F0F0F] border border-white/10 text-white shadow-md'
                    }`}
                  >
                    <p className="leading-relaxed text-xs sm:text-sm">{msg.text}</p>

                    {msg.actionUrl && (
                      <a
                        href={msg.actionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 text-[#00E5FF] text-[11px] font-mono hover:underline"
                      >
                        <span>{msg.actionText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="p-2 border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar bg-[#050505]">
              {PORTFOLIO_DATA.aiKnowledge.quickChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSendMessage(chip)}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-[#00E5FF]/40 text-[11px] font-mono text-[#A5A5A5] hover:text-[#00E5FF] whitespace-nowrap transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-white/10 bg-[#0F0F0F] flex items-center gap-2">
              {/* Voice Push To Talk Button */}
              <button
                onClick={toggleVoiceInput}
                className={`p-2.5 rounded-xl border transition-all ${
                  isListening
                    ? 'bg-rose-500/20 border-rose-500 text-rose-400 animate-pulse'
                    : 'bg-white/5 border-white/10 text-[#A5A5A5] hover:text-[#00E5FF] hover:border-[#00E5FF]/30'
                }`}
                title="Push to Speak"
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about Sanket's skills, projects..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#00E5FF]/50"
              />

              <button
                onClick={() => handleSendMessage()}
                className="p-2.5 rounded-xl bg-[#00E5FF] text-black hover:bg-[#00E5FF]/90 transition-all font-bold"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

AiAssistant.displayName = 'AiAssistant';
