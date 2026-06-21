
"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlassCard } from "@/components/ui/glass-card"
import { Label } from "@/components/ui/label"
import { Fingerprint, Smartphone, Mail, Lock, Chrome, Apple } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  }

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-sm mx-auto"
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-headline font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to manage your digital assets</p>
        </div>

        <GlassCard className="p-8 mb-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  className="pl-10 bg-white/5 border-white/10 rounded-xl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password">Password</Label>
                <button type="button" className="text-xs text-primary hover:underline">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-10 bg-white/5 border-white/10 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 rounded-xl py-6 h-auto text-base font-bold shadow-[0_0_20px_rgba(51,119,255,0.3)]">
              Sign In
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-transparent px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 hover:bg-white/10">
              <Chrome className="w-4 h-4 mr-2" /> Google
            </Button>
            <Button variant="outline" className="rounded-xl border-white/10 bg-white/5 hover:bg-white/10">
              <Apple className="w-4 h-4 mr-2" /> Apple
            </Button>
          </div>
        </GlassCard>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-8">
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:neon-glow-primary transition-all">
                <Fingerprint className="w-7 h-7 text-primary" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Biometric</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:neon-glow-secondary transition-all">
                <Smartphone className="w-7 h-7 text-secondary" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Face ID</span>
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Don't have an account? <button className="text-primary font-bold hover:underline">Sign up</button>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
