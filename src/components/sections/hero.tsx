
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Globe, Shield } from "lucide-react"

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Zap className="w-4 h-4 text-secondary fill-secondary" />
          <span className="text-xs font-medium tracking-wider uppercase">Future of Digital Finance</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          Trade. <span className="text-gradient">Earn.</span> Grow.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          The next generation crypto ecosystem built for everyone. Secure, decentralized, and powered by advanced AI trading assistants.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 text-base shadow-[0_0_20px_rgba(51,119,255,0.4)]">
            Launch App
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-white/10 glass hover:bg-white/5 px-8 h-12 text-base">
            Explore Ecosystem
          </Button>
        </div>

        {/* Floating elements simulation */}
        <div className="mt-20 relative h-[300px] max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] glass rounded-full flex items-center justify-center border-primary/20 animate-pulse">
            <Globe className="w-40 h-40 text-primary opacity-20" />
          </div>
          
          {/* Animated floating badges */}
          <div className="absolute top-0 left-10 glass px-4 py-2 rounded-xl flex items-center gap-3 animate-float border-primary/20">
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold">₿</div>
            <div className="text-left">
              <div className="text-[10px] uppercase text-muted-foreground">Bitcoin</div>
              <div className="text-sm font-bold">$64,231.50</div>
            </div>
          </div>

          <div className="absolute bottom-10 right-20 glass px-4 py-2 rounded-xl flex items-center gap-3 animate-float border-accent/20 [animation-delay:1s]">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">Ξ</div>
            <div className="text-left">
              <div className="text-[10px] uppercase text-muted-foreground">Ethereum</div>
              <div className="text-sm font-bold">$3,412.12</div>
            </div>
          </div>

          <div className="absolute top-20 right-10 glass px-4 py-2 rounded-xl flex items-center gap-3 animate-float border-secondary/20 [animation-delay:2s]">
            <Shield className="w-5 h-5 text-secondary" />
            <div className="text-left">
              <div className="text-[10px] uppercase text-muted-foreground">Security</div>
              <div className="text-sm font-bold">Verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
