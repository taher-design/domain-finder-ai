import { GoogleGenAI, Type } from "@google/genai";
import type { DomainSuggestion, Niche } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const domainSuggestionSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      domainName: {
        type: Type.STRING,
        description: "The suggested domain name, including the TLD.",
      },
      justification: {
        type: Type.STRING,
        description: "A brief explanation of why this domain is a good choice, referencing its SEO potential and brandability.",
      },
      estimatedValue: {
        type: Type.NUMBER,
        description: "An estimated valuation in USD, based on brandability, keyword strength, and commercial potential.",
      },
      slogan: {
        type: Type.STRING,
        description: "A creative slogan for a potential brand using this domain.",
      },
    },
    required: ["domainName", "justification", "estimatedValue", "slogan"],
  },
};

const nicheIdeasSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            niche: { type: Type.STRING },
            description: { type: Type.STRING }
        },
        required: ["niche", "description"],
    }
};

export type GenerationMode = 'value' | 'niche' | 'short' | 'geo';

interface GenerationParams {
    mode: GenerationMode;
    tlds: string[];
    keywords?: string;
    location?: string;
}

const generatePrompt = (params: GenerationParams): string => {
    const { mode, tlds, keywords, location } = params;
    const tldString = tlds.join(', ');

    switch (mode) {
        case 'niche':
            return `
                You are a market trend and SEO analyst. 
                First, identify a single, specific, trending, and profitable online business niche from one of the following high-value categories: Health & Wellness, Legal Services, Education & E-Learning, Finance & Investing, Real Estate, Technology, or B2B Services. 
                Then, based on that niche, generate 12 creative, brandable, and available domain name ideas.
                IMPORTANT: The domain ideas must be based on keywords with significant search volume potential.
                TLDs to include: ${tldString}.
                For each domain, provide a brief justification explaining its SEO value, an estimated valuation in USD, and a creative slogan.
            `;
        case 'short':
            return `
                You are a branding specialist with SEO knowledge. Generate 12 ultra-short (4-6 characters), brandable, and available domain name ideas.
                They should be catchy, easy to pronounce, and memorable, while still being relevant to the keyword theme: "${keywords || 'general business'}".
                Prioritize ideas with underlying search volume potential.
                TLDs to include: ${tldString}.
                For each domain, provide a brief justification, an estimated valuation in USD, and a creative slogan.
            `;
        case 'geo':
            return `
                You are a local marketing and domain expert. Generate 12 available geo-targeted domain name ideas for the location: "${location}".
                Incorporate the keywords: "${keywords}".
                The domains must be appealing to a local audience, brandable, and based on terms people in that location are actively searching for.
                TLDs to include: ${tldString}.
                For each domain, provide a brief justification about its local SEO potential, an estimated valuation in USD, and a creative slogan.
            `;
        case 'value':
        default:
            return `
                You are a domain name expert specializing in finding "hidden gem" domains with high SEO potential. 
                Your task is to generate 12 high-value, premium-sounding domain names based on the keywords: "${keywords}".
                CRITICAL CONSTRAINT: The domains you suggest MUST be available for standard registration (typically under $20) and not already taken or listed as premium domains on registrars.
                The domains must be rooted in keywords with strong existing search volume. Analyze for brandability, SEO potential, and commercial value.
                For each domain, provide a brief justification highlighting the keyword value, an estimated potential value (if it were developed), and a slogan.
                TLDs to include: ${tldString}.
            `;
    }
};


export async function generateDomainSuggestions(params: GenerationParams): Promise<DomainSuggestion[]> {
  try {
    const prompt = generatePrompt(params);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: domainSuggestionSchema,
        temperature: 0.8,
      },
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText) as DomainSuggestion[];
  } catch (error) {
    console.error("Error generating domain suggestions:", error);
    throw new Error("Failed to generate domain suggestions. Please try again.");
  }
}


export async function generateNicheIdeas(): Promise<Niche[]> {
    try {
        const prompt = "Generate a list of 10 currently trending and profitable online business niches. For each niche, provide a short description. Focus on tech, AI, e-commerce, and content creation.";
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: nicheIdeasSchema,
            },
        });
        const jsonText = response.text.trim();
        return JSON.parse(jsonText) as Niche[];
    } catch (error) {
        console.error("Error generating niche ideas:", error);
        throw new Error("Failed to generate niche ideas.");
    }
}
