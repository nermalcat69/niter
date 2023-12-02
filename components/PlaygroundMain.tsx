import { useState } from "react";
import DropDown, { FixType } from "../components/DropDown";
import User from "./globals/User";
import { useChat } from "ai/react";
import { Toaster, toast } from "react-hot-toast";

export default function PlaygroundMain() {
  const [article, rawArticle] = useState("");
  const [fix, FixType] = useState<FixType>("Grammar & Punctuations");
  const {
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    messages,
  } = useChat({ body: { fix, article } });

  const onSubmit = (e: any) => {
    rawArticle(input);
    handleSubmit(e);
  };

  const lastMessage = messages[messages.length - 1];
  const generatedArticles = lastMessage?.role === "assistant" ? lastMessage.content : null;
  return (
    <section className="select-none">
      <div className="flex items-stretch w-full  border-b border-gray-200">
        <div className="flex-1 text-center border-r py-4 bg-white font-medium  flex items-center">
          <span className="ml-4 mr-3 px-2 py-1 text-xs text-blue-500 hover:text-blue-600 border border-blue-200 bg-blue-50 duration-75 rounded-full ">
            GPT 3.5
          </span>
          <p className="text-lg text-gray-700">Your Article</p>
        </div>
        <div className="flex-1 text-center py-4 bg-white font-medium text-lg text-gray-700">
          Preview
        </div>
      </div>
      <div className="flex h-screen overflow-visible items-stretch">
        <div className="flex-1 bg-white  border-r border-gray-200">
          <div className="flex justify-center px-5">
            <form className="max-w-xl w-full" onSubmit={onSubmit}>
              <div className="flex mt-10 items-center space-x-3">
                <p className="text-left font-medium">
                  Paste your article below{" "}
                  <span className="text-slate-500">
                    (or write something you want us to check)
                  </span>
                  .
                </p>
              </div>
              <textarea
                value={input}
                onChange={handleInputChange}
                rows={18}
                className="w-full resize-none max-w rounded-md border-gray-300 shadow-sm focus:border-gray-400 focus:ring-gray-400 my-5"
                placeholder={"I want my article fixed."}
              />
              <div className="flex mb-5 items-center space-x-3">
                <p className="text-left font-medium">
                  Select how you want your article.
                </p>
              </div>
              <div className="block">
                <DropDown fix={fix} FixType={FixType} />
              </div>

              {!isLoading && (
                <button
                  className="bg-gray-800 hover:bg-gray-900 text-gray-50 px-4 py-2 rounded-md mt-8 duration-200 font-medium sm:mt-10 hover:shadow-inner w-full"
                  type="submit"
                >
                  Fix your Article &rarr;
                </button>
              )}
              {isLoading && (
                <button
                  className="bg-gray-800 hover:bg-gray-900 text-gray-50 px-4 py-2 rounded-md mt-8 duration-200 font-medium sm:mt-10 w-full"
                  disabled
                >
                  <span className="loading">
                    <span style={{ backgroundColor: "white" }} />
                    <span style={{ backgroundColor: "white" }} />
                    <span style={{ backgroundColor: "white" }} />
                  </span>
                </button>
              )}
            </form>
          </div>
        </div>

        <div className="flex-1 bg-white">
          <div className="px-4 py-8">
            <div className="flex items-start space-x-4">
              <span>
                <User />
              </span>
              <div className="max-w-lg -mt-1">
                <Toaster
                  position="top-center"
                  reverseOrder={false}
                  toastOptions={{ duration: 2000 }}
                />
                <output>
                  {generatedArticles && (
                    <div>
                      <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                        {generatedArticles
                          .substring(generatedArticles.indexOf("1") + 1)
                          .split("1.")
                          .map((generatedArticle) => {
                            return (
                              <div>
                                <div className="flex items-start space-x-4">
                                  <div
                                    className="bg-zinc-50 border mr-16 max-w-[500px] block py-2 px-2 rounded-lg"
                                    onClick={() => {
                                      navigator.clipboard.writeText(
                                        generatedArticle,
                                      );
                                      toast(
                                        "Generated Article copied to clipboard",
                                        {
                                          icon: "✂️",
                                        },
                                      );
                                    }}
                                    key={generatedArticle} >
                                    <p>{generatedArticle}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </output>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
