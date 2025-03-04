"use client";
import {BsArrowDownRight} from "react-icons/bs"

import Link from "next/link";
import {motion} from "framer-motion";
const services=[

{
  num:1,
  title:"Web Devlopment",
  description:"Building functional and dynamic websites tailored to your needs.",
  href:""

},
{
  num:2,
  title:"ui/ux design",
  description:"Crafting intuitive and visually appealing user interfaces and experiences.",
  href:""

},

{
  num:3,
  title:"logo design(canva)",
  description:"Creating professional and creative logos to represent your brand",
  href:""

},

{
  num:4,
  title:"SEO",
  description:"Optimizing websites to improve search engine rankings and drive organic traffic.",
  href:""

}



]

const Services = () => {
  return (
    <section className="min-h[800vh] flex flex-col last:justify-center py-12 xl:py-0">
    <div className="container mx-auto ">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]" initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4,ease:'easeIn'},}}
      >
        {services.map((service, index)=>{
          return( <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
<div className="w-full flex justify-between items-center">
            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all  duration-500  ">{service.num}</div>
            <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-hover duration-500 flex justify-center  items-center hover:-rotate-45 transition-all">
            <BsArrowDownRight  className="text-primary text-3xl "      />
            </Link>
          </div>
          <h2 className=" text-[42px]  leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
          <p className="text-white/60 ">
            {service.description}
          </p>
<div className="border-b border-white/20  w-full "></div>
          </div>



);
        
        })}
      </motion.div>
    
    </div>
    </section>
  )
}

export default Services
