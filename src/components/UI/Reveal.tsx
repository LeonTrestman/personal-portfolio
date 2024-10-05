import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
};

const hoverVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,

    y: 0,
  },
};

const slideVariants = {
  hidden: { left: 0 },
  visible: { left: "100%" },
};

const SLIDE_DURATION = 0.5;

export const Reveal: React.FC<RevealProps> = ({ children }) => {
  return (
    <div className="relative w-fit">
      <motion.div
        variants={hoverVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: SLIDE_DURATION }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute bottom-px left-0 right-0 top-px z-20 bg-rose-300/25"
        variants={slideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: SLIDE_DURATION,
          ease: "easeIn",
        }}
      />
    </div>
  );
};

export default Reveal;
