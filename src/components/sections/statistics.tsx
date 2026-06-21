
"use client"

import React from 'react'

const stats = [
  { label: "Trading Volume", value: "$50B+" },
  { label: "Registered Users", value: "15M+" },
  { label: "Supported Countries", value: "180+" },
  { label: "Platform Uptime", value: "99.99%" },
]

export const Statistics = () => {
  return (
    <section className="py-24 border-y border-white/5 bg-black/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-4xl md:text-5xl font-headline font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
