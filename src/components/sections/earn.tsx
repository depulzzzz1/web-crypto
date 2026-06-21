
"use client"

import React from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, Landmark, Sprout, Coins } from "lucide-react"

const earnOptions = [
  { title: "Flexible Staking", asset: "USDT", apy: "8.5%", icon: Wallet, tag: "Hot" },
  { title: "Fixed Staking", asset: "ETH", apy: "12.2%", icon: Landmark, tag: "Secure" },
  { title: "Liquidity Farming", asset: "SOL/USDC", apy: "45.0%", icon: Sprout, tag: "High Yield" },
  { title: "Passive Programs", asset: "DPR", apy: "22.5%", icon: Coins, tag: "Exclusive" },
]

export const Earn = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">DEPCRYPT <span className="text-secondary">Earn</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Multiply your holdings with our premium staking and farming solutions. Secure, transparent, and high-yielding.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {earnOptions.map((option, idx) => (
            <GlassCard key={idx} className="relative overflow-hidden group">
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 uppercase text-[10px]">{option.tag}</Badge>
              </div>
              
              <div className="p-3 w-12 h-12 rounded-xl bg-white/5 text-secondary mb-6 group-hover:bg-secondary group-hover:text-black transition-colors duration-300">
                <option.icon className="w-full h-full" />
              </div>

              <h3 className="text-lg font-bold mb-1">{option.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">Asset: <span className="text-foreground font-medium">{option.asset}</span></p>

              <div className="mb-8">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Annual Yield</div>
                <div className="text-3xl font-headline font-bold text-secondary">{option.apy} <span className="text-sm font-normal text-muted-foreground">APY</span></div>
              </div>

              <Button className="w-full rounded-xl border-white/10 hover:bg-white/10" variant="outline">
                Stake Now
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
