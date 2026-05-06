import React, { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "motion/react";
import { Send, Bot, User, Sparkles, AlertCircle, Loader2, RefreshCcw, Square, Mic } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "../lib/utils";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: "user" | "bot";
  content: string;
  id: string;
}

const SUGGESTED_PROMPTS = [
  "What is the Amaanitvam Foundation's mission?",
  "How can I become a digital literacy volunteer?",
  "Where are your community empowerment hubs located?",
  "Tell me about Project Saksham's impact.",
];

const SYSTEM_INSTRUCTION = `You are Amaan, the official AI representative of Amaanitvam Foundation. 
Amaanitvam Foundation is an NGO dedicated to bridging the digital divide through AI and technology.
Key projects: 
- Project Saksham (Digital literacy for youth)
- Tele-Assistance (AI companion for seniors)
- Amaanitvam Hubs (Physical community tech centers)
Mission: Empowerment through technological equity.
Tone: Empathetic, professional, inspiring, and helpful.

Keep responses concise and direct. Use markdown for better formatting (lists, bold text). 
If someone asks about donations, mention that they can go to the /donate page. 
If they ask about volunteering, suggest the /volunteer page.
Avoid overly long explanations unless asked.`;

export const Assistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Hello! I'm Amaan, your AI companion from Amaanitvam Foundation. How can I help you explore our impact initiatives today?",
      id: "initial",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, isStreaming]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || isLoading) return;

    // Abort previous request if any
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    const userMessage: Message = {
      role: "user",
      content: text,
      id: Date.now().toString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setIsStreaming(true);
    setError(null);

    // Create a placeholder for the bot message
    const botMessageId = (Date.now() + 1).toString();
    const botPlaceholder: Message = {
      role: "bot",
      content: "",
      id: botMessageId,
    };
    setMessages((prev) => [...prev, botPlaceholder]);

    try {
      // Prepare history for context
      const history = messages
        .filter(m => m.id !== "initial")
        .map(m => ({
          role: m.role === "bot" ? "model" : "user",
          parts: [{ text: m.content }]
        }));
      
      const contents = [
        ...history,
        { role: "user", parts: [{ text: text }] }
      ];

      const stream = await ai.models.generateContentStream({
        model: "gemini-3-flash-preview",
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      let fullText = "";
      for await (const chunk of stream) {
        // Check if we should stop
        if (abortControllerRef.current?.signal.aborted) {
          break;
        }

        const chunkText = chunk.text;
        fullText += chunkText;
        
        setMessages((prev) => 
          prev.map((msg) => 
            msg.id === botMessageId ? { ...msg, content: fullText } : msg
          )
        );
      }

    } catch (err: any) {
      if (err.name === 'AbortError') {
        console.log('Stream aborted');
      } else {
        console.error("AI Assistant Error:", err);
        setMessages((prev) => prev.filter(m => m.id !== botMessageId));
        setError("I encountered a technical glitch. Let's try again!");
      }
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
      abortControllerRef.current = null;
    }
  };

  const handleStop = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      setIsStreaming(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen bg-brand-bg flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col h-[calc(100vh-180px)]">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-purple/20">
              <Bot className="text-white w-7 h-7" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Amaan AI</h2>
              <div className="flex items-center gap-2">
                <span className={cn(
                  "w-2 h-2 rounded-full",
                  isStreaming ? "bg-brand-cyan animate-pulse" : "bg-green-500"
                )} />
                <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">
                  {isStreaming ? "Streaming..." : "Active Assistant"}
                </span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setMessages([messages[0]])}
            className="p-2 glass hover:bg-white/10 rounded-xl text-gray-400 transition-colors"
            title="Clear Chat"
          >
            <RefreshCcw size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 glass rounded-[2.5rem] overflow-hidden flex flex-col relative border-white/5">
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={cn(
                    "flex items-start gap-4 max-w-[90%]",
                    m.role === "user" ? "ml-auto flex-row-reverse" : ""
                  )}
                >
                  <div className={cn(
                    "w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center shadow-lg",
                    m.role === "user" ? "bg-brand-cyan shadow-brand-cyan/10" : "bg-brand-purple shadow-brand-purple/10"
                  )}>
                    {m.role === "user" ? <User size={20} className="text-black" /> : <Bot size={20} className="text-white" />}
                  </div>
                  <div className={cn(
                    "p-5 rounded-2xl text-sm leading-relaxed",
                    m.role === "user" 
                      ? "bg-brand-cyan text-black font-medium" 
                      : "bg-white/5 border border-white/10 text-gray-200"
                  )}>
                    {m.content ? (
                      <div className="markdown-body prose prose-invert prose-sm max-w-none">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {m.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <div className="flex gap-1 py-1">
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {error && (
              <div className="flex items-center justify-center p-4">
                <div className="flex items-center gap-2 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-sm font-medium">
                  <AlertCircle size={18} />
                  {error}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions */}
          {messages.length === 1 && !isLoading && (
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-3 bg-black/20">
              {SUGGESTED_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="text-left p-4 glass hover:border-brand-purple/50 rounded-2xl text-xs text-gray-400 transition-all hover:bg-white/5 flex items-center justify-between group"
                >
                  {prompt}
                  <Sparkles size={14} className="text-brand-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-6 pt-4 bg-black/40 border-t border-white/5">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex items-center gap-2"
            >
              <div className="relative flex-1 group">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-5 pr-12 focus:outline-none focus:border-brand-purple focus:bg-white/10 transition-all text-sm disabled:opacity-50"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-brand-cyan transition-colors"
                >
                  <Mic size={18} />
                </button>
              </div>
              <button
                type="submit"
                onClick={isLoading ? (e) => { e.preventDefault(); handleStop(); } : undefined}
                disabled={!input.trim() && !isLoading}
                className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center transition-all shadow-lg",
                  (input.trim() || isLoading)
                    ? "bg-brand-purple text-white shadow-brand-purple/20 hover:scale-105 active:scale-95" 
                    : "bg-white/5 text-gray-500 opacity-50"
                )}
              >
                {isLoading ? <Square size={20} className="fill-current" /> : <Send size={20} />}
              </button>
            </form>
            <p className="text-[9px] text-gray-600 mt-4 text-center uppercase tracking-[0.2em] font-black">
              Amaanitvam Digital Intelligence Core • v1.2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
