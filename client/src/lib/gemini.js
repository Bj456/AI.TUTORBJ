import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

let model;

try {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // ✅ सही variable नाम
  if (!apiKey) {
    console.warn("⚠️ Gemini API key missing — using mock model temporarily.");
    model = {
      generateContent: async () => ({
        response: { text: () => "⚠️ Gemini API key missing — demo mode active." },
      }),
    };
  } else {
    const genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings });
  }
} catch (error) {
  console.error("Error initializing Gemini:", error);
  model = {
    generateContent: async () => ({
      response: { text: () => "⚠️ Gemini initialization failed." },
    }),
  };
}

export default model;
