import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Niter from "./globals/Niter";

export default function Header() {
  return (
    <header className="flex max-w-7xl justify-between items-center w-full mt-4 pb-3 pt-3 sm:px-4 px-2 top-0 mx-auto bg-white border border-gray-100 hover:shadow-inner rounded-full">
      <Link href="/" className="flex space-x-3 items-center">
        <Niter />
        <h1 className="text-2xl ml-2">Niter</h1>
      </Link>
      <Link
        href="https://github.com/nermalcat69/niter"
        target="_blank"
        className="flex justify-end space-x-4 items-center bg-gray-950 text-gray-100 px-6 py-2 rounded-md text-md"
      >
        <FaGithub className="w-8 h-8" />
        <p>Source</p>
      </Link>
    </header>
  );
}
