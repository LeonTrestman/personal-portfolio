import { BIO_DATA } from "../data/Data";
import myPic from "../assets/myPic.jpg";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./UI/Reveal";

const Bio: React.FC = () => {
  return (
    <section className="full-section" id="bio">
      <div
        id="centerThisDiv"
        className="relative m-auto flex min-h-dvh max-w-4xl flex-col items-center justify-center gap-4 md:flex-row-reverse md:justify-between md:gap-2"
      >
        {/* Pic Part */}

        <img
          src={myPic}
          className="w-full max-w-xs rounded-full shadow-lg shadow-fuchsia-700 lg:max-w-sm"
          alt="LeonTrestmanPic"
        />

        {/* text part */}
        <div className="flex flex-col items-center gap-4 text-white md:absolute md:left-0 md:w-2/3 md:items-start">
          <Reveal>
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
              <span>
                Hey, I'm {BIO_DATA.name}
                <span className="text-rose-300">.</span>
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <div className="flex w-fit gap-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              <span className="whitespace-nowrap">I'm a</span>
              <AnimatedTitles titles={BIO_DATA.titles} />
            </div>
          </Reveal>
          <Reveal>
            <span>{BIO_DATA.discription}</span>
          </Reveal>
        </div>
      </div>
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
        className="ml-1 inline-block h-6 w-1 bg-rose-300"
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
