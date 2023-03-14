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
    //   response = await fetch("/websiteSkills.excalidraw");
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
        zoom: 0.8,
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
            <h3 className="text-secondary pt-2">
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
              <a className="" href="https://github.com/notzree" rel="noreferrer"
                target="_blank">
                <AiOutlineGithub className=" scale-150" />
              </a>
            </div>
          </div>
          <div className="avatar md:pl-10">
            <div className=" w-20 md:w-32 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 ml-2 md:ml-0">
              <img src="https://cdn141.picsart.com/360612094067201.jpg" />
            </div>
          </div>
        </div>
        <div className="w-full ">
          <h3 className="font-mada font-bold text-2xl  text-primary underline decoration-gray-600 underline-offset-8 decoration-4 mb-6">
            &nbsp;Work &nbsp;
          </h3>

          <p className="text-primary md:w-[40rem] text-md md:text-lg mb-8">
            &nbsp;&nbsp;&nbsp;&nbsp;Richard is a freelance and a full-stack
            software engineer based in Toronto and is studying Systems Desgin
            Engineering at the University of Waterloo. He has a knack for
            developing effective digital web-based solutions for businesses of
            all scale. He is currently working at{" "}
            <a
              href="https://www.energyintell.com/Home/"
              target="_blank"
              rel="noreferrer"
              className="text-secondary"
            >
              Energy Intell
            </a>
            &nbsp;developing a reverse ETL pipeline, amongst other things. His
            freelance projects have recently included
            <a
              href="https://www.scarball.ca/"
              target="_blank"
              rel="noreferrer"
              className="text-secondary"
            >
              {" "}
              Scarball
            </a>
            , and a
            <a
              href="https://www.scarbx.ca/"
              target="_blank"
              rel="noreferrer"
              className="text-secondary"
            >
              {" "}
              top-secret music project
            </a>
            . When not online, he is often found at the gym.
          </p>
          <div className="flex justify-center items-center mb-2">
            <Link className="btn kbd " href="/portfolio">
              <span className="font-mada">View Portfolio</span>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <h3 className="font-mada font-bold text-2xl pb-2 text-primary underline decoration-gray-600 underline-offset-8 decoration-4 mb-6 ">
            &nbsp;Skills &nbsp;
          </h3>
        </div>
      </div>
      <div className="md:w-[60rem] md:h-[30rem] flex items-center justify-center mb-10 w-[20rem] h-[40rem] ">
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
