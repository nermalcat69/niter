import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
  const { vibe, article } = await req.json();

  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "user",
        content: `Fix ${vibe} of this updated article. ${
          vibe === "Grammar & Punctuations"
            ? "Implement standard grammar and punctuations, and make sure to fix small details and spelling errors."
            : null
        }
          Implement standard grammar and punctuations, and make sure to fix small details and spelling errors, and base them on this context: ${article}${
            article.slice(-1) === "." ? "" : "."
          }`,
      },
    ],
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
