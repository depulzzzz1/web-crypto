
"use client"

import React, { useState } from 'react'
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { BrainCircuit, Loader2, ShieldCheck, AlertCircle, Info } from "lucide-react"
import { aiSentinelPredictorRiskAdjustment, type AISentinelPredictorRiskAdjustmentOutput } from "@/ai/flows/ai-sentinel-predictor-risk-adjustment"
import { Badge } from "@/components/ui/badge"

const mockPortfolio = [
  { symbol: "BTC", holdings: 1.2, currentPrice: 64231.50, sentimentScore: 0.8, volumeChange: 12.5 },
  { symbol: "ETH", holdings: 15.5, currentPrice: 3412.12, sentimentScore: 0.2, volumeChange: -4.2 },
  { symbol: "SOL", holdings: 250, currentPrice: 145.60, sentimentScore: 0.9, volumeChange: 45.0 },
]

export const AISentinel = () => {
  const [loading, setLoading] = useState(false)
  const [recommendation, setRecommendation] = useState<AISentinelPredictorRiskAdjustmentOutput | null>(null)

  const handleAnalyze = async () => {
    setLoading(true)
    try {
      const result = await aiSentinelPredictorRiskAdjustment({
        portfolioAssets: mockPortfolio,
        riskTolerance: 'medium'
      })
      setRecommendation(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-black/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="border-primary/20 relative overflow-hidden p-8 md:p-12">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <BrainCircuit className="w-32 h-32 text-primary" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center shadow-[0_0_30px_rgba(51,119,255,0.3)] shrink-0">
                <BrainCircuit className="w-12 h-12 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <Badge variant="outline" className="mb-4 text-primary border-primary/30">AI Trading Assistant</Badge>
                <h2 className="text-4xl font-headline font-bold mb-4">AI Sentinel <span className="text-secondary">Predictor</span></h2>
                <p className="text-muted-foreground">Get real-time sentiment analysis and risk-adjusted portfolio recommendations powered by our proprietary AI sentinel engine.</p>
              </div>
            </div>

            {!recommendation ? (
              <div className="text-center py-10 bg-white/5 rounded-2xl border border-white/5">
                <Info className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Ready to analyze your portfolio?</h3>
                <Button size="lg" onClick={handleAnalyze} disabled={loading} className="bg-primary hover:bg-primary/90 rounded-full px-8">
                  {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Analyzing Market...</> : "Start AI Analysis"}
                </Button>
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                  <h4 className="flex items-center gap-2 font-bold mb-3 text-primary uppercase tracking-wider text-sm">
                    <ShieldCheck className="w-4 h-4" /> Overall Recommendation
                  </h4>
                  <p className="text-lg leading-relaxed">{recommendation.overallRecommendation}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recommendation.assetRecommendations.map((rec, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-xl">{rec.symbol}</span>
                        <Badge className={
                          rec.action === 'increase_exposure' ? 'bg-secondary' : 
                          rec.action === 'reduce_exposure' ? 'bg-destructive' : 'bg-muted'
                        }>
                          {rec.action.replace('_', ' ')}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{rec.reason}</p>
                      {rec.suggestedChangePercentage && (
                        <div className="text-xs font-medium text-primary">
                          Suggested adjustment: {rec.suggestedChangePercentage}%
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <Button variant="outline" onClick={() => setRecommendation(null)} className="w-full rounded-xl">
                  Run New Analysis
                </Button>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
