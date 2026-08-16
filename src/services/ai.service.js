// website name is ai.google.dev
// this code is copy from documentation of ai.google.dev

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

const interaction = await ai.interactions.create({
  model: "gemini-3.6-flash",
  input: "Explain how AI works in a few words",
});


// create a function to use ai in website . Function name is generateContent
async function generateContent(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text()
}
module.exports = generateContent ; // export the function to use in other files