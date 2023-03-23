import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { useState, useEffect } from "react";
// import { loadFromBlob } from "@excalidraw/excalidraw";
import Elements from "./Elements";
import MobileElements from "./MobileElements";
import Link from "next/link";
import { toast } from "react-hot-toast";
export default function Hero() {
  const [Comp, setComp] = useState();
  function createInitialData() {
    // var response;
    // if (window.innerWidth > 640) {
    //   response = await fetch("/websiteSkillsMobile.excalidraw");
    // } else {
    //   response = await fetch("/websiteSkillsMobile.excalidraw");

    // }
    // const data = await response.blob();
    // const scene = await loadFromBlob(data, null, null);
    // console.log(scene.elements);
    let initialData: any = {};
    if (window.innerWidth > 640) {
      initialData.scrollToContent = true;
      initialData.appState = {
        viewBackgroundColor: "#E6E8EF",
        zoom: 0.95,
      };
      initialData.elements = Elements;
    } else {
      initialData.appState = {
        viewBackgroundColor: "#E6E8EF",
        scrollX: -2430,
        scrollY: -100,
      };
      initialData.elements = MobileElements;
    }
    // initialData.elements = scene.elements;
    return initialData;
  }

  useEffect(() => {
    import("@excalidraw/excalidraw").then((comp) => {
      //@ts-ignore
      setComp(comp.Excalidraw);
    });
  }, []);

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
            <h3 className="text-indigo-500 pt-2">
              Software Engineer / Fullstack Developer
            </h3>
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

          <p className="text-primary md:w-[40rem] text-md md:text-lg mb-8">
            &nbsp;&nbsp;&nbsp;&nbsp;Richard is a software engineer based in
            Toronto and is studying Systems Desgin Engineering at the University
            of Waterloo. He has a knack for developing effective digital
            solutions for businesses of all scale. He is currently working at{" "}
            <a
              href="https://www.energyintell.com/Home/"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400"
            >
              Energy Intell
            </a>
            &nbsp;developing a reverse ETL pipeline and their mobile dashboard
            app with <span className="text-green-400">React Native</span> and{" "}
            <span className="text-green-400">.NET Core</span>.&nbsp; Aside from
            work, he enjoys participating in in-person hackathons and exploring
            new technologies like <span className="text-green-400">Redis</span>{" "}
            and <span className="text-green-400">Qdrant</span> in his personal
            projects. When not online, he is often found at the gym.
          </p>
          <div className="flex justify-center items-center mb-2">
            {/* <Link className="btn kbd " href="/portfolio">
              <span className="font-mada">View Portfolio</span>
            </Link> */}
            <Link
              href="/portfolio"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-neutr group  border border-gray-900"
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
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
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
      <div className="md:w-[70rem] md:h-[30rem] flex items-center justify-center mb-10 w-[20rem] h-[40rem] ">
        {Comp && (
          //@ts-ignore
          <Comp
            theme="dark"
            viewModeEnabled
            initialData={createInitialData()}
          />
        )}
      </div>
    </div>
  );
}
