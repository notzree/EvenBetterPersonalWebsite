import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="navbar bg-neutral text-primary-content md:px-10  mb-16">
      <div className="flex-1">
        <Link
          href="/"
          className="w-20"
        >
          <svg className="w-20 h-fit" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/></defs><g fill="#e6e8ef" fillOpacity="1"><g transform="translate(62.502819, 265.714869)"><g><path d="M 126.613281 -3.015625 C 115.019531 -28.753906 102.496094 -54.261719 90.902344 -80.464844 C 109.453125 -87.191406 124.988281 -102.03125 124.988281 -130.324219 C 124.988281 -185.050781 72.8125 -185.515625 62.378906 -185.515625 L 2.320312 -185.515625 C 1.160156 -185.515625 0 -184.355469 0 -183.425781 L 0 -151.890625 L 62.378906 -151.890625 C 67.945312 -151.890625 89.742188 -150.730469 89.742188 -130.324219 C 89.742188 -109.917969 70.03125 -108.988281 62.378906 -108.988281 L 0 -108.988281 L 0 -2.085938 C 0 -1.160156 1.160156 0 2.320312 0 L 32.695312 0 C 34.089844 0 35.246094 -1.160156 35.246094 -2.085938 L 35.246094 -74.902344 L 55.191406 -74.902344 L 89.046875 -1.390625 C 89.277344 -0.695312 90.667969 0 91.367188 0 L 124.527344 0 C 126.382812 0 127.308594 -1.390625 126.613281 -3.015625 Z M 126.613281 -3.015625 "/></g></g></g><g fill="#e6e8ef" fillOpacity="1"><g transform="translate(195.831081, 265.714869)"><g><path d="M 108.527344 -34.320312 L 13.21875 -34.320312 L 0.464844 -3.015625 C -0.230469 -1.160156 0.695312 0 3.015625 0 L 108.292969 0 C 109.917969 0 111.078125 -1.160156 111.078125 -2.085938 L 111.078125 -32.234375 C 111.078125 -33.390625 110.148438 -34.320312 108.527344 -34.320312 Z M 2.550781 -150.960938 L 59.828125 -150.960938 L 27.363281 -69.800781 L 65.394531 -69.800781 L 110.613281 -182.5 C 111.078125 -184.355469 110.148438 -185.515625 108.0625 -185.515625 L 2.550781 -185.515625 C 1.160156 -185.515625 0 -184.355469 0 -183.425781 L 0 -153.28125 C 0 -152.121094 1.160156 -150.960938 2.550781 -150.960938 Z M 2.550781 -150.960938 "/></g></g></g></svg>
        </Link>
      </div>
      <div className="flex-none">
        {/* <Link
          href="/"
          className="btn btn-ghost normal-case md:text-base text-xs text-primary "
        >
          Overview
        </Link> */}
        <Link href="/" className="relative inline-block text-sm group ">
          <span className="relative z-10 block px-2 md:px-5 py-3 overflow-hidden font-medium leading-tight text-primary transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-neutral"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Overview</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>

        <Link
          href="/portfolio"
          className="relative inline-block text-sm  group mx-4"
        >
          <span className="relative z-10 block px-2 md:px-5 py-3 overflow-hidden font-medium leading-tight text-primary transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-neutral"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Portfolio</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>

        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="relative inline-block text-sm group mr-2 md:mr-0"
        >
          <span className="relative z-10 block px-2 md:px-5 py-3 overflow-hidden font-medium leading-tight text-primary transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-neutral"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Resume</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>
  );
}
