import type { NextRequest } from "next/server";
import { Configuration, OpenAIApi } from "openai-edge";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const askForGrammarFix = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);

  try {
    const { action, text } = searchParams;

    if (action === "askGrammarFix") {
      return new Response("Hey, do you want to fix the grammar of an article?");
    } else if (action === "fixGrammar" && text) {
      const completion = await openai.createCompletion({
        engine: "text-davinci-002", // You can adjust the engine based on your needs
        prompt: `Fix the grammar of the following text:\n\n${text}`,
        max_tokens: 150,
        temperature: 0.7,
      });

      return new Response(completion.choices[0]?.text || "", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "text/plain;charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
        },
      });
    } else {
      return new Response("Invalid action or missing text parameter.", {
        status: 400,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
  } catch (error: any) {
    console.error(error);

    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    });
  }
};

export const config = {
  runtime: "edge",
};

export default askForGrammarFix;
