import Stat from "./Stat";
export default function Hero() {
  return (
    <div className="bg-neutral min-h-screen w-screen flex flex-col items-center ">
      <div className="flex flex-col justify-center items-center md:w-96">

        <div className="flex justify-evenly items-center mb-10">
          <div className="md:w-80">
            <h1 className="text-primary text-5xl pb-2">Richard Zhang</h1>
            <h3 className="text-violet-300 pt-2">
              Software Engineer / Fullstack Developer
            </h3>
          </div>
          <div className="avatar pl-10">
            <div className="w-24 md:w-32 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src="https://cdn141.picsart.com/360612094067201.jpg" />
            </div>
          </div>
        </div>
        <div className="w-full ">
            <h3 className="font-bold text-2xl pb-2">
            Work
            </h3>

            <p>
            Richard is Studying Systems Design Engineering at 
            The university of Waterloo...   
            </p>
        </div>
      </div>
    </div>
  );
}
