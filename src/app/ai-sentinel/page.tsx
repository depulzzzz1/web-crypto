
"use client"

import React, { useState } from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  BrainCircuit, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  AlertTriangle,
  Send,
  Loader2,
  TrendingUp
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { AISentinel } from "@/components/sections/ai-sentinel"

export default function AISentinelPage() {
  const [activeTab, setActiveTab] = useState<'advisor' | 'chat'>('advisor')

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <BrainCircuit className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-headline font-bold">AI Sentinel</h1>
        </div>
        <p className="text-xs text-muted-foreground">Neural market analysis & predictive risk modeling.</p>
      </div>

      <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10">
        <button 
          onClick={() => setActiveTab('advisor')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'advisor' ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:text-white'}`}
        >
          ADVISOR
        </button>
        <button 
          onClick={() => setActiveTab('chat')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'chat' ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:text-white'}`}
        >
          CHAT
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'advisor' ? (
          <motion.div
            key="advisor"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <AISentinel />
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <GlassCard className="p-4 border-secondary/20 bg-secondary/5">
                <TrendingUp className="w-5 h-5 text-secondary mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider mb-1">Sentiment</h4>
                <div className="text-xl font-headline font-bold text-secondary">BULLISH</div>
                <div className="text-[10px] text-muted-foreground mt-1">Score: 0.82/1.0</div>
              </GlassCard>
              <GlassCard className="p-4 border-accent/20 bg-accent/5">
                <ShieldCheck className="w-5 h-5 text-accent mb-2" />
                <h4 className="text-xs font-bold uppercase tracking-wider mb-1">Risk Level</h4>
                <div className="text-xl font-headline font-bold text-accent">STABLE</div>
                <div className="text-[10px] text-muted-foreground mt-1">Volatility: Low</div>
              </GlassCard>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col h-[500px]"
          >
            <GlassCard className="flex-1 overflow-y-auto no-scrollbar mb-4 space-y-4 p-4">
              <div className="flex gap-3 max-w-[80%]">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <BrainCircuit className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-white/5 rounded-2xl rounded-tl-none p-3 text-sm leading-relaxed">
                  Greetings, Jane. I've analyzed the current market conditions. Bitcoin is showing strong support at $62k. Would you like a breakdown of potential entry points?
                </div>
              </div>

              <div className="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-accent">JD</span>
                </div>
                <div className="bg-primary/20 rounded-2xl rounded-tr-none p-3 text-sm leading-relaxed">
                  Yes, also check my SOL exposure.
                </div>
              </div>
            </GlassCard>

            <div className="relative">
              <Input 
                placeholder="Ask Sentinel anything..." 
                className="pr-12 bg-white/5 border-white/10 rounded-2xl h-14"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
