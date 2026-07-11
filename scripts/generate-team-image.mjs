/**
 * Generates the "Join Our Team" hero image with Google GenAI (Gemini image model)
 * and writes it to public/images/join-our-team.jpg.
 *
 * Usage:  node scripts/generate-team-image.mjs
 * Requires GEMINI_API_KEY (loaded from .env or the environment).
 */
import { GoogleGenAI } from '@google/genai';
import { writeFileSync } from 'node:fs';
import { config } from 'dotenv';

config();

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
  console.error('Missing GEMINI_API_KEY. Add it to .env or the environment and retry.');
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const prompt =
  'A warm, professional photograph of a diverse team of Black African service ' +
  'professionals standing together and smiling confidently at the camera. ' +
  'A group of well-groomed Black men and women in clean, modern work attire ' +
  '(smart casual and light service uniforms), representing home cleaning, ' +
  'domestic help, errands and event staffing. Bright natural lighting, ' +
  'friendly and trustworthy mood, shallow depth of field, high-end corporate ' +
  'lifestyle photography, sharp focus, realistic. No text or logos.';

const OUT = 'public/images/join-our-team.jpg';

async function tryGeminiImage() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: prompt,
  });
  const parts = response?.candidates?.[0]?.content?.parts ?? [];
  for (const part of parts) {
    if (part.inlineData?.data) {
      writeFileSync(OUT, Buffer.from(part.inlineData.data, 'base64'));
      return true;
    }
  }
  return false;
}

async function tryImagen() {
  const response = await ai.models.generateImages({
    model: 'imagen-4.0-generate-001',
    prompt,
    config: { numberOfImages: 1, aspectRatio: '1:1' },
  });
  const bytes = response?.generatedImages?.[0]?.image?.imageBytes;
  if (bytes) {
    writeFileSync(OUT, Buffer.from(bytes, 'base64'));
    return true;
  }
  return false;
}

try {
  let ok = false;
  try {
    ok = await tryGeminiImage();
    if (ok) console.log('Generated via gemini-2.5-flash-image');
  } catch (e) {
    console.warn('gemini-2.5-flash-image failed:', e?.message || e);
  }
  if (!ok) {
    ok = await tryImagen();
    if (ok) console.log('Generated via imagen-4.0-generate-001');
  }
  if (!ok) {
    console.error('No image data returned by either model.');
    process.exit(1);
  }
  console.log('Saved ->', OUT);
} catch (e) {
  console.error('Generation failed:', e?.message || e);
  process.exit(1);
}
