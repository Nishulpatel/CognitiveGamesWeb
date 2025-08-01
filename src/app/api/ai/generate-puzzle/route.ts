// import { NextRequest, NextResponse } from "next/server";
// import { GenAI } from "@/app/api/ai/genAI"; // adjust this path if needed

// const genAI = new GenAI();

// export async function POST(req: NextRequest) {
//   try {
//     const { difficulty } = await req.json();

//     const prompt = `Generate a ${difficulty} level logic puzzle as JSON.
// Return in this format:
// {
//   "question": "string",
//   "grid": [["1", "0", "1"], ["0", "1", "0"]],
//   "solution": "string explanation"
// }`;

// const model = genAI.getGenerativeModel({ model: "gemini-pro" });


//     const result = await model.generateContent(prompt);
//     const text = result.response.text();

//     if (!text) {
//       return NextResponse.json({ error: "Empty response from AI" }, { status: 500 });
//     }

//     const puzzle = JSON.parse(text);
//     return NextResponse.json({ puzzle });
//   } catch (err) {
//     console.error("❌ Server error:", err);
//     return NextResponse.json({ error: "Server error generating puzzle" }, { status: 500 });
//   }
// }
