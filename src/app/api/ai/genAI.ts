// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = process.env.GEMINI_API_KEY;

// if (!apiKey) {
//   throw new Error("❌ Missing GEMINI_API_KEY in environment variables");
// }

// export class GenAI {
//   private client: GoogleGenerativeAI;

//   constructor() {
//     this.client = new GoogleGenerativeAI(apiKey, {
//       // Force use of v1 instead of v1beta
//       apiEndpoint: "https://generativelanguage.googleapis.com/v1",
//     });
//   }

//   getGenerativeModel({ model }: { model: string }) {
//     return this.client.getGenerativeModel({
//       model,
//       generationConfig: {
//         temperature: 0.7,
//         maxOutputTokens: 2048,
//       },
//     });
//   }
// }
