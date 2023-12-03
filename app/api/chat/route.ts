import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req: Request) {
  const { fix, article } = await req.json();

const response = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  stream: true,
  messages: [
    {
      role: "user",
      content: `Fix ${fix} of this ${article}.${
        fix === "Grammar & Punctuations"
          ? " Implement standard grammar and punctuation, and ensure that small details and spelling errors are corrected."
          : null
        } 
      
      
        Please base the changes on this context: ${article}${
        article.slice(-1) === "." ? "" : "."
      }`,
    },
  ],
});

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
