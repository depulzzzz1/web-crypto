
"use client"

import React from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { 
  User, 
  Shield, 
  Bell, 
  Globe, 
  Moon, 
  CreditCard, 
  LogOut, 
  ChevronRight,
  Verified,
  Settings
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  }

  const menuItems = [
    { icon: User, label: "Account Information", detail: "Personal details" },
    { icon: Shield, label: "Security Center", detail: "2FA & Identity", badge: "Action Required", badgeColor: "bg-destructive/20 text-destructive" },
    { icon: CreditCard, label: "Payment Methods", detail: "Visa, Apple Pay" },
    { icon: Bell, label: "Notifications", detail: "Alerts & Signals" },
    { icon: Globe, label: "Language", detail: "English (US)" },
  ]

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-headline font-bold">Profile</h1>
        <button className="w-10 h-10 rounded-xl glass flex items-center justify-center">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <GlassCard className="p-6 flex flex-col items-center text-center gap-4 relative overflow-hidden border-primary/20">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border-4 border-background shadow-xl">
            <span className="text-3xl font-bold text-primary">JD</span>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center border-4 border-background">
            <Verified className="w-4 h-4 text-white" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Jane Doe</h2>
          <p className="text-xs text-muted-foreground">jane.doe@example.com</p>
          <div className="flex gap-2 mt-3">
            <Badge variant="outline" className="text-primary border-primary/30">PRO</Badge>
            <Badge variant="outline" className="text-secondary border-secondary/30">KYC VERIFIED</Badge>
          </div>
        </div>
      </GlassCard>

      <div className="space-y-3">
        <h3 className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-2">Preferences</h3>
        <GlassCard className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
              <Moon className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold">Dark Mode</span>
          </div>
          <Switch checked />
        </GlassCard>
      </div>

      <div className="space-y-3">
        <h3 className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground ml-2">Settings</h3>
        <div className="space-y-2">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <GlassCard className="p-4 flex items-center justify-between group cursor-pointer hover:bg-white/5 border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold">{item.label}</div>
                    <div className="text-[10px] text-muted-foreground">{item.detail}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <Badge className={`text-[8px] py-0 px-1.5 ${item.badgeColor}`}>
                      {item.badge}
                    </Badge>
                  )}
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <Button 
        variant="ghost" 
        onClick={handleLogout}
        className="w-full h-14 rounded-2xl text-destructive hover:bg-destructive/10 hover:text-destructive border border-destructive/20 mt-4"
      >
        <LogOut className="w-5 h-5 mr-2" />
        Sign Out
      </Button>

      <p className="text-center text-[10px] text-muted-foreground mt-8">
        DEPCRYPT v1.4.2 (Stable)<br/>
        Secured by AES-256 Quantum Encryption
      </p>
    </div>
  )
}
