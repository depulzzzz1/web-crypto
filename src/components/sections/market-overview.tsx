
"use client"

import React from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown } from "lucide-react"

const assets = [
  { name: "Bitcoin", symbol: "BTC", price: "$64,231.50", change: "+2.4%", color: "text-orange-500", bg: "bg-orange-500/10" },
  { name: "Ethereum", symbol: "ETH", price: "$3,412.12", change: "+1.8%", color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Solana", symbol: "SOL", price: "$145.60", change: "+5.2%", color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "XRP", symbol: "XRP", price: "$0.612", change: "+0.2%", color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { name: "BNB", symbol: "BNB", price: "$589.30", change: "-0.5%", color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { name: "Dogecoin", symbol: "DOGE", price: "$0.165", change: "+8.4%", color: "text-amber-500", bg: "bg-amber-500/10" },
  { name: "Cardano", symbol: "ADA", price: "$0.45", change: "-1.2%", color: "text-blue-700", bg: "bg-blue-700/10" },
  { name: "Avalanche", symbol: "AVAX", price: "$38.20", change: "+3.1%", color: "text-red-500", bg: "bg-red-500/10" },
]

export const MarketOverview = () => {
  return (
    <section className="py-24 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-headline font-bold mb-4">Market <span className="text-secondary">Overview</span></h2>
            <p className="text-muted-foreground">Track real-time prices of the world's most popular cryptocurrencies on the DEPCRYPT terminal.</p>
          </div>
          <Button variant="link" className="text-primary p-0 h-auto">View All Markets</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset) => (
            <GlassCard key={asset.symbol} className="group overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${asset.bg} flex items-center justify-center font-bold ${asset.color}`}>
                    {asset.symbol[0]}
                  </div>
                  <div>
                    <h3 className="font-bold">{asset.name}</h3>
                    <span className="text-xs text-muted-foreground">{asset.symbol}</span>
                  </div>
                </div>
                {asset.change.startsWith('+') ? <TrendingUp className="w-5 h-5 text-secondary" /> : <TrendingDown className="w-5 h-5 text-destructive" />}
              </div>

              <div className="mb-6">
                <div className="text-2xl font-bold font-headline mb-1">{asset.price}</div>
                <div className={`text-sm font-medium ${asset.change.startsWith('+') ? 'text-secondary' : 'text-destructive'}`}>
                  {asset.change}
                </div>
              </div>

              <div className="h-10 w-full bg-white/5 rounded-lg mb-6 overflow-hidden relative">
                <div className={`absolute bottom-0 left-0 h-full w-full opacity-20 ${asset.bg}`} />
                {/* SVG Mini Chart Simulation */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path
                    d="M0 30 Q 25 20, 50 25 T 100 15 T 150 22 T 200 10 T 250 20 T 300 5"
                    fill="none"
                    stroke={asset.change.startsWith('+') ? '#00D4FF' : '#FF4B55'}
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <Button className="w-full rounded-xl bg-white/5 hover:bg-white/10 text-white border-white/5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                Buy {asset.symbol}
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
