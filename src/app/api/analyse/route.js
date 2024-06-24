import { NextResponse } from "next/server";
import OpenAI from "openai";
import fetch from "node-fetch";

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
      console.log("Laster opp fil til OpenAI...");

      const uploadResponse = await fetch("https://api.openai.com/v1/files", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "multipart/form-data",
        },
        body: JSON.stringify({
          purpose: "fine-tune",
          file: `data:image/jpeg;base64,${base64Image}`,
        }),
      });

      const uploadData = await uploadResponse.json();
      const fileId = uploadData.id;

      console.log("Fil lastet opp til OpenAI med fil-ID:", fileId);

      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `Describe the contents of the image with file ID ${fileId}.`,
          },
        ],
        max_tokens: 300,
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
