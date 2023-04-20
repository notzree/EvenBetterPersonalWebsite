import Head from "next/head";
import { Inter } from "next/font/google";
// import Hero from '@/components/Hero'
import NavBar from "@/components/NavBar";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Richard Zhang</title>
        <meta name="description" content="Richard Zhang's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-neutral w-screen h-screen overflow-x-hidden">
        <NavBar />
        <Hero />
        <Footer />
      </main>
    </>
  );
}
