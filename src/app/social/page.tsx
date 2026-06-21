"use client"

import React from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { 
  Share2, 
  MessageSquare, 
  Repeat2, 
  Heart, 
  TrendingUp, 
  Verified,
  Plus,
  Search,
  Zap
} from 'lucide-react'
import { motion } from 'framer-motion'

const posts = [
  {
    author: "CryptoWhale",
    handle: "@whale_alerts",
    time: "2h",
    content: "Large institutional buy order for $BTC detected at $64k support level. Bullish momentum building up. 🚀",
    likes: "4.2k",
    comments: "128",
    reposts: "450",
    verified: true,
  },
  {
    author: "DeFi Queen",
    handle: "@defi_queen",
    time: "4h",
    content: "Just analyzed the new $DPR Genesis pool. 45% APY is sustainable given the current ecosystem growth. Full thread below. 👇",
    likes: "1.5k",
    comments: "84",
    reposts: "210",
    verified: true,
  },
]

export default function SocialPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main Feed */}
      <div className="lg:col-span-8 space-y-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Share2 className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-headline font-bold">Social Feed</h1>
          </div>
          <Button size="icon" className="rounded-full bg-primary neon-glow-primary">
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        <GlassCard className="p-4 border-primary/20 bg-primary/5">
          <div className="flex gap-4">
            <Avatar className="w-10 h-10 border border-primary/20">
              <AvatarFallback className="bg-primary/10 text-primary">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <Input 
                placeholder="What's happening in Web3?" 
                className="bg-transparent border-none focus-visible:ring-0 text-lg p-0"
              />
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg text-primary hover:bg-primary/10">
                    <Zap className="w-4 h-4" />
                  </Button>
                </div>
                <Button className="rounded-xl px-6 bg-primary font-bold">Post</Button>
              </div>
            </div>
          </div>
        </GlassCard>

        <div className="space-y-4">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-6 border-white/5 hover:bg-white/5 transition-all cursor-pointer group">
                <div className="flex gap-4">
                  <Avatar className="w-12 h-12 border border-white/10">
                    <AvatarImage src={`https://picsum.photos/seed/${post.handle}/100/100`} />
                    <AvatarFallback>{post.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{post.author}</span>
                        {post.verified && <Verified className="w-4 h-4 text-primary" />}
                        <span className="text-xs text-muted-foreground">{post.handle} · {post.time}</span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/90">{post.content}</p>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-[10px] font-bold">{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                          <Repeat2 className="w-4 h-4" />
                          <span className="text-[10px] font-bold">{post.reposts}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="text-[10px] font-bold">{post.likes}</span>
                        </button>
                      </div>
                      <button className="text-muted-foreground hover:text-white transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sidebar Widgets */}
      <div className="lg:col-span-4 space-y-6">
        <GlassCard className="p-6 border-white/5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Trending Topics</h3>
          <div className="space-y-4">
            {[
              { tag: "#BitcoinETF", posts: "42.5k" },
              { tag: "#SolanaSummer", posts: "12.2k" },
              { tag: "#AITrading", posts: "8.4k" },
              { tag: "#DepcryptV2", posts: "15.9k" },
            ].map((topic) => (
              <div key={topic.tag} className="flex items-center justify-between group cursor-pointer">
                <div>
                  <div className="text-sm font-bold group-hover:text-primary transition-colors">{topic.tag}</div>
                  <div className="text-[10px] text-muted-foreground">{topic.posts} posts today</div>
                </div>
                <TrendingUp className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-6 bg-accent/5 border-accent/20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-accent">Market Sentiment</h3>
          </div>
          <div className="text-2xl font-headline font-bold mb-1">STRONGLY BULLISH</div>
          <p className="text-xs text-muted-foreground leading-relaxed">AI analysis of over 50k social signals indicates massive retail interest in Layer 2 protocols.</p>
        </GlassCard>
      </div>
    </div>
  )
}