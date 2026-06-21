"use client"

import React from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  ArrowRightLeft, 
  Wallet, 
  Plus, 
  TrendingUp, 
  Bell,
  ScanLine,
  Activity,
  History,
  Info,
  LayoutGrid,
  Zap
} from 'lucide-react'
import { MarketTicker } from "@/components/sections/market-ticker"
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'

const topAssets = [
  { symbol: "BTC", name: "Bitcoin", price: "$64,231.50", change: "+2.4%", color: "text-orange-500" },
  { symbol: "ETH", name: "Ethereum", price: "$3,412.12", change: "+1.8%", color: "text-blue-500" },
  { symbol: "SOL", name: "Solana", price: "$145.60", change: "+5.2%", color: "text-purple-500" },
]

export default function DashboardPage() {
  const isMobile = useIsMobile();

  return (
    <div className="space-y-6">
      {/* App Bar - Mobile Only */}
      {isMobile && (
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <span className="font-bold text-primary">JD</span>
            </div>
            <div>
              <h2 className="text-sm font-bold">Good morning, Jane</h2>
              <div className="flex items-center gap-1">
                <Badge variant="outline" className="text-[9px] py-0 px-1 border-secondary/30 text-secondary">PRO USER</Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" className="rounded-full glass w-10 h-10 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-background" />
            </Button>
          </div>
        </div>
      )}

      {/* Main Grid for Desktop */}
      <div className={cn("grid gap-6", isMobile ? "grid-cols-1" : "grid-cols-12")}>
        
        {/* Left Section: Balance & Quick Actions */}
        <div className={cn(isMobile ? "" : "col-span-8 space-y-6")}>
          <GlassCard className="relative overflow-hidden p-8 border-primary/20 neon-glow-primary min-h-[240px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <TrendingUp className="w-48 h-48 text-primary" />
            </div>
            
            <div className="relative z-10 space-y-8">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Total Balance</span>
                <h1 className="text-5xl font-headline font-bold mt-2">$162,427.05</h1>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-secondary text-sm font-bold">+ $8,240.20 (5.45%)</span>
                  <span className="text-muted-foreground text-[10px] uppercase font-medium">Last 24H</span>
                </div>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                {[
                  { icon: Plus, label: 'Buy', color: 'bg-primary' },
                  { icon: ArrowUpRight, label: 'Send', color: 'bg-accent' },
                  { icon: ArrowDownLeft, label: 'Receive', color: 'bg-secondary' },
                  { icon: ArrowRightLeft, label: 'Swap', color: 'bg-white/10' },
                  { icon: Activity, label: 'Staking', color: 'bg-primary/20', hideMobile: true },
                  { icon: History, label: 'History', color: 'bg-white/5', hideMobile: true },
                ].map((action, i) => (
                  <button key={i} className={cn("flex flex-col items-center gap-2 group", action.hideMobile && isMobile && "hidden")}>
                    <div className={`w-14 h-14 rounded-2xl ${action.color} flex items-center justify-center group-hover:scale-110 transition-all shadow-lg`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Watchlist Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-headline font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-primary" />
                Live Watchlist
              </h3>
              <Button variant="link" size="sm" className="text-primary p-0">Customize</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topAssets.map((asset, i) => (
                <GlassCard key={i} className="p-5 flex items-center justify-between hover:bg-white/5 group border-white/5">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center font-bold text-xl ${asset.color}`}>
                      {asset.symbol[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-base">{asset.name}</h4>
                      <span className="text-xs text-muted-foreground uppercase">{asset.symbol}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-base">{asset.price}</div>
                    <div className="text-[10px] text-secondary font-bold flex items-center justify-end gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {asset.change}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Widgets */}
        <div className={cn(isMobile ? "" : "col-span-4 space-y-6")}>
          <GlassCard className="p-6 bg-accent/5 border-accent/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <h3 className="font-headline font-bold uppercase tracking-wider text-xs text-accent">Market Sentiment</h3>
              </div>
              <Badge className="bg-accent/20 text-accent text-[10px]">EXTREME GREED: 78</Badge>
            </div>
            
            <div className="space-y-4">
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-accent" style={{ width: '78%' }} />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Market conditions are showing strong momentum. FOMO is high among retail investors.
              </p>
            </div>
          </GlassCard>

          <GlassCard className="p-6 border-white/5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
              <Bell className="w-4 h-4" /> Market Alerts
            </h3>
            <div className="space-y-4">
              {[
                { title: 'BTC Breakout', desc: 'Price exceeded $64k resistance', time: '2m ago' },
                { title: 'Whale Alert', desc: '5,000 ETH moved to exchange', time: '15m ago' },
              ].map((alert, i) => (
                <div key={i} className="flex gap-3 items-start border-l-2 border-primary/20 pl-4 py-1">
                  <div>
                    <h5 className="text-sm font-bold">{alert.title}</h5>
                    <p className="text-[10px] text-muted-foreground">{alert.desc}</p>
                    <span className="text-[8px] uppercase font-bold text-primary/60">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6 bg-secondary/5 border-secondary/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest">AI Prediction</h4>
                <p className="text-[10px] text-muted-foreground">Short-term trend</p>
              </div>
            </div>
            <div className="text-2xl font-headline font-bold text-secondary">BULLISH (+4.2%)</div>
            <Button variant="outline" className="w-full mt-4 rounded-xl border-secondary/20 hover:bg-secondary/10 h-10 text-[10px] font-bold uppercase tracking-widest">
              See Analysis
            </Button>
          </GlassCard>
        </div>

      </div>
    </div>
  )
}
