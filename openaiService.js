import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // loaded from .env
});

async function chat() {
  const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "user", content: "Bewerte die Aufgabe 'spanisch lernen' auf einer Schwierigletisskala von 1 bis 1000. GIB NUR DEN SCORE ALS INT AUS" },
    ],
  });

  return response.choices[0].message.content;
}

export default chat;
