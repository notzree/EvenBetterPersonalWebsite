import Image from "next/image"
import {AiOutlineGithub} from "react-icons/ai";
import { urlFor } from "@/clientLib/sanityClient"
export default function PortfolioHero({projects}:any){
    
    
    return(
        <div className="bg-neutral  w-screen flex flex-col ">
        <div className="flex flex-col justify-around items-center md:w-screen">
            {
                projects?.map((item:any)=>(
                    <div key = {item._id} className = "md:w-[60rem] my-6 py-2 w-auto md:mx-0 mx-14 ">
                        <div className="flex md:flex-row flex-col justify-evenly items-center md:gap-14 ">
                        <div className="relative overflow-hidden md:mx-0 mx-14 ">
                            <Image width={700} height= {0} src={urlFor(item.image[0]).url()} 
                            loader={() => urlFor(item.image[0]).url()} 
                            alt = "Project Image"
                            className="rounded-xl aspect-video object-cover "
                            unoptimized = {true}
                            />

                        </div>
                            <div className="md:w-[60rem] w-[20rem] md:mx-0 mx-14 ">
                                <div className="flex flex-row justify-start items-center gap-2">  <h1 className="text-secondary font-bold text-xl">{item.name}</h1><a href={item.link} className = "text-secondary" target="_blank" rel="noreferrer"><AiOutlineGithub className="scale-125"  /></a></div>
                            <div className="flex flex-row gap-2">
                            <p className="text-primary md:text-sm   text-xs">
                            {item.skills}
                            </p>
                            </div>
                            <div className=" py-2 flex justify-center items-start h-full">
                            <p className="text-primary">{item.description}</p>
                            </div>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
        </div>
    )
}