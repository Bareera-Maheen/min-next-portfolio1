import Link from "next/link";
import { Button } from "@/components/ui/button"
import Navbar from "./navbar";

const Head = () => {
  
 
  return (
    <header className="py-8 xl:py-12 text-white">
<div className="container mx-auto flex justify-between items-center  ">
<Link href="/">
<h1 className="text-3xl font-semibold"
  >Portfolio <span className="text-accent" >.</span></h1></Link>

<div className="hidden xl:flex items-center gap-8">
  <Navbar/>
 <Link href="/contact"><Button className="bg-accent-hover">hire me</Button></Link></div>





 {/* mobile-nav */}
<div className="xl:hidden">bb</div>




</div>

   
    </header>
  );
};

export default Head;