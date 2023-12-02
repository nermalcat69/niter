import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

export default function SectionOne() {
  return (
    <div className="mt-10">
      <div className="flex flex-col justify-center items-center">
        <div>
          <span className="flex max-w-fit items-center border bg-white hover:shadow-inner border-gray-100  duration-75 p-2 px-4 rounded-full">
            <span className="flex space-x-4 font-medium">
              <p className="text-gray-600">Powered by</p>{" "}
              <Link
                href=""
                target="_blank"
                className="border-l-2 border-gray-300 pl-2 text-blue-600 hover:text-blue-500 duration-75"
              >
                OpenAi
              </Link>
            </span>
          </span>
        </div>
        <div className="container mt-4">
          <div className=" mb-1 invisible md:visible flex justify-end"><svg width="224" height="51" viewBox="0 0 274 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 34.1743C6.16476 23.9226 11.0953 13.4415 17.9989 4.73087C20.8898 1.08331 22.0099 1.37571 25.7967 3.9242C40.1015 13.5511 51.7186 26.7418 65.4131 37.1769C70.3246 40.9194 76.5576 46.6562 82.8013 48.2014C85.9754 48.9869 90.0562 48.6293 93.1984 47.9325C102.151 45.947 108.307 37.9383 113.993 31.3958C121.211 23.0894 127.811 14.2416 135.235 6.12013C136.559 4.67127 138.461 0.884403 139.223 4.23791C142.126 17.0089 145.451 29.8583 153.587 40.4484C156.015 43.6098 160.983 50.1651 165.866 48.5375C168.788 47.5634 171.446 45.4829 173.933 43.7423C177.838 41.0081 181.666 38.1566 185.428 35.2274C189.594 31.9832 193.521 27.7506 198.133 25.1441C199.781 24.2123 198.815 28.1053 198.894 29.3567C199.15 33.4088 199.889 41.5843 204.205 43.7423C206.788 45.034 210.542 44.1864 213.146 43.6078C220.18 42.0446 227.047 39.345 233.648 36.5047C244.805 31.7041 254.855 24.9576 265.714 19.6094C268.131 18.4186 269.533 18.4442 272.234 18.4442" stroke="#CBD781" strokeWidth="3" strokeLinecap="round"/>
</svg></div>
          <h1 className="text-center lg:text-5xl font-semibold text-2xl sm:text-4xl">
            Fix your <span className="bg-blue-500 text-gray-50 px-3">Grammar Mistakes</span> Efficiently
          </h1>
          <p className="text-center text-neutral-500 max-w-3xl mx-auto mt-3">
            Writing good english with good vocabulary, with no grammar mistakes
            and no punctuation mistakes is difficult for a lot of people. Use
            Niter and fix your life!!!
          </p>
        </div>
        <Link
          href="/playground"
          className="bg-gray-900 hover:bg-gray-950 hover:translate-y-0.5 px-4 py-2 rounded-xl mt-8 duration-200"
        >
          <span className="text-gray-50 font-medium tracking-wide text-xl flex flex-row space-x-2 items-center">
            <span>Playground</span>
            <IoChevronForward />
          </span>
        </Link>
        <img
          className="mt-14 select-none"
          src="header.png"
          width={1000}
          draggable={false}
          alt="hero image"
        />
      </div>
    </div>
  );
}
