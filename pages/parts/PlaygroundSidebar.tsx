import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function PlaygroundSidebar() {
  return (
    <aside className="justify-between w-[300px] border-r hidden h-full lg:flex flex-col pt-3 pb-4 overflow-hidden bg-zinc-50 cursor-default">
      <div className="mt-2">
        <div className="flex items-center ml-5 mt-5">
          <span className=" mr-2 px-2 py-0.5 text-xs text-blue-500 hover:text-blue-600 border border-blue-200 bg-blue-50 duration-75 rounded-full ">
            Beta Version
          </span>
          <span className=" mr-2 px-2 py-0.5 text-xs text-blue-500 hover:text-blue-600 border border-blue-200 bg-blue-50 duration-75 rounded-full ">
            OpenAI on Edge
          </span>
        </div>
        <h1 className="ml-6 text-xl font-medium text-gray-700 mt-3">
          Playground
        </h1>
        <div className="mt-10 bg-white mx-5 border px-4 py-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-700">Niter</h2>
          <p className="text-xs mt-2 pt-2 border-t border-gray-300 text-gray-600">
            Niter uses openai's gpt model to provide you this grammar fixing
            service.
          </p>
          <h2 className="mt-3 text-md text-gray-700 font-medium">
            Steps to Use Niter
          </h2>
          <p className="text-xs mt-2  text-gray-600">
            1. Paste your article content into the textarea
          </p>
          <p className="text-xs mt-2 text-gray-600">
            2. Get your grammar corrected
          </p>
          <p className="text-xs mt-2 pb-6 border-b border-gray-300 mb-2 text-gray-600">
            3. Hover over to the result and copy the result
          </p>
          <p className="mt-6 text-center text-md flex items-center text-gray-600">
            <HiSparkles className="mr-2" />
            Open Source Project
          </p>
        </div>
      </div>
      <div className="px-8 my-8 flex-1 justify-center space-y-4 overflow-auto">
        <Link
          href="https://github.com/nermalcat69/niter"
          target="_blank"
          className=" border border-gray-300 bg-white hover:translate-y-px rounded-md sm:px-4 py-1 text-center flex justify-center items-center px-2 hover:shadow-inner text-gray-700 duration-75"
        >
          <FaRegStar className="mr-1 text-gray-600" />
          Star Us On Github
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center my-auto text-gray-600 ">
        <Link
          href="https://vercel.com/"
          target="_blank"
          className="hover:translate-y-0.5 duration-75"
        >
          <svg
            width="160"
            viewBox="0 0 283 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
              fill="#424242"
            />
          </svg>
        </Link>
        <Link
          href="https://openai.com/"
          target="_blank"
          className="mt-8 flex flex-row hover:translate-y-0.5 duration-75"
        >
          <svg
            fill="#424242"
            width="160"
            viewBox="0 0 80 80"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>OpenAI icon</title>
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
          </svg>
          <h2 className="text-4xl -ml-24 font-semibold openai">Open AI</h2>
        </Link>
      </div>
    </aside>
  );
}

// and as it costs us money, you can sponsor this project and get your logo on our sidebar
