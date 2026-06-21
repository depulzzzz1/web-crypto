"use client"

import React from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

const tickers = [
  { symbol: "BTC", price: "$64,231.50", change: "+2.4%" },
  { symbol: "ETH", price: "$3,412.12", change: "+1.8%" },
  { symbol: "SOL", price: "$145.60", change: "+5.2%" },
  { symbol: "BNB", price: "$589.30", change: "-0.5%" },
  { symbol: "XRP", price: "$0.612", change: "+0.2%" },
  { symbol: "ADA", price: "$0.45", change: "-1.2%" },
  { symbol: "AVAX", price: "$38.20", change: "+3.1%" },
  { symbol: "DOGE", price: "$0.165", change: "+8.4%" },
]

export const MarketTicker = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      "w-full bg-black/40 backdrop-blur-md border-b border-white/5 h-10 overflow-hidden flex items-center z-50",
      isMobile ? "fixed top-0" : "sticky top-0"
    )}>
      <div className="market-ticker-track">
        {[...tickers, ...tickers].map((item, idx) => (
          <div key={idx} className="flex items-center px-6 whitespace-nowrap gap-2">
            <span className="font-headline font-bold text-xs">{item.symbol}</span>
            <span className="text-xs text-muted-foreground">{item.price}</span>
            <span className={`text-[10px] font-medium ${item.change.startsWith('+') ? 'text-secondary' : 'text-destructive'}`}>
              {item.change}
            </span>
            <span className="w-1 h-1 bg-white/20 rounded-full ml-4" />
          </div>
        ))}
      </div>
    </div>
  )
}

import { cn } from '@/lib/utils'