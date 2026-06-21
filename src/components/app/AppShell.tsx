"use client"

import React from 'react'
import { BottomNav } from './BottomNav'
import { SidebarNav } from './SidebarNav'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const isAuthPage = pathname === '/login' || pathname === '/splash';

  if (isAuthPage) {
    return (
      <div className="min-h-screen bg-background overflow-hidden relative">
        <div className="aurora-bg" />
        <main className="h-full">
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background overflow-hidden relative">
      <div className="aurora-bg" />
      
      {/* Desktop Sidebar */}
      {!isMobile && <SidebarNav />}

      <main className={`flex-1 overflow-y-auto no-scrollbar relative ${isMobile ? 'pb-24 pt-4 px-4' : 'p-6'}`}>
        <div className={isMobile ? 'max-w-md mx-auto' : 'max-w-7xl mx-auto'}>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      
      {/* Mobile Bottom Navigation */}
      {isMobile && <BottomNav />}
    </div>
  )
}