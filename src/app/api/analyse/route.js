import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

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
      fs.writeFile(filePath, buffer, (err) => {
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
          resolve(
            NextResponse.json({
              message: "Fil lastet opp",
              filePath: `/uploads/${file.name}`,
            })
          );
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
