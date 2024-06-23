import OpenAI from "openai";
import formidable from "formidable";
import fs from "fs";
import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req, res) => {
  console.log("POST request received");

  try {
    const form = new formidable.IncomingForm();
    console.log("IncomingForm created");

    // Parse incoming form data
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form:", err);
        return res.status(500).json({ message: "Error parsing the file" });
      }

      console.log("Form parsed successfully");
      console.log("Fields:", fields);
      console.log("Files:", files);

      const imageFile = files.image;
      console.log("Image file:", imageFile);

      try {
        const imageData = fs.readFileSync(imageFile.path, {
          encoding: "base64",
        });
        console.log("Image data read successfully");

        const openai = new OpenAI({
          apiKey: process.env.OPENAI_API_KEY,
        });

        console.log("Sending request to OpenAI...");

        const response = await openai.chat.completion({
          model: "gpt-4",
          messages: [
            {
              role: "user",
              content: "What’s in this image?",
            },
            {
              role: "user",
              content: `data:image/jpeg;base64,${imageData}`,
            },
          ],
          maxTokens: 300,
        });

        console.log("OpenAI response received:", response.data);

        return res.status(200).json(response.data);
      } catch (error) {
        console.error("Error calling OpenAI:", error);
        return res.status(500).json({ error: error.message });
      }
    });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return res.status(500).json({ error: error.message });
  }
};
