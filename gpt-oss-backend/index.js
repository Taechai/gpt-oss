// Express backend for GPT-OSS-20B chat platform
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;
const HF_OPENAI_URL = 'https://router.huggingface.co/v1/chat/completions';
const HF_MODEL = 'openai/gpt-oss-20b:fireworks-ai';

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  try {
    const payload = {
      model: HF_MODEL,
      messages: [
        { role: 'system', content: 'You are a helpful assistant. Use markdown formatting in your responses: **bold** for emphasis, proper headings with #, ##, ###, bullet points with -, and tables with | when needed. Structure your content with clear sections and maintain good spacing. Use <br> for line breaks when needed.' },
        { role: 'user', content: message }
      ]
    };
    const hfRes = await fetch(HF_OPENAI_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HUGGINGFACE_API_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        parameters: {
          temperature: 0.7,
          response_format: { type: "text" }
        }
      })
    });
    if (!hfRes.ok) {
      const error = await hfRes.text();
      return res.status(500).json({ response: `Hugging Face OpenAI API error: ${error}` });
    }
    const data = await hfRes.json();
    let reply = '';
    if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
      // Preserve markdown formatting
      reply = data.choices[0].message.content.replace(/\\n/g, '\n').replace(/\\r/g, '\r');
    } else {
      reply = JSON.stringify(data);
    }
    res.json({ response: reply });
  } catch (err) {
    res.status(500).json({ response: 'Error contacting Hugging Face OpenAI API.' });
  }
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
