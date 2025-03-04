

import Socials1 from "@/components/socials1";
import Image from "next/image";
import Link from "next/link";




 const Projects = () => {
  return (
   <main>
 
  {/* Image Card Section */}
  <section  id="features" className="container py-20 mx-auto ">
        <h2 className="mb-10 text-accent text-4xl  font-bold text-center">PROJECTS</h2>
        
        <div className="flex items-center justify-center gap-3 flex-col xl:flex-row ">
          
       
        <div className="flex gap-1 space-x-4 ">
          <div className="p-6 transition-transform transform rounded-xl bg-[#333335]  border-spacing-10 border border-accent-hover shadow-md hover:scale-105 w-60">
          <Image src="/images/3RD.jpg"   alt="first" height="300" width="300" />
          <h2 className="mb-10 text-3xl font-bold text-center"> <Link href="https://main-capstone-project-q-2.vercel.app/">E-COMERCE WEBSITE</Link></h2>
            
            <br />
               
          </div>
          
         </div>
         <br />
         <div className="flex justify-center ">
          
       
         <div className="flex gap-1 space-x-4 ">
          <div className="p-6 transition-transform transform rounded-xl bg-[#333335]  border-spacing-10 border border-accent-hover shadow-md hover:scale-105 w-60">
          <Image src="/images/blog.jpeg"  alt="2nd" height="300" width="300"/>
          <h2 className="mb-10 text-3xl font-bold text-center"><Link href="https://main-capstone-project-q-2.vercel.app/">BLOG POST WEBSITE</Link></h2>
            
           <br/>
           
          </div>
          
         </div>
         </div>
         <br /><br />
         
         
         <div className="flex items-center justify-center gap-3  flex-col xl:flex-row ">
          
          
         <div className="flex gap-1 space-x-4 ">
          <div className="p-6 transition-transform transform rounded-xl bg-[#333335]  border-spacing-10 border border-accent-hover shadow-md hover:scale-105 w-60">
          <Image src="/images/2.webp"  alt="3rd"height="300" width="300" />
          <h2 className="mb-10 text-3xl font-bold text-center"><Link href="https://github001-static.vercel.app/"></Link>PORTFOLIO (HTML,CSS,JS )</h2>
            
            <br />
               
          </div>
          
         </div>
           <br />
           <div className="flex justify-center  flex-col xl:flex-row">
            
          
           <div className="flex gap-1 space-x-4 ">
          <div className="p-6 transition-transform transform rounded-xl bg-[#333335]  border-spacing-10 border border-accent-hover shadow-md hover:scale-105 w-60">
            
          <Image src="/images/6.jfif"  alt="4th" height="300" width="300" />
          <h2 className="mb-10 text-3xl font-bold text-center"><Link href="https://min-next-portfolio1-g8n2-q395nata4-bareerah-s-projects.vercel.app/">PORTFOLIO  (NEXT.JS, TAILWIND)</Link></h2>
            
            <br />
               
          </div>
          
         </div>
           </div>

          
           </div>
        
        
          
           
           
            </div>
      </section>

           </main>
  )
 }

 export default Projects
