"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      <div key={pathname}>
        {/* Stairs component stays static while transition runs */}
        <div className="h-screen w-screen fixed top-0 left-0 pointer-events-none z-40 flex">
          <Stairs />
        </div>

        {/* Background Fade */}
        <motion.div
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 0.5, // Delay to give time for the page content to load
              duration: 0.6,
              ease: 'easeInOut',
            },
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
