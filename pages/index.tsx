import Head from "next/head";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import { client } from "@/clientLib/sanityClient";
import { Redis } from "@upstash/redis";
let redis = Redis.fromEnv();
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
// const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

export default function Home({ projects, cache }: any) {
  return (
    <>
      <Head>
        <title>Richard Zhang</title>
        <meta name="description" content="Richard Zhang's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-background w-screen h-screen overflow-x-hidden">
        <Hero projects={projects} />
        <Footer />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const cache: string = (await redis.get("projects")) || "";
  if (cache != "") {
    return {
      props: {
        projects: JSON.parse(JSON.stringify(cache)),
        cache: "hit",
      },
    };
  } else {
    const query = `*[_type =="Project"]{
      name,
      description,
      skills,
      order,
        link,
    }| order(order asc)[0..5]`;
    const projects = await client.fetch(query);
    await redis.set("projects", JSON.stringify(projects), { ex: 10000 });
    return {
      props: {
        projects: projects,
        cache: "miss",
      },
    };
  }
}
