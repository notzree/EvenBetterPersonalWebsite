import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import { client } from "@/clientLib/sanityClient";
import PortfolioHero from "@/components/PortfolioHero";
export default function Home({projects}:any){

    return(
        <main className='bg-neutral w-screen h-screen overflow-x-hidden'>
            <NavBar/>
            <PortfolioHero projects = {projects}/>
            <Footer/>
      </main>
    )
}

export async function getServerSideProps(){
    const query = '*[_type =="Project"]| order(order asc)';
    const projects = await client.fetch(query);
    return{
        props:{
            projects: projects
        }
    }
}