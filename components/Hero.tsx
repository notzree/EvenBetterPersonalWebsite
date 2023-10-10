import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { Separator } from "./ui/separator";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";
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
    <div className=" bg-backgroundmin-h-screen w-screen flex flex-col items-center px-10 md:px-0 mt-12">
      <div className="flex flex-col justify-between items-start md:w-auto">
        <div className="flex justify-between items-center mb-6 w-full">
          <div className="space-y-1">
            <div className="my-2 flex h-5 items-center space-x-2 ">
              <h1 className="text-2xl md:text-3xl leading-none text-primary">
                richard zhang
              </h1>
              <h2 className="text-md text-muted-foreground ">
                software engineer
              </h2>
            </div>
            <div className=" my-2 flex h-5 items-center space-x-2 ">
              <div className="">
                <Button variant="link" className="px-0" onClick={copyEmail}>
                  @r29zhang@uwaterloo.ca
                </Button>
              </div>
              <Separator orientation="vertical" />
              <div className="">
                <Button asChild variant="link" className="px-0">
                  <Link
                    href="https://www.linkedin.com/in/rz2004/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    @linkedin
                  </Link>
                </Button>
              </div>
              <Separator orientation="vertical" />
              <div className="">
                <Button asChild variant="link" className="px-0">
                  <Link
                    href="https://github.com/notzree"
                    rel="noreferrer"
                    target="_blank"
                  >
                    @github
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="pl-4">
            <ModeToggle />
          </div>
        </div>
        <div className="w-full ">
          <h3 className="font-mada font-bold text-2xl  text-primary underline decoration-muted-foreground  underline-offset-8 decoration-4 mb-6">
            &nbsp;about &nbsp;
          </h3>
          <p className=" text-primary md:w-[36rem] text-md md:text-lg mb-8  text-left">
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
            <a className="text-green-400 underline">
              &nbsp;looking for co-op opportunities for Summer 2024
            </a>
            .&nbsp;Aside from work, Richard is addicted to Muay Thai and is
            learning how to cook. He is also working towards his AWS certified
            developer certification.
          </p>
          <div className="flex justify-center items-center mb-2"></div>
        </div>
      </div>
      <div className="md:w-[70rem] md:h-[30rem] flex items-center justify-center mb-10 w-[20rem] h-[40rem] "></div>
    </div>
  );
}
