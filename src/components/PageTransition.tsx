'use client';
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

// Define the props type for the PageTransition component
interface PageTransitionProps {
  children: React.ReactNode; // Type for children (ReactNode handles all types of valid JSX children)
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
      <motion.div 
      initial={{opacity:1}} animate={{opacity:0, transition:{delay:1,duration:0.4, ease:"easeInOut"},}} 
      className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      
      />
     
       {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
