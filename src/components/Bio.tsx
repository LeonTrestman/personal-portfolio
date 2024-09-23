import { BIO_DATA } from "../data/Data";
import myPic from "../assets/myPic.jpg";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";

const Bio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0 });

  return (
    <section
      // className="full-section mx-auto flex max-w-3xl flex-col gap-8 p-4 md:flex-row-reverse md:items-center md:gap-2"
      className="full-section p-8"
      id="Bio"
    >
      <motion.div
        ref={ref}
        className="m-auto flex h-full flex-col items-center justify-center gap-12 md:flex-row-reverse"
      >
        {/* Pic Part */}

        <img
          src={myPic}
          className="size-fit max-w-xs rounded-full shadow-lg shadow-fuchsia-700"
          alt="LeonTrestmanPic"
        />

        {/* text part */}
        <div className="flex flex-col gap-2 text-center text-white">
          <h2>Hey, my name is:</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl">{BIO_DATA.name}</h1>
          <p>
            <AnimatedTitlesProps isVisible={isInView} />
          </p>
          <p className="text-sm">{BIO_DATA.discription}</p>
        </div>
      </motion.div>
    </section>
  );
};

type animatedTitlesProps = {
  isVisible: boolean;
};

const AnimatedTitlesProps = ({ isVisible }: animatedTitlesProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div>test</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Bio;
