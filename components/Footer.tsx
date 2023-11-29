import Link from 'next/link';
import { AiTwotoneHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center mt-20 mb-5">
      <p className='text-gray-800 flex flex-row items-center mr-1'>
        Developed with
        <span className='mx-1 mt-1'>
          <AiTwotoneHeart />
        </span>
        by
      </p>
      <Link href="https://github.com/nermalcat69" className='text-gray-800 font-bold'>nermalcat69</Link>
    </footer>
  );
}
