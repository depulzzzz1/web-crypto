
"use client"

import React from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { 
  PieChart as PieChartIcon, 
  History, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Layers,
  ChevronRight
} from 'lucide-react'
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip as ChartTooltip 
} from 'recharts'
import { motion } from 'framer-motion'

const portfolioData = [
  { name: 'BTC', value: 45, color: '#F7931A' },
  { name: 'ETH', value: 30, color: '#627EEA' },
  { name: 'SOL', value: 15, color: '#14F195' },
  { name: 'Others', value: 10, color: '#A855F7' },
]

const holdings = [
  { symbol: "BTC", amount: "0.85 BTC", value: "$54,596.77", change: "+2.4%", color: "text-orange-500" },
  { symbol: "ETH", amount: "12.4 ETH", value: "$42,310.28", change: "+1.8%", color: "text-blue-500" },
  { symbol: "SOL", amount: "450 SOL", value: "$65,520.00", change: "+5.2%", color: "text-purple-500" },
]

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-headline font-bold">Portfolio</h1>
        <button className="w-10 h-10 rounded-xl glass flex items-center justify-center">
          <History className="w-5 h-5" />
        </button>
      </div>

      <GlassCard className="p-0 overflow-hidden border-primary/20">
        <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Net Worth</span>
          <h2 className="text-3xl font-headline font-bold mt-1">$162,427.05</h2>
          <div className="flex items-center gap-2 mt-2">
            <Badge variant="outline" className="text-secondary border-secondary/30 bg-secondary/10">+8.5%</Badge>
            <span className="text-[10px] text-muted-foreground uppercase font-bold">Last 30 Days</span>
          </div>
        </div>
        
        <div className="h-[200px] w-full p-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={portfolioData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {portfolioData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip 
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '12px', fontSize: '12px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      <div className="grid grid-cols-2 gap-4">
        <GlassCard className="p-4 flex flex-col items-center text-center gap-2">
          <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
            <ArrowDownLeft className="w-5 h-5" />
          </div>
          <div className="text-[10px] uppercase font-bold text-muted-foreground">Inflow</div>
          <div className="font-bold">$12,400</div>
        </GlassCard>
        <GlassCard className="p-4 flex flex-col items-center text-center gap-2">
          <div className="w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center text-destructive">
            <ArrowUpRight className="w-5 h-5" />
          </div>
          <div className="text-[10px] uppercase font-bold text-muted-foreground">Outflow</div>
          <div className="font-bold">$4,210</div>
        </GlassCard>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-headline font-bold uppercase tracking-wider text-xs">My Assets</h3>
          <button className="text-[10px] font-bold text-primary uppercase flex items-center gap-1">
            <Layers className="w-3 h-3" /> Manage
          </button>
        </div>

        <div className="space-y-3">
          {holdings.map((asset, i) => (
            <motion.div
              key={asset.symbol}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-4 flex items-center justify-between hover:bg-white/5 group border-white/5">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center font-bold ${asset.color}`}>
                    {asset.symbol[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{asset.symbol}</h4>
                    <span className="text-xs text-muted-foreground">{asset.amount}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">{asset.value}</div>
                  <div className="text-[10px] text-secondary font-bold">{asset.change}</div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
