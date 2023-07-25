import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { client } from "@/clientLib/sanityClient";
import PortfolioHero from "@/components/PortfolioHero";
import { Redis } from '@upstash/redis'
let redis = Redis.fromEnv();

export default function Home({projects}:any){
    
    return(
        <main className='bg-neutral w-screen h-screen overflow-x-hidden'>
            <NavBar/>
            <PortfolioHero projects = {projects}/>
            <Footer/>
      </main>
    )
}

export async function getStaticProps(){
    
    const cache:string = await redis.get('projects') || "";
    if(cache != ""){
        return{
            props:{
                projects: JSON.parse(JSON.stringify(cache))
            }
        }
    } else{
        const query = '*[_type =="Project"]| order(order asc)';
        const projects = await client.fetch(query);
        await redis.set('projects', JSON.stringify(projects), {ex:10000});
        return{
            props:{
                projects: projects
            }
        }
    }
}