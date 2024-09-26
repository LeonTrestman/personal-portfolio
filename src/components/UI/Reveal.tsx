import { useAnimation, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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

export const Reveal: React.FC<RevealProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hoverControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      hoverControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative w-fit">
      <motion.div
        variants={hoverVariants}
        initial="hidden"
        animate={hoverControls}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute bottom-px left-0 right-0 top-px z-20 bg-purple-300/50"
        variants={slideVariants}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.4, ease: "easeIn" }}
      />
    </div>
  );
};

export default Reveal;
