"use client"

import React from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LayoutGrid, Sparkles, Gavel, Timer, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const nfts = [
  { id: 'nft-1', title: 'Cyber Sentinel #042', collection: 'Neural Punk', price: '4.20 ETH', ends: '2h 14m' },
  { id: 'nft-2', title: 'Cosmic Drift', collection: 'Astro Vibes', price: '0.85 ETH', ends: '14h 02m' },
  { id: 'nft-3', title: 'Ethereal Robot', collection: 'Tech Genesis', price: '12.4 ETH', ends: '5m 22s' },
]

export default function NFTHubPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-6 h-6 text-accent" />
            <h1 className="text-2xl font-headline font-bold">NFT Hub</h1>
          </div>
          <p className="text-xs text-muted-foreground">Discover, collect, and trade digital collectibles.</p>
        </div>
        <Button className="bg-accent text-white hover:bg-accent/90 rounded-xl">Create NFT</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft, i) => (
          <motion.div
            key={nft.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="p-0 overflow-hidden group border-white/5 hover:border-accent/40">
              <div className="aspect-square relative overflow-hidden">
                <Image 
                  src={`https://picsum.photos/seed/${nft.id}/600/600`} 
                  alt={nft.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint="digital art nft"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-accent transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-black/60 backdrop-blur-md border-white/10 text-white flex items-center gap-2">
                    <Timer className="w-3 h-3" /> {nft.ends}
                  </Badge>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-1">{nft.title}</h3>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">{nft.collection}</p>
                </div>
                <div className="flex items-center justify-between py-4 border-y border-white/5">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Current Bid</span>
                    <div className="text-lg font-headline font-bold text-accent">{nft.price}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Floor Price</span>
                    <div className="text-lg font-headline font-bold">0.45 ETH</div>
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-xl h-12 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                  <Gavel className="w-4 h-4" /> Place a Bid
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}