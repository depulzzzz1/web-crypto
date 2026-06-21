"use client"

import React from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coins, Zap, ShieldCheck, Sprout, Landmark, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

const products = [
  { 
    title: "Flexible Staking", 
    asset: "USDT", 
    apy: "8.5%", 
    icon: Zap, 
    color: "text-secondary", 
    desc: "Redeem any time, low risk."
  },
  { 
    title: "Ethereum 2.0", 
    asset: "ETH", 
    apy: "12.2%", 
    icon: Sprout, 
    color: "text-blue-500", 
    desc: "Stake your ETH for Beacon chain."
  },
  { 
    title: "Locked Savings", 
    asset: "SOL", 
    apy: "18.4%", 
    icon: Landmark, 
    color: "text-purple-500", 
    desc: "Higher yield for 30/60/90 days."
  },
  { 
    title: "DEPCRYPT Launchpad", 
    asset: "DPR", 
    apy: "45.0%", 
    icon: Rocket, 
    color: "text-primary", 
    desc: "Early access to new ecosystem tokens."
  },
]

export default function EarnPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Coins className="w-6 h-6 text-secondary" />
          <h1 className="text-2xl font-headline font-bold">DEPCRYPT Earn</h1>
        </div>
        <p className="text-xs text-muted-foreground">Maximize your digital wealth through secure staking and yield farming.</p>
      </div>

      <GlassCard className="relative overflow-hidden p-8 border-secondary/20 bg-secondary/5">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Coins className="w-40 h-40 text-secondary" />
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="col-span-2 space-y-4">
            <Badge variant="outline" className="text-secondary border-secondary/30">ACTIVE POOL</Badge>
            <h2 className="text-3xl font-headline font-bold">DPR Genesis Staking</h2>
            <p className="text-muted-foreground max-w-md">Stake DEPCRYPT native tokens to earn 45.0% APY and receive exclusive airdrops from ecosystem partners.</p>
            <Button className="bg-secondary text-black hover:bg-secondary/90 rounded-xl px-8 py-6 h-auto font-bold text-lg">
              Stake Now
            </Button>
          </div>
          <GlassCard className="p-6 text-center border-white/10 bg-black/40">
            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Total Value Locked</span>
            <div className="text-3xl font-headline font-bold mt-2 text-secondary">$1.24B</div>
            <p className="text-[10px] text-muted-foreground mt-2">Secured by Audit</p>
          </GlassCard>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="p-6 h-full flex flex-col justify-between group">
              <div>
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${p.color}`}>
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-1">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-2 mb-6">
                  <Badge className="bg-white/5 text-foreground border-white/10">{p.asset}</Badge>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-1">Estimated APY</div>
                <div className="text-2xl font-headline font-bold text-secondary mb-4">{p.apy}</div>
                <Button variant="outline" className="w-full rounded-xl border-white/10 hover:bg-white/10 group-hover:border-primary/50 transition-all">
                  Subscribe
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}