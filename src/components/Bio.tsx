import { BIO_DATA } from "../data/Data";
import myPic from "../assets/myPic.jpg";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./UI/Reveal";

const Bio: React.FC = () => {
  return (
    <section className="full-section p-4 sm:p-8" id="Bio">
      <motion.div className="container m-auto flex h-full flex-col items-center justify-center gap-8 md:flex-row-reverse">
        {/* Pic Part */}

        <img
          src={myPic}
          className="size-fit max-w-xs rounded-full shadow-lg shadow-fuchsia-700 sm:max-w-sm"
          alt="LeonTrestmanPic"
        />

        {/* text part */}
        <div className="flex flex-col items-center gap-4 text-white">
          <Reveal>
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              <span>
                Hey, I'm {BIO_DATA.name}
                <span className="text-rose-300">.</span>
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <div className="flex w-full items-center justify-center gap-2 text-2xl sm:text-3xl md:text-4xl">
              <span className="">I'm a </span>
              <AnimatedTitles titles={BIO_DATA.titles} />
            </div>
          </Reveal>
          <Reveal>
            <span className="">{BIO_DATA.discription}</span>
          </Reveal>
        </div>
      </motion.div>
    </section>
  );
};
const DELAY_KEYSTROKE = 150;
const DELAY_DELETE = 3000;

type AnimatedTitlesProps = {
  titles: string[];
};

const AnimatedTitles: React.FC<AnimatedTitlesProps> = ({ titles }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    let timeout: number | undefined;

    //Writing title
    if (!isDeleting) {
      //not finished writing
      if (displayedTitle.length < titles[titleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedTitle(
            titles[titleIndex].substring(0, displayedTitle.length + 1),
          );
        }, DELAY_KEYSTROKE);
      }
      //finished writing full title
      else {
        timeout = setTimeout(() => setIsDeleting(true), DELAY_DELETE);
      }
    }
    //Deleting title
    else {
      //finished deleting so go to next title
      if (displayedTitle.length == 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
      //continue deleting
      else {
        timeout = setTimeout(() => {
          setDisplayedTitle(
            titles[titleIndex].substring(0, displayedTitle.length - 1),
          );
        }, DELAY_KEYSTROKE);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedTitle, isDeleting, titleIndex, titles, isInView]);

  return (
    <div ref={ref} className="relative font-sans font-extrabold text-rose-300">
      <motion.div
        className="inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayedTitle}
      </motion.div>

      <motion.span
        className="ml-1 inline-block h-4 w-1 bg-rose-300 sm:h-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

export default Bio;
