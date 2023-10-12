import Link from "next/link";
import { toast } from "react-hot-toast";
import { Separator } from "./ui/separator";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProjectCard from "./ProjectCard";
export default function Hero({ projects }: any) {
  console.log(projects);
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
    <div className=" bg-background min-h-screen w-screen md:w-screen flex flex-col items-center mt-12">
      <div className="flex flex-col justify-between items-start w-full md:w-[35rem] px-4 md:px-0">
        <div className="flex justify-between items-start mb-6 w-full">
          <div className="space-y-1">
            <div className="my-2 flex h-5 items-center space-x-2 px-2">
              <h1 className="text-xl md:text-3xl leading-none text-primary">
                richard zhang
              </h1>
              <h2 className="text-sm text-muted-foreground ">
                software engineer
              </h2>
            </div>
            <div className=" my-2 flex h-5 items-center space-x-2 px-2">
              <div className="">
                <Button
                  variant="link"
                  className="px-0 text-xs md:text-sm"
                  onClick={copyEmail}
                >
                  @r29zhang@uwaterloo.ca
                </Button>
              </div>
              <Separator orientation="vertical" />
              <div className="">
                <Button
                  asChild
                  variant="link"
                  className="px-0 text-xs md:text-sm"
                >
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
                <Button
                  asChild
                  variant="link"
                  className="px-0 text-xs md:text-sm"
                >
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
          <div className="md:pl-4">
            <ModeToggle />
          </div>
        </div>
        <div className="w-full px-2">
          <Accordion
            type="single"
            collapsible
            className=" md:px-0"
            defaultValue="about"
          >
            <AccordionItem value="about">
              <AccordionTrigger>about</AccordionTrigger>
              <AccordionContent>
                Richard is a software engineer based in Toronto studying Systems
                Design Engineering at the{" "}
                <span className="text-muted-foreground">
                  University of Waterloo.{" "}
                </span>
                He is working as a Fullstack Engineer at{" "}
                <a
                  href="https://www.getjitto.com/"
                  className=" text-muted-foreground underline"
                  target="_blank"
                  rel="norefferer"
                >
                  Jitto
                </a>
                ,&nbsp;where he is mainly building infrastructure and their
                serverless backend on AWS. He uses things like node.js,
                flask/django, alot of AWS and is learning Rust 🦀. From his
                current job, he&apos;s learned that he loves working at startups
                and is currently
                <a className="text-muted-foreground underline">
                  &nbsp;looking for co-op opportunities for Summer 2024
                </a>
                .&nbsp;Aside from work, Richard is addicted to Muay Thai and is
                learning how to cook. He is also working towards his AWS
                certified developer certification.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="portfolio">
              <AccordionTrigger>portfolio</AccordionTrigger>
              <AccordionContent>
                {
                  <div className="grid grid-cols-1 gap-4 ">
                    {projects.map((project: any) => (
                      <ProjectCard project={project} key={project._id} />
                    ))}
                  </div>
                }
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="resume">
              <Link href="/Resume.pdf" rel="noreferrer" target="_blank">
                <AccordionTrigger noExpand={true}>resume</AccordionTrigger>
              </Link>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
