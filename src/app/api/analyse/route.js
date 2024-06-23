import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export const config = {
  api: {
    bodyParser: false, // Deaktiver standard body parser for å håndtere filopplastinger
  },
};

const uploadDir = path.join(process.cwd(), "public/uploads"); // Velg opplastingskatalog

if (!fs.existsSync(uploadDir)) {
  console.log("Oppretter opplastingskatalog...");
  fs.mkdirSync(uploadDir, { recursive: true }); // Opprett katalogen hvis den ikke finnes
  console.log("Opplastingskatalog opprettet.");
}

// Sett opp OpenAI-klienten
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Sørg for å sette OPENAI_API_KEY i miljøvariablene dine
});

export async function POST(request) {
  console.log("Mottatt POST-forespørsel");

  try {
    const formData = await request.formData();
    const file = formData.get("image"); // Vi antar at input-feltet har navnet 'image'

    if (!file) {
      console.error("Ingen fil funnet i opplastingen");
      return NextResponse.json(
        { error: "Ingen fil funnet i opplastingen" },
        { status: 400 }
      );
    }

    console.log("Mottatt fil:", file);

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filePath = path.join(uploadDir, file.name);

    return new Promise((resolve, reject) => {
      fs.writeFile(filePath, buffer, async (err) => {
        if (err) {
          console.error("Feil ved skriving av fil:", err);
          reject(
            NextResponse.json(
              { error: "Feil ved skriving av fil" },
              { status: 500 }
            )
          );
        } else {
          console.log("Fil vellykket lastet opp og lagret.");

          try {
            // Bruk miljøvariabel for å sette baseURL når prosjektet er distribuert
            const baseUrl = process.env.BASE_URL || "http://localhost:3000";
            const imageUrl = `${baseUrl}/uploads/${file.name}`;
            console.log("Sender forespørsel til OpenAI...");

            const response = await openai.chat.completions.create({
              model: "gpt-4",
              messages: [
                {
                  role: "user",
                  content: `Describe the contents of this image hosted at ${imageUrl}.`,
                },
              ],
              max_tokens: 300,
            });

            console.log("OpenAI respons mottatt:", response);

            resolve(
              NextResponse.json({
                message: "Fil lastet opp og analysert",
                analysis: response.choices[0].message.content,
                filePath: `/uploads/${file.name}`,
              })
            );
          } catch (error) {
            console.error("Feil ved kall til OpenAI:", error);
            reject(
              NextResponse.json(
                { error: "Feil ved kall til OpenAI" },
                { status: 500 }
              )
            );
          }
        }
      });
    });
  } catch (err) {
    console.error("Feil under håndtering av formdata:", err);
    return NextResponse.json(
      { error: "Noe gikk galt under håndtering av formdata" },
      { status: 500 }
    );
  }
}
