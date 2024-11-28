
import { motion, AnimatePresence } from "framer-motion";

// Stair animation variant
const StairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Function to reverse the index for delay calculation
const reverseIndex = (index: number): number => {
  const totalSteps = 6; // number of steps
  return totalSteps - index - 1;
};

const Stairs: React.FC = () => {
  return (
    <AnimatePresence>
      {/* Loop through 6 steps */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={StairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-[100px] w-full bg-white relative" // You might want to define a fixed height here
        />
      ))}
    </AnimatePresence>
  );
};

export default Stairs;
