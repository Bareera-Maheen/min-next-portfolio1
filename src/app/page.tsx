import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
 

  
const Homepage = () => {
  return (
    <div>

      <Button className='bg-slate-600'>Click me </Button>
        
     



 <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>

    </div>
    
  )
}


export default Homepage



