import Footer from "@/components/footer";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";



  
const Homepage = () => {
  return  (
    <main className="h-full ">
    <div className="container mx-auto h-full "><div className="flex flex-col xl:flex-row  items-center justify-between xl:pt-8 xl:pb-24">
      {/* pic */}
      <div className=" ">  <div><img src="./profile.jpg" alt="" height={"300px"} width={"350px"} className="border border-spacing-7 rounded-full border-x-amber-400"/></div>
      </div>
      {/* text */}
    <div className="text-center xl:text-right"><span>fronted developer</span>
    <h1 className="h1" >hello I am <br /><span className="text-accent">Bareerah Maheen</span > </h1><p  className="max-w-[500px] mb-8 text-white">
      i am good in designing the web and also have experience to manage the function of website , i have knowledge about ui/ux .</p>
    <div className="space-y-6  xl:space-y-0 xl:space-x-6  flex flex-col xl:flex-row items-center">
    <Button type="submit" className="gap-1  uppercase flex items-center hover:bg-accent hover:text-primary " variant="outline" >
      <span >download resume</span><FiDownload/></Button>
    <div className=" mb-8 xl:mb-0 "> <Socials containerStyles="flex gap-5" iconStyles="w-8 h-8 border border-accent rounded-full flex justify-center item-center 
   text-accent text-base hover:bg-accent hover:text-primary flex items-center hover:transition-all duration-600"/> </div>
    <Button type="submit" className="gap-1  uppercase flex items-center  lg:hidden   hover:bg-accent hover:text-primary" variant="outline" ><span >hire me</span></Button>
    
    </div>
    
    
   </div>
   </div></div>
<br /><br /><br />
<Footer/>
    </main>

  );
};


export default Homepage



