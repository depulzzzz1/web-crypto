
"use client"

import React from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { BarChart3, Repeat, Wallet, Layers, Box, Globe2, BrainCircuit, GraduationCap } from "lucide-react"

const ecosystemItems = [
  { title: "Spot Trading", desc: "Low fees, high liquidity and deep markets.", icon: BarChart3, color: "text-blue-500" },
  { title: "Futures Trading", desc: "Leverage your positions up to 100x.", icon: Repeat, color: "text-purple-500" },
  { title: "Staking", desc: "Earn passive income on your idle assets.", icon: Layers, color: "text-green-500" },
  { title: "Launchpad", desc: "Early access to the next big crypto projects.", icon: Box, color: "text-yellow-500" },
  { title: "NFT Marketplace", desc: "Buy and sell digital collectibles securely.", icon: Globe2, color: "text-cyan-500" },
  { title: "Web3 Wallet", desc: "Your gateway to the decentralized world.", icon: Wallet, color: "text-pink-500" },
  { title: "AI Trading", desc: "Smart insights powered by sentinel AI.", icon: BrainCircuit, color: "text-primary" },
  { title: "Crypto Academy", desc: "Learn and master blockchain technology.", icon: GraduationCap, color: "text-secondary" },
]

export const Ecosystem = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">DEPCRYPT <span className="text-gradient">Ecosystem</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">A comprehensive suite of financial products designed to simplify and enhance your digital asset experience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ecosystemItems.map((item, idx) => (
            <GlassCard key={idx} className="flex flex-col items-center text-center group">
              <div className={`p-4 rounded-2xl bg-white/5 mb-6 group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-headline">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
