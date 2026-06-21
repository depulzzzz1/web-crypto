'use server';
/**
 * @fileOverview An AI trading advisor that analyzes market sentiment and trading volume
 * to suggest risk adjustments for a user's cryptocurrency portfolio.
 *
 * - aiSentinelPredictorRiskAdjustment - A function that handles the risk adjustment process.
 * - AISentinelPredictorRiskAdjustmentInput - The input type for the aiSentinelPredictorRiskAdjustment function.
 * - AISentinelPredictorRiskAdjustmentOutput - The return type for the aiSentinelPredictorRiskAdjustment function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AISentinelPredictorAssetInputSchema = z.object({
  symbol: z.string().describe('The ticker symbol of the cryptocurrency asset (e.g., BTC, ETH).'),
  holdings: z.number().positive().describe('The quantity of the asset currently held in the portfolio.'),
  currentPrice: z.number().positive().describe('The current market price of the asset.'),
  sentimentScore: z.number().min(-1).max(1).describe('A sentiment score for the asset, ranging from -1 (very negative) to 1 (very positive).'),
  volumeChange: z.number().describe('The percentage change in trading volume for the asset over a recent period (e.g., 24 hours).'),
});

const AISentinelPredictorRiskAdjustmentInputSchema = z.object({
  portfolioAssets: z.array(AISentinelPredictorAssetInputSchema).describe('A list of cryptocurrency assets in the user\'s portfolio with market data.'),
  riskTolerance: z.enum(['low', 'medium', 'high']).describe('The user\'s current risk tolerance level.'),
});
export type AISentinelPredictorRiskAdjustmentInput = z.infer<typeof AISentinelPredictorRiskAdjustmentInputSchema>;

const AISentinelPredictorAssetRecommendationSchema = z.object({
  symbol: z.string().describe('The ticker symbol of the cryptocurrency asset.'),
  action: z.enum(['reduce_exposure', 'increase_exposure', 'hold']).describe('The suggested action for the asset: reduce exposure, increase exposure, or hold.'),
  reason: z.string().describe('A brief explanation for the suggested action.'),
  suggestedChangePercentage: z.number().min(0).max(100).optional().describe('The suggested percentage change in exposure (e.g., 5 for 5% reduction/increase). Only applicable for reduce_exposure/increase_exposure.'),
});

const AISentinelPredictorRiskAdjustmentOutputSchema = z.object({
  overallRecommendation: z.string().describe('An overall summary recommendation for the portfolio risk.'),
  assetRecommendations: z.array(AISentinelPredictorAssetRecommendationSchema).describe('Specific risk adjustment recommendations for each asset in the portfolio.'),
});
export type AISentinelPredictorRiskAdjustmentOutput = z.infer<typeof AISentinelPredictorRiskAdjustmentOutputSchema>;

export async function aiSentinelPredictorRiskAdjustment(input: AISentinelPredictorRiskAdjustmentInput): Promise<AISentinelPredictorRiskAdjustmentOutput> {
  return aiSentinelPredictorRiskAdjustmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSentinelPredictorRiskAdjustmentPrompt',
  input: { schema: AISentinelPredictorRiskAdjustmentInputSchema },
  output: { schema: AISentinelPredictorRiskAdjustmentOutputSchema },
  prompt: `You are an expert AI crypto trading advisor for DEPCRYPT.\nYour task is to analyze real-time market sentiment and trading volume for a given portfolio and provide actionable risk adjustment recommendations.\n\nConsider the user's risk tolerance and the following data:\n\nUser's Risk Tolerance: {{{riskTolerance}}}\n\nPortfolio Assets:\n{{#each portfolioAssets}}\n- Symbol: {{this.symbol}}, Holdings: {{this.holdings}}, Current Price: {{this.currentPrice}}, Sentiment Score: {{this.sentimentScore}}, Volume Change: {{this.volumeChange}}%\n{{/each}}\n\nBased on this information, provide:\n1. An overall recommendation for the portfolio risk.\n2. Specific recommendations for each asset, including whether to 'reduce_exposure', 'increase_exposure', or 'hold', along with a concise reason and an optional suggested percentage change if exposure adjustment is recommended.\n\nPay close attention to sentiment scores (negative sentiment might warrant reducing exposure, positive sentiment increasing) and significant volume changes (high volume with negative sentiment could indicate a downtrend, high volume with positive sentiment an uptrend). Adjust recommendations based on the user's risk tolerance: a 'low' risk tolerance might lead to more conservative 'reduce_exposure' actions, while 'high' might allow for more 'increase_exposure' in volatile but potentially rewarding situations.`,
});

const aiSentinelPredictorRiskAdjustmentFlow = ai.defineFlow(
  {
    name: 'aiSentinelPredictorRiskAdjustmentFlow',
    inputSchema: AISentinelPredictorRiskAdjustmentInputSchema,
    outputSchema: AISentinelPredictorRiskAdjustmentOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
