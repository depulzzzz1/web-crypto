
"use client"

import React, { useState } from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, TrendingDown, Filter } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = ["All", "Trending", "DeFi", "AI", "Gaming", "Meme"]

const assets = [
  { name: "Bitcoin", symbol: "BTC", price: "$64,231.50", change: "+2.4%", cap: "$1.2T", color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "Ethereum", symbol: "ETH", price: "$3,412.12", change: "+1.8%", cap: "$410B", color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Solana", symbol: "SOL", price: "$145.60", change: "+5.2%", cap: "$65B", color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "BNB", symbol: "BNB", price: "$589.30", change: "-0.5%", cap: "$88B", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { name: "XRP", symbol: "XRP", price: "$0.612", change: "+0.2%", cap: "$33B", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { name: "Dogecoin", symbol: "DOGE", price: "$0.165", change: "+8.4%", cap: "$24B", color: "text-amber-500", bg: "bg-amber-500/10" },
  { name: "Cardano", symbol: "ADA", price: "$0.45", change: "-1.2%", cap: "$16B", color: "text-blue-700", bg: "bg-blue-700/10" },
]

export default function MarketsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-headline font-bold">Markets</h1>
        
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input 
            placeholder="Search crypto assets..." 
            className="pl-10 bg-white/5 border-white/10 rounded-xl h-12"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCategory === cat 
                ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(51,119,255,0.4)]" 
                : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {assets.map((asset, i) => (
          <motion.div
            key={asset.symbol}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <GlassCard className="p-4 flex items-center justify-between hover:bg-white/5 group border-white/5 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${asset.bg} flex items-center justify-center font-bold ${asset.color}`}>
                  {asset.symbol[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{asset.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-muted-foreground uppercase">{asset.symbol}</span>
                    <span className="text-[10px] text-muted-foreground/60">Vol: {asset.cap}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="hidden sm:block h-8 w-16 overflow-hidden opacity-50">
                  <svg className="w-full h-full" preserveAspectRatio="none">
                    <path
                      d="M0 20 Q 10 10, 20 15 T 40 5 T 60 18 T 80 12"
                      fill="none"
                      stroke={asset.change.startsWith('+') ? '#00D4FF' : '#FF4B55'}
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">{asset.price}</div>
                  <div className={`text-[10px] font-bold ${asset.change.startsWith('+') ? 'text-secondary' : 'text-destructive'}`}>
                    {asset.change}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
