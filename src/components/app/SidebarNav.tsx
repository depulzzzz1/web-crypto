"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BarChart3, Wallet, BrainCircuit, User, ArrowLeftRight, LayoutGrid, Coins, Share2, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: Home, label: 'Dashboard', path: '/dashboard' },
  { icon: BarChart3, label: 'Markets', path: '/markets' },
  { icon: ArrowLeftRight, label: 'Trade', path: '/trade' },
  { icon: Wallet, label: 'Portfolio', path: '/portfolio' },
  { icon: BrainCircuit, label: 'AI Sentinel', path: '/ai-sentinel' },
  { icon: Coins, label: 'Earn', path: '/earn' },
  { icon: LayoutGrid, label: 'NFT Hub', path: '/nft-hub' },
  { icon: Share2, label: 'Social', path: '/social' },
  { icon: User, label: 'Profile', path: '/profile' },
]

export const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <div className="w-64 glass border-r border-white/5 h-screen sticky top-0 flex flex-col p-6 z-50">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center neon-glow-primary">
          <BrainCircuit className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-headline font-bold tracking-tighter">DEPCRYPT</h1>
          <p className="text-[10px] text-primary font-bold uppercase tracking-widest">V2.0 Pro</p>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group",
                isActive 
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(51,119,255,0.3)]" 
                  : "text-muted-foreground hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-transform duration-300",
                isActive && "scale-110",
                "group-hover:scale-110"
              )} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto">
        <div className="p-4 rounded-2xl bg-secondary/10 border border-secondary/20 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-secondary" />
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Verified Account</span>
          </div>
          <p className="text-[10px] text-muted-foreground leading-relaxed">Your identity is verified. Enjoy higher withdrawal limits.</p>
        </div>
        <div className="flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
            <span className="font-bold text-accent">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold truncate">Jane Doe</h4>
            <p className="text-[10px] text-muted-foreground truncate">Pro Member</p>
          </div>
        </div>
      </div>
    </div>
  )
}