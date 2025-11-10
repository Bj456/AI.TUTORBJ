// client/src/lib/gemini.js
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const safetySettings = [
  { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE },
  { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE },
];

let model;
try {
  const apiKey = import.meta.env.VITE_GEMINI_PUBLIC_KEY; // <-- VITE_ prefix जरूरी है
  if (!apiKey) {
    console.warn("⚠️ VITE_GEMINI_PUBLIC_KEY missing — demo fallback active.");
    model = {
      generateText: async (opts) => ({ text: "⚠️ Gemini key missing — demo response." }),
      // Add any methods your app expects (e.g., generateContent or similar)
    };
  } else {
    const genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings });
  }
} catch (err) {
  console.error("Gemini init error:", err);
  model = {
    generateText: async () => ({ text: "⚠️ Gemini init failed." }),
  };
}

export default model;
