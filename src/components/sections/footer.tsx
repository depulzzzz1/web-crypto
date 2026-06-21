
"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Twitter, Github, Linkedin, MessageSquare, Send } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="text-2xl font-headline font-bold text-gradient">DEPCRYPT</div>
            <p className="text-muted-foreground max-w-xs text-sm">
              The premium cryptocurrency ecosystem for the next generation of digital finance. Trade, earn, and grow with confidence.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary"><Twitter className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary"><MessageSquare className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary"><Github className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/20 hover:text-primary"><Linkedin className="w-5 h-5" /></Button>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6 text-sm uppercase tracking-widest">Products</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Spot Trading</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Futures Market</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Staking Pro</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">NFT Marketplace</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold mb-6 text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trading Fees</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security Audit</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
            <p className="text-sm text-muted-foreground">Get weekly market insights and ecosystem updates delivered to your inbox.</p>
            <div className="flex gap-2">
              <Input placeholder="email@address.com" className="bg-white/5 border-white/10 rounded-xl" />
              <Button size="icon" className="shrink-0 bg-primary hover:bg-primary/90 rounded-xl">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-muted-foreground">
            © 2024 DEPCRYPT. All rights reserved.
          </div>
          <div className="flex gap-8 text-xs text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
