import { BIO_DATA } from "../data/Data";
import myPic from "../assets/myPic.jpg";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./UI/Reveal";

const Bio: React.FC = () => {
  return (
    <section className="full-section p-4 sm:p-8" id="bio">
      <motion.div className="container m-auto flex h-full flex-col items-center justify-center gap-4 md:flex-row-reverse md:gap-2">
        {/* Pic Part */}

        <img
          src={myPic}
          className="size-fit max-w-xs rounded-full shadow-lg shadow-fuchsia-700 lg:max-w-sm"
          alt="LeonTrestmanPic"
        />

        {/* text part */}
        <div className="flex flex-col items-center gap-4 text-white">
          <Reveal>
            <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl">
              <span>
                Hey, I'm {BIO_DATA.name}
                <span className="text-rose-300">.</span>
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <div className="flex w-full items-center justify-center gap-2 text-2xl md:text-3xl lg:text-4xl">
              <span className="whitespace-nowrap">I'm a </span>
              <AnimatedTitles titles={BIO_DATA.titles} />
            </div>
          </Reveal>
          <Reveal>
            <span>{BIO_DATA.discription}</span>
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

  const [titleState, setTitleState] = useState({
    titleIndex: 0,
    displayedTitle: "",
    isDeleting: false,
  });

  const handleTitleUpdate = () => {
    const { titleIndex, displayedTitle, isDeleting } = titleState;

    if (isDeleting) {
      if (displayedTitle.length === 0) {
        setTitleState((prevState) => ({
          ...prevState,
          isDeleting: false,
          titleIndex: (titleIndex + 1) % titles.length,
        }));
      } else {
        setTitleState((prevState) => ({
          ...prevState,
          displayedTitle: titles[titleIndex].substring(
            0,
            displayedTitle.length - 1,
          ),
        }));
      }
    } else {
      if (displayedTitle.length === titles[titleIndex].length) {
        setTimeout(() => {
          setTitleState((prevState) => ({
            ...prevState,
            isDeleting: true,
          }));
        }, DELAY_DELETE);
      } else {
        setTitleState((prevState) => ({
          ...prevState,
          displayedTitle: titles[titleIndex].substring(
            0,
            displayedTitle.length + 1,
          ),
        }));
      }
    }
  };

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(handleTitleUpdate, DELAY_KEYSTROKE);
    return () => clearTimeout(timeout);
  }, [isInView, titleState]);

  return (
    <div ref={ref} className="relative font-sans font-extrabold text-rose-300">
      <motion.div
        className="inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {titleState.displayedTitle}
      </motion.div>

      {/* cursor */}
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
