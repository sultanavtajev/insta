import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 55;

const uploadDir = path.join(process.cwd(), "public/uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json(
        { error: "Ingen fil funnet i opplastingen" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filePath = path.join(uploadDir, file.name);

    await fs.promises.writeFile(filePath, buffer);

    try {
      const baseUrl = process.env.BASE_URL || "http://localhost:3000";
      const imageUrl = `${baseUrl}/uploads/${file.name}`;

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

      return NextResponse.json({
        message: "Fil lastet opp og analysert",
        analysis: response.choices[0].message.content,
        filePath: `/uploads/${file.name}`,
      });
    } catch (error) {
      return NextResponse.json(
        { error: "Feil ved kall til OpenAI" },
        { status: 500 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { error: "Noe gikk galt under håndtering av formdata" },
      { status: 500 }
    );
  }
}
