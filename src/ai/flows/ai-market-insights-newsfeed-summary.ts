'use server';
/**
 * @fileOverview An AI agent that provides a personalized summary of key Web3 news,
 * highlighting high-impact token launches and emerging trends for DEPCRYPT users.
 *
 * - aiMarketInsightsNewsfeedSummary - A function that processes news articles and generates a personalized summary.
 * - AIMarketInsightsNewsfeedSummaryInput - The input type for the aiMarketInsightsNewsfeedSummary function.
 * - AIMarketInsightsNewsfeedSummaryOutput - The return type for the aiMarketInsightsNewsfeedSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NewsArticleSchema = z.object({
  title: z.string().describe('The title of the news article.'),
  content: z.string().describe('The full content of the news article.'),
  url: z.string().url().optional().describe('Optional URL to the original news article.'),
});

const TokenLaunchSchema = z.object({
  name: z.string().describe('The name of the token or project being launched.'),
  description: z.string().describe('A brief description of the token launch and its impact.'),
});

const EmergingTrendSchema = z.object({
  name: z.string().describe('The name or category of the emerging Web3 trend.'),
  description: z.string().describe('A brief description explaining the trend and its significance.'),
});

const AIMarketInsightsNewsfeedSummaryInputSchema = z.object({
  newsArticles: z.array(NewsArticleSchema).describe('An array of recent Web3 news articles for analysis.'),
  userPreferences: z.string().optional().describe('Optional string detailing user-specific interests (e.g., "focus on DeFi projects," "interested in new NFT collections") for personalization.'),
});
export type AIMarketInsightsNewsfeedSummaryInput = z.infer<typeof AIMarketInsightsNewsfeedSummaryInputSchema>;

const AIMarketInsightsNewsfeedSummaryOutputSchema = z.object({
  summary: z.string().describe('A personalized, concise summary of the key Web3 news.'),
  highlightedTokenLaunches: z.array(TokenLaunchSchema).describe('A list of high-impact token launches identified from the news.'),
  emergingTrends: z.array(EmergingTrendSchema).describe('A list of emerging Web3 trends identified from the news.'),
});
export type AIMarketInsightsNewsfeedSummaryOutput = z.infer<typeof AIMarketInsightsNewsfeedSummaryOutputSchema>;

export async function aiMarketInsightsNewsfeedSummary(
  input: AIMarketInsightsNewsfeedSummaryInput
): Promise<AIMarketInsightsNewsfeedSummaryOutput> {
  return aiMarketInsightsNewsfeedSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiMarketInsightsNewsfeedSummaryPrompt',
  input: { schema: AIMarketInsightsNewsfeedSummaryInputSchema },
  output: { schema: AIMarketInsightsNewsfeedSummaryOutputSchema },
  prompt: `You are an expert Web3 financial analyst for DEPCRYPT, specializing in identifying high-impact token launches and emerging trends. Your task is to analyze the provided news articles and generate a personalized summary.

User's Personalization Preferences: {{{userPreferences}}}

News Articles to Analyze:
{{#each newsArticles}}
---
Title: {{{this.title}}}
Content: {{{this.content}}}
---
{{/each}}

Based on the news articles and considering the user's preferences, provide:
1. A concise, personalized summary of the most important Web3 news.
2. A list of any high-impact token launches you identify, including their name and a brief description of their significance.
3. A list of any emerging Web3 trends you identify, including their name and a brief description of their potential impact.

Ensure your output is structured as a JSON object strictly conforming to the provided schema. If no specific token launches or emerging trends are found, return empty arrays.`,
});

const aiMarketInsightsNewsfeedSummaryFlow = ai.defineFlow(
  {
    name: 'aiMarketInsightsNewsfeedSummaryFlow',
    inputSchema: AIMarketInsightsNewsfeedSummaryInputSchema,
    outputSchema: AIMarketInsightsNewsfeedSummaryOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
