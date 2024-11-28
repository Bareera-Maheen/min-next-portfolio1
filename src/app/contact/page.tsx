"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
 
const Contact = () => {
  return (
    <main className="flex justify-center items-center ">
    
    <div className="gap-1  justify-center text-accent font-bold  hover:zoom-in-150  hover:text-lg hover:text-yellow-400 uppercase flex items-center bg-[#333335]  border border-spacing-12 hover:shadow-2xl h-[500px] w-[400px] rounded-full border-x-amber-400 lg:h-[700px] lg:w-[500px]">
    
      <form action="">

        <div>
      <p>First name</p>
        <input type="text"  className="text-primary  font-medium"/>
        <label htmlFor="text" ></label>
        <p>Last name</p>
        <input type="text"  className="text-primary  font-medium" />
        <label htmlFor="text"></label>
        <p>Email</p>
        <input type="email"   className="text-primary  font-medium"/>
        <label htmlFor="email"></label>
        <p>Phone num</p>
        <input type="phone"  className="text-primary  font-medium"/>
        <label htmlFor="num"></label>
      <div><p >your message</p>
        <Textarea   className="text-primary  font-medium bg-slate-50" />
        <label htmlFor="text"></label></div>
        
        </div>
        {/* <div className=" hidden">
      <p>First name</p>
        <input type="text"  className="text-primary  font-medium"/>
        <label htmlFor="text" ></label>
        <p>Last name</p>
        <input type="text"  className="text-primary  font-medium" />
        <label htmlFor="text"></label>
        <p>Email</p>
        <input type="email"   className="text-primary  font-medium"/>
        <label htmlFor="email"></label>
        <p>Phone num</p>
        <input type="phone"  className="text-primary  font-medium"/>
        <label htmlFor="num"></label>
      
        <p >your message</p>
        <input type="text"  />
        <label htmlFor="text"></label>
        </div> */}
      <br />
        <Button type="submit" className="gap-1  uppercase flex items-center   hover:bg-accent-hover hover:text-primary" variant="outline" > <Link
         href="/"  >submit</Link> </Button>
   
      </form>
   
    </div>
    </main>
  )
}

export default Contact
