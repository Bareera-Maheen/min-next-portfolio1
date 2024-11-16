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
      <motion.div key={pathname}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
