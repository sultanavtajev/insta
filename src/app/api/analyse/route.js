import { Configuration, OpenAIApi } from "openai";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: "Error parsing the file" });
    }

    const imageFile = files.image;
    const imageData = fs.readFileSync(imageFile.filepath, {
      encoding: "base64",
    });

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.createChatCompletion({
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
        max_tokens: 300,
      });

      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

export default handler;
