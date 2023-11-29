import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

export default function SectionOne() {
    return (
<div className='mt-10'>
    <div className="flex flex-col justify-center items-center">
        <div>
            <span className="flex max-w-fit items-center border bg-white hover:shadow-inner border-gray-100  duration-75 p-2 px-4 rounded-full">
            <span className="flex space-x-4 font-medium"><p className="text-gray-600">Powered by</p> <Link href="" target="_blank"  className="border-l-2 border-gray-300 pl-2 text-blue-600 hover:text-blue-500 duration-75">OpenAi</Link></span>
            </span>
        </div>
        <div className="container mt-10">
                <h1 className="text-center text-4xl font-medium">Fix your Grammar Mistakes Efficiently</h1>
                <p className="text-center text-neutral-500 max-w-3xl mx-auto mt-3">Writing good english with good vocabulary, with no grammar mistakes and no punctuation mistakes is difficult for a lot of people. Use Niter and fix your life!!!</p>
        </div>
            <Link href="/playground" className="bg-gray-950 hover:bg-gray-800 hover:shadow-inner shadow-gray-200 px-4 py-2 rounded-xl mt-8 ">
                <span className="text-gray-100 text-xl flex flex-row space-x-2 items-center">
                    <span>Playground</span>
                    <IoChevronForward />
                </span>
            </Link> 

        <img className="mt-14 select-none" src="hero.png" width={1000} draggable={false} alt="hero image" />    

    </div>
</div>
  );
}