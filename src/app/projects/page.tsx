

import Socials1 from "@/components/socials1";



 const Projects = () => {
  return (
   <main>
 {/* <Card image="profile.jpg" /> */}
  {/* Image Card Section */}
  <section  id="features" className="container py-20 mx-auto ">
        <h2 className="mb-10 text-accent text-4xl  font-bold text-center">PROJECTS</h2>
        
        <div className="flex items-center justify-center gap-3 flex-col xl:flex-row ">
          
       
        <div className="flex gap-1 space-x-4 ">
          <div className="p-6 transition-transform transform rounded-xl bg-[#333335]  border-spacing-10 border border-accent-hover shadow-md hover:scale-105 w-60">
          <img src="/images/1.jfif"   height={"150px"} />
          <h2 className="mb-10 text-3xl font-bold text-center">TO DO</h2>
            
            <br />
            <Socials1 containerStyles="flex gap-5" iconStyles="w-8 h-8 border border-accent rounded-full flex justify-center item-center 
   text-accent text-base hover:bg-accent hover:text-primary flex items-center hover:transition-all duration-600"/>
          
          </div>
          
         </div>
         <br />
         <div className="flex justify-center ">
          
       
         <div className="flex gap-1 space-x-4 ">
          <div className="p-6 transition-transform transform rounded-xl bg-[#333335]  border-spacing-10 border border-accent-hover shadow-md hover:scale-105 w-60">
          <img src="/images/5.jfif"  />
          <h2 className="mb-10 text-3xl font-bold text-center">CALCULATOR</h2>
            
           <br/>
            <Socials1 containerStyles="flex gap-5" iconStyles="w-8 h-8 border border-accent rounded-full flex justify-center item-center 
   text-accent text-base hover:bg-accent hover:text-primary flex items-center hover:transition-all duration-600"/>
          
          </div>
          
         </div>
         </div>
         <br /><br />
         
         
         <div className="flex items-center justify-center gap-3  flex-col xl:flex-row ">
          
          
         <div className="flex gap-1 space-x-4 ">
          <div className="p-6 transition-transform transform rounded-xl bg-[#333335]  border-spacing-10 border border-accent-hover shadow-md hover:scale-105 w-60">
          <img src="/images/4.jfif"  />
          <h2 className="mb-10 text-3xl font-bold text-center">TIMER</h2>
            
            <br />
            <Socials1 containerStyles="flex gap-5" iconStyles="w-8 h-8 border border-accent rounded-full flex justify-center item-center 
   text-accent text-base hover:bg-accent hover:text-primary flex items-center hover:transition-all duration-600"/>
          
          </div>
          
         </div>
           <br />
           <div className="flex justify-center  flex-col xl:flex-row">
            
          
           <div className="flex gap-1 space-x-4 ">
          <div className="p-6 transition-transform transform rounded-xl bg-[#333335]  border-spacing-10 border border-accent-hover shadow-md hover:scale-105 w-60">
          <img src="/images/6.jfif"  />
          <h2 className="mb-10 text-3xl font-bold text-center">PORTFOLIO</h2>
            
            <br />
            <Socials1 containerStyles="flex gap-5" iconStyles="w-8 h-8 border border-accent rounded-full flex justify-center item-center 
   text-accent text-base hover:bg-accent hover:text-primary flex items-center hover:transition-all duration-600"/>
          
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
