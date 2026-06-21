
"use client"

import React, { useEffect, useState } from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { aiMarketInsightsNewsfeedSummary, type AIMarketInsightsNewsfeedSummaryOutput } from "@/ai/flows/ai-market-insights-newsfeed-summary"
import { Sparkles, ArrowUpRight, TrendingUp, Zap } from "lucide-react"

const mockNews = [
  { title: "Ethereum Layer 2 Adoption Hits Record High", content: "L2 networks are processing 10x more transactions than Ethereum mainnet, indicating a massive shift in scalability and user base." },
  { title: "Solana Developers Unveil New Compression Tech", content: "A new standard for minting millions of NFTs for pennies has been launched, positioning Solana as the leader in digital commerce." },
  { title: "New DeFi Protocol Gains $1B TVL in 24 Hours", content: "The 'Sentinel Finance' project, which integrates AI into liquidity management, has seen unprecedented growth since its mainnet launch." }
]

export const NewsHub = () => {
  const [data, setData] = useState<AIMarketInsightsNewsfeedSummaryOutput | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await aiMarketInsightsNewsfeedSummary({
          newsArticles: mockNews,
          userPreferences: "focus on scaling and new token launches"
        })
        setData(result)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])

  return (
    <section className="py-24 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Market <span className="text-gradient">Insights</span></h2>
            <p className="text-muted-foreground">Stay ahead of the curve with AI-curated news and emerging Web3 trends.</p>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border-primary/20">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">AI Powered Hub</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <GlassCard className="bg-primary/5 border-primary/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 font-headline uppercase text-primary text-sm tracking-widest">
                <Zap className="w-4 h-4" /> AI Summary
              </h3>
              <p className="text-lg leading-relaxed">{data?.summary || "Loading intelligent summary..."}</p>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data?.highlightedTokenLaunches.map((token, idx) => (
                <GlassCard key={idx} className="border-white/5 hover:border-secondary/20 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-secondary/20 text-secondary border-secondary/30">New Launch</Badge>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{token.name}</h4>
                  <p className="text-sm text-muted-foreground">{token.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold font-headline uppercase text-sm tracking-widest flex items-center gap-2 mb-4">
              <TrendingUp className="w-4 h-4 text-secondary" /> Emerging Trends
            </h3>
            {data?.emergingTrends.map((trend, idx) => (
              <GlassCard key={idx} className="border-white/5 p-4 flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{trend.name}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{trend.description}</p>
                </div>
              </GlassCard>
            ))}
            {!data && [1,2,3].map(i => <div key={i} className="h-24 w-full bg-white/5 rounded-2xl animate-pulse" />)}
          </div>
        </div>
      </div>
    </section>
  )
}
