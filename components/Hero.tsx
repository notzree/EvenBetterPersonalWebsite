import Stat from "./Stat";
export default function Hero() {
  return (
    <div className="bg-neutral mx-10 w-screen h-screen grid grid-cols-3">
      <div className="col-span-2 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-primary">
          Hello, I&apos;m Richard.
        </h1>
        <h1 className="text-5xl font-bold text-primary">
          I&apos;m a Software Engineer.
        </h1>
        <div className="px-10">
        <p className="pt-6 text-primary">
        I&apos;m studying Systems Design Engineering at the University of Waterloo with 
        interests in entrepreneurship and Machine Learning. 
        </p>
        <p className="pt-2 text-primary">
        I&apos;m currently working at EnergyIntell, developing an ETL pipeline to automate data-archival. 
        Most of my work is Fullstack related, but in my free time I enjoy learning about and developing neural networks(Bigram Model using MLP). 
        </p>
        </div>
        
      </div>
      <div className=" col-span-1 bg-slate-400">
        <Stat/>
      </div>
    </div>
  );
}
