import Link from "next/link";
import Niter from "./globals/Niter";
import { MdIosShare } from "react-icons/md";

export default function PlaygroundHeader() {
    return (
    <header className="flex justify-between items-center w-full pb-3 pt-3 px-2 sm:px-10 top-0 mx-auto bg-white border-b border-gray-200">
      <span className="flex space-x-2 items-center">
        <Link href="/">
            <Niter />
        </Link>  
            <span className="text-2xl font-light text-gray-400 mb-1">/</span>
        <p className="text-2xl pl-1 text-gray-600">
          Niter
        </p>
            </span>
            <span className="border shadow-sm border-gray-300 px-4 py-1 rounded-md hover:bg-gray-50 duration-75">
                <Link href="https://twitter.com/intent/tweet?text=test&url=" target="_blank" className="flex flex-row items-center space-x-1 text-gray-600 hover:text-gray-700"><p>Share on Twitter</p><MdIosShare className="mb-1" /></Link>
            </span>
        </header>
    );
}