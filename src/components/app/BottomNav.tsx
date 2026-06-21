
"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BarChart3, Wallet, BrainCircuit, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: Home, label: 'Home', path: '/dashboard' },
  { icon: BarChart3, label: 'Markets', path: '/markets' },
  { icon: Wallet, label: 'Portfolio', path: '/portfolio' },
  { icon: BrainCircuit, label: 'AI', path: '/ai-sentinel' },
  { icon: User, label: 'Profile', path: '/profile' },
]

export const BottomNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md glass border-t border-white/5 safe-bottom z-50 rounded-t-3xl">
      <div className="flex justify-around items-center h-20 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-all duration-300 relative group",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {isActive && (
                <span className="absolute -top-1 w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_#3377FF]" />
              )}
              <item.icon className={cn(
                "w-6 h-6 transition-transform duration-300",
                isActive && "scale-110",
                "group-hover:scale-110"
              )} />
              <span className="text-[10px] font-medium tracking-wide uppercase">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
