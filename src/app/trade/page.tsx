"use client"

import React, { useState } from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  TrendingUp, 
  Zap, 
  Search,
  ChevronDown,
  LayoutGrid,
  History,
  Activity
} from 'lucide-react'
import { motion } from 'framer-motion'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'

const data = [
  { time: '00:00', price: 62000 },
  { time: '04:00', price: 63500 },
  { time: '08:00', price: 63000 },
  { time: '12:00', price: 64800 },
  { time: '16:00', price: 64200 },
  { time: '20:00', price: 65500 },
  { time: '23:59', price: 64231 },
]

export default function TradePage() {
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Chart & Stats Header */}
      <div className="lg:col-span-9 space-y-6">
        <GlassCard className="p-4 flex items-center justify-between border-white/5">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold">B</div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-bold">BTC/USDT</h2>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground">Bitcoin</p>
              </div>
            </div>
            <div className="hidden sm:block border-l border-white/10 h-10 mx-2" />
            <div className="hidden sm:block">
              <div className="text-lg font-bold">$64,231.50</div>
              <p className="text-[10px] text-secondary font-bold">+2.45%</p>
            </div>
          </div>
          <div className="flex gap-2">
            {['1H', '4H', '1D', '1W', '1M'].map((t) => (
              <button key={t} className="px-3 py-1 rounded-lg text-[10px] font-bold bg-white/5 hover:bg-white/10 transition-colors">
                {t}
              </button>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="h-[400px] p-6 relative overflow-hidden border-primary/20">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3377FF" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3377FF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" />
              <XAxis dataKey="time" stroke="#ffffff20" fontSize={10} />
              <YAxis domain={['auto', 'auto']} stroke="#ffffff20" fontSize={10} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0c0e14', border: '1px solid #3377FF20', borderRadius: '12px' }}
                itemStyle={{ color: '#3377FF' }}
              />
              <Area type="monotone" dataKey="price" stroke="#3377FF" fillOpacity={1} fill="url(#colorPrice)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Order Book & History Desktop View */}
        <div className="grid grid-cols-2 gap-6">
          <GlassCard className="p-4 border-white/5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Order Book</h3>
            <div className="space-y-1">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex justify-between text-[10px] font-mono">
                  <span className="text-destructive">{(64200 - i * 10).toLocaleString()}</span>
                  <span className="text-muted-foreground">{(Math.random() * 2).toFixed(4)}</span>
                  <span className="text-foreground">{(64200 * Math.random()).toFixed(2)}</span>
                </div>
              ))}
              <div className="py-2 text-center text-lg font-bold border-y border-white/5 my-2">
                $64,231.50
              </div>
              {[...Array(8)].map((_, i) => (
                <div key={i} className="flex justify-between text-[10px] font-mono">
                  <span className="text-secondary">{(64240 + i * 10).toLocaleString()}</span>
                  <span className="text-muted-foreground">{(Math.random() * 2).toFixed(4)}</span>
                  <span className="text-foreground">{(64240 * Math.random()).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-4 border-white/5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Recent Trades</h3>
            <div className="space-y-2">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="flex justify-between text-[10px] font-mono">
                  <span className={i % 3 === 0 ? "text-destructive" : "text-secondary"}>
                    {(64230 + Math.random() * 50).toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">{(Math.random() * 0.5).toFixed(6)}</span>
                  <span className="text-muted-foreground/50">{new Date().toLocaleTimeString()}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Trade Panel */}
      <div className="lg:col-span-3">
        <GlassCard className="p-6 h-full border-primary/20 bg-primary/5 sticky top-6">
          <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10 mb-6">
            <button 
              onClick={() => setTradeType('buy')}
              className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${tradeType === 'buy' ? 'bg-secondary text-black shadow-lg' : 'text-muted-foreground'}`}
            >
              BUY
            </button>
            <button 
              onClick={() => setTradeType('sell')}
              className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${tradeType === 'sell' ? 'bg-destructive text-white shadow-lg' : 'text-muted-foreground'}`}
            >
              SELL
            </button>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] uppercase font-bold text-muted-foreground">
                <span>Price</span>
                <span>USDT</span>
              </div>
              <Input className="bg-white/5 border-white/10 h-12 text-lg font-bold" defaultValue="64231.50" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[10px] uppercase font-bold text-muted-foreground">
                <span>Amount</span>
                <span>BTC</span>
              </div>
              <Input className="bg-white/5 border-white/10 h-12 text-lg font-bold" placeholder="0.00" />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {['25%', '50%', '75%', '100%'].map((p) => (
                <button key={p} className="py-2 bg-white/5 rounded-lg text-[10px] font-bold text-muted-foreground hover:bg-white/10 transition-colors">
                  {p}
                </button>
              ))}
            </div>

            <div className="pt-4 space-y-4">
              <div className="flex justify-between text-xs font-medium">
                <span className="text-muted-foreground">Avbl</span>
                <span>4,290.45 USDT</span>
              </div>
              <div className="flex justify-between text-xs font-medium">
                <span className="text-muted-foreground">Est. Total</span>
                <span>0.00 USDT</span>
              </div>
              
              <Button className={`w-full h-14 rounded-2xl text-lg font-bold shadow-xl transition-all ${
                tradeType === 'buy' ? 'bg-secondary hover:bg-secondary/90 text-black' : 'bg-destructive hover:bg-destructive/90 text-white'
              }`}>
                {tradeType === 'buy' ? 'Buy BTC' : 'Sell BTC'}
              </Button>
            </div>

            <div className="pt-10 border-t border-white/10">
              <h4 className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-4">Leverage Settings</h4>
              <div className="flex items-center gap-4">
                <div className="flex-1 h-2 bg-white/10 rounded-full relative">
                  <div className="absolute top-0 left-0 w-1/4 h-full bg-primary rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-4 h-4 rounded-full bg-white shadow-lg border-2 border-primary" />
                </div>
                <span className="text-xs font-bold text-primary">5x</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}