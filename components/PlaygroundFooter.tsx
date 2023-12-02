import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function PlaygroundFooter() {
  return (
    <footer className="flex justify-between items-center w-full pb-3 pt-3 px-2 sm:px-4 bottom-0 mx-auto bg-white border-t border-gray-100">
      <span className="flex space-x-3 items-center">
        <p className="text-lg text-gray-600">
          Powered By{" "}
          <Link href="https://openai.com" className="hover:text-gray-700">
            OpenAi
          </Link>
        </p>
      </span>
      <Link
        href="https://github.com/nermalcat69/niter"
        target="_blank"
        className="flex justify-end space-x-4 items-center text-gray-600 rounded-md text-md"
      >
        <p>Nermalcat69</p>
      </Link>
    </footer>
  );
}
