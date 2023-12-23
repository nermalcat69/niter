import Link from "next/link";
import { AiTwotoneHeart } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className=" mt-10 mb-5">
      <div className=" -translate-y-6">          <svg width="154" height="42" viewBox="0 0 154 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10.1199C5.96485 8.42069 9.43823 6.06224 13.6071 4.65249C20.4661 2.333 27.6959 1.26838 34.5805 4.11471C51.9478 11.295 61.175 30.4585 78.5887 37.9052C84.5732 40.4643 91.2414 40.4779 97.6351 40.1907C106.966 39.7716 116.188 38.2115 125.308 36.2694C134.157 34.3852 142.936 31.4966 152.04 31.4966" stroke="#CBD781" stroke-width="3" stroke-linecap="round"/>
</svg>
</div>

      <div className="flex justify-center mb-8"><svg width="359" height="37" viewBox="0 0 359 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2C3.65139 2 4.75907 2.53554 4.84261 4.28988C5.10367 9.7722 10.3113 9.58458 14.7917 10.5278" stroke="#5182EE" strokeWidth="3" strokeLinecap="round"/>
<path d="M67.38 18.345C68.7064 17.9833 69.684 16.7471 70.6964 15.8972C73.5292 13.519 76.6419 11.6316 79.8559 9.8172C82.4297 8.36422 87.8983 4.86197 91.1869 5.59276C95.2258 6.4903 99.3678 6.26394 103.623 6.26394" stroke="#5182EE" strokeWidth="3" strokeLinecap="round"/>
<path d="M129.207 18.345C133.884 27.1806 146.286 30.0233 155.264 31.5316C158.533 32.0807 162.673 32.8385 165.45 34.69" stroke="#5182EE" strokeWidth="3" strokeLinecap="round"/>
<path d="M218.749 22.6089C223.791 17.0624 229.226 13.0951 235.528 8.9486C239.313 6.45833 238.279 10.4258 241.529 11.2385C244.154 11.8946 246.767 12.0455 249.465 11.9491C252.862 11.8278 255.356 9.19327 258.545 8.39587" stroke="#5182EE" strokeWidth="3" strokeLinecap="round"/>
<path d="M290.525 12.6598C294.216 14.746 298.227 16.6081 302.448 17.3185C305.913 17.9018 308.907 16.5289 312.239 16.5289C312.833 16.5289 313.792 18.5368 314.292 18.8977C316.278 20.3318 318.776 20.2673 321.083 20.477" stroke="#5182EE" strokeWidth="3" strokeLinecap="round"/>
<path d="M336.007 17.6343C342.17 17.0741 345.409 8.15919 351.799 8.39585C353.065 8.44275 354 9.55496 354.878 8.27741C355.686 7.10317 356.104 5.45345 357.326 4.84259" stroke="#5182EE" strokeWidth="3" strokeLinecap="round"/>
</svg>
      </div>
      <div className="flex justify-end">
        <svg width="167" height="42" viewBox="0 0 167 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 19.5C5.96485 17.8008 20.4382 5.66125 24.6071 4.2515C31.4661 1.93201 38.6959 0.867391 45.5805 3.71372C62.9478 10.894 72.175 30.0575 89.5887 37.5042C95.5732 40.0633 105.106 26.7872 111.5 26.5C120.831 26.0809 131.379 41.7318 140.5 39.7897C149.349 37.9055 156.395 19.5 165.5 19.5" stroke="#CBD781" stroke-width="3" stroke-linecap="round"/>
</svg>

      </div>
      <div className="flex justify-center items-center mb-12">
      <p className="text-gray-800 flex flex-row items-center mr-1">
        Developed with
        <AiTwotoneHeart className="mx-1 mt-1" />
        by
      </p>
      <Link
        href="https://github.com/nermalcat69"
        className="text-gray-800 font-bold"
      >
        nermalcat69
      </Link>
      </div>
      {/* Testing Github Codespaces with my ipad */}
    </footer>
  );
}
