import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { useState, useEffect } from "react";

import Link from "next/link";
import { toast } from "react-hot-toast";
export default function Hero() {
  function copyEmail() {
    const text = "r29zhang@uwaterloo.ca";
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast("Email copied to Clipboard", {
          icon: "✅",
          style: {
            borderRadius: "10px",
            background: "#24272D",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        toast("Encountered an Error: Email is here: r29zhang@uwaterloo.ca", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#24272D",
            color: "#fff",
          },
        });
      });
  }

  return (
    <div className="bg-neutral min-h-screen w-screen flex flex-col items-center px-10 md:px-0">
      <div className="flex flex-col justify-center items-start md:w-auto">
        <div className="flex justify-evenly items-center mb-6">
          <div className="md:w-80">
            <h1 className="text-primary text-3xl md:text-4xl font-prompt">
              Richard Zhang
            </h1>
            <h3 className="text-indigo-500 pt-2">Software Engineer</h3>
            <div className="flex flex-row justify-start md:gap-16 items-center pt-4 gap-12 ">
              <a href="mailto:r29zhang@uwaterloo.ca">
                <button className="pl-2" onClick={copyEmail}>
                  <AiOutlineMail className=" scale-150" />
                </button>
              </a>

              <a
                className=""
                href="https://www.linkedin.com/in/richard-zhang-318861217/"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineLinkedin className=" scale-150" />
              </a>
              <a
                className=""
                href="https://github.com/notzree"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineGithub className=" scale-150" />
              </a>
            </div>
          </div>
          <div className="avatar md:pl-10">
            <div className=" w-20 md:w-32 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 ml-2 md:ml-0">
              <img src="/profile.JPG" />
            </div>
          </div>
        </div>
        <div className="w-full ">
          <h3 className="font-mada font-bold text-2xl  text-primary underline decoration-gray-900 underline-offset-8 decoration-4 mb-6">
            &nbsp;Work &nbsp;
          </h3>
          <p className="text-primary md:w-[36rem] text-md md:text-lg mb-8  text-justify   ">
            Richard is a software engineer based in Toronto studying Systems
            Design Engineering at the{" "}
            <span className="text-green-400">University of Waterloo. </span>
            He is working as a Fullstack Engineer at{" "}
            <a
              href="https://www.getjitto.com/"
              className="text-green-400 underline"
              target="_blank"
              rel="norefferer"
            >
              Jitto
            </a>
            ,&nbsp;where he is currently migrating their database from DynamoDB
            to Aurora ServerlessV2. He is most familiar with react.js, node.js,
            and python but is secretly wants to be a golang developer. From his
            current job, he&apos;s learned that he loves working at startups and
            is currently
            <div
              className="lg:tooltip"
              data-tip="contact me at: r29zhang@uwaterloo.ca "
            >
              <a className="text-green-400 underline">
                &nbsp;looking for co-op opportunities for Summer 2024
              </a>
              .&nbsp;Aside from work, Richard is addicted to Muay Thai and is
              learning how to cook. He is also working towards his first AWS
              developer certification.
            </div>
          </p>
          <div className="flex justify-center items-center mb-2">
            <Link
              href="/portfolio"
              className=" rounded-lg relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out  hover:pl-10 hover:pr-6 bg-neutr group  border border-gray-900"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className=" rounded-lg relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                View Portfolio
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-mada font-bold text-2xl pb-2 text-primary underline decoration-gray-900 underline-offset-8 decoration-4 mb-6 ">
            &nbsp;Skills &nbsp;
          </h3>
        </div>
      </div>
      <div className="md:w-[70rem] md:h-[30rem] flex items-center justify-center mb-10 w-[20rem] h-[40rem] "></div>
    </div>
  );
}
