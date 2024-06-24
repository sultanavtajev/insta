import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 55;

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
    const base64Image = buffer.toString("base64");

    try {
      console.log("Sender forespørsel til OpenAI...");

      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Vennligst gi en detaljert beskrivelse av innholdet i dette bildet. Beskriv objektene, landskapet, konteksten og alle andre bemerkelsesverdige detaljer.",
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:image/jpeg;base64,${base64Image}`,
                  detail: "high", // For high-resolution detail
                },
              },
              {
                type: "text",
                text: "Hvilke gjenstander er synlige i bildet? Beskriv hver gjenstand med detaljer om størrelse, form, farge og plassering.",
              },
              {
                type: "text",
                text: "Er det noen personer i bildet? Hvis ja, beskriv dem i detalj, inkludert deres utseende, klær, og hva de gjør.",
              },
              {
                type: "text",
                text: "Er det noen tekst synlig i bildet? Hvis ja, gjengi teksten og beskriv konteksten.",
              },
              {
                type: "text",
                text: "Hvilken stemning formidler bildet? Beskriv eventuelle følelser eller stemninger som bildet kan fremkalle.",
              },
              {
                type: "text",
                text: "Er det noen spesifikke detaljer som skiller seg ut i bildet? Beskriv disse detaljene grundig.",
              },
            ],
          },
        ],
        max_tokens: 1000, // Increase max tokens for more detailed response
        temperature: 0.7, // Adjust temperature for creativity
        top_p: 0.9, // Adjust top_p for diversity
        frequency_penalty: 0.5, // Penalty to reduce repetition
        presence_penalty: 0.5, // Penalty to increase presence of new topics
      });

      console.log("OpenAI respons mottatt:", response);

      return NextResponse.json({
        message: "Fil analysert",
        analysis: response.choices[0].message.content,
      });
    } catch (error) {
      console.error("Feil ved kall til OpenAI:", error);
      return NextResponse.json(
        { error: "Feil ved kall til OpenAI" },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("Feil under håndtering av formdata:", err);
    return NextResponse.json(
      { error: "Noe gikk galt under håndtering av formdata" },
      { status: 500 }
    );
  }
}
