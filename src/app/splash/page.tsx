
"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { BrainCircuit } from 'lucide-react'

interface Particle {
  id: number;
  initialX: number;
  initialY: number;
  initialOpacity: number;
  duration: number;
}

export default function SplashPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles on client side only to avoid hydration mismatch
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      initialX: Math.random() * 400,
      initialY: Math.random() * 800,
      initialOpacity: Math.random(),
      duration: Math.random() * 5 + 5,
    }));
    
    setParticles(newParticles);
    setMounted(true);

    const timer = setTimeout(() => {
      router.push('/login');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Particles Simulation - Only renders after mounting to prevent mismatch */}
      <div className="absolute inset-0 opacity-20">
        {mounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{ 
              x: particle.initialX, 
              y: particle.initialY,
              opacity: particle.initialOpacity
            }}
            animate={{ 
              y: [null, -1000],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: particle.duration, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="w-24 h-24 rounded-3xl glass flex items-center justify-center neon-glow-primary mb-8 animate-pulse-neon">
          <BrainCircuit className="w-14 h-14 text-primary" />
        </div>
        <h1 className="text-4xl font-headline font-bold tracking-tighter text-gradient mb-2">
          DEPCRYPT
        </h1>
        <p className="text-muted-foreground text-sm tracking-widest uppercase font-medium">
          Digital Asset Sentinel
        </p>
      </motion.div>

      <div className="absolute bottom-20 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}
