import React, { useRef } from "react";
import { CONTACT_DATA, ContactData } from "../data/Data";
import { motion, useInView } from "framer-motion";

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section id="Contact" className="full-section p-8">
      <motion.div
        ref={ref}
        className="m-auto flex h-full flex-col items-center justify-center gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <AnimateText text={"contact me"} />
        <ContactList contactDataList={CONTACT_DATA} />
      </motion.div>
    </section>
  );
};

type ContactListProps = {
  contactDataList: ContactData[];
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const ContactList: React.FC<ContactListProps> = ({ contactDataList }) => {
  const ContactElement = ({ name, link, icon }: ContactData) => {
    return (
      <motion.a
        id={name}
        href={link}
        className="w-full max-w-32 rounded-3xl border border-stone-800 bg-stone-800/25 p-2 shadow shadow-stone-800/50 backdrop-blur-md sm:max-w-48"
        variants={containerVariants}
      >
        {icon}
      </motion.a>
    );
  };

  return (
    <div className="container flex max-w-4xl flex-wrap items-center justify-center gap-8">
      {contactDataList.map((contact: ContactData) => (
        <ContactElement key={contact.name} {...contact} />
      ))}
    </div>
  );
};

type animateTextProps = {
  text: string;
};

const AnimateText: React.FC<animateTextProps> = ({ text }) => {
  const letters = text.split("");

  return (
    <div className="flex flex-col gap-2 text-center text-white">
      <h1 className="text-center text-6xl italic text-white sm:text-9xl">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={containerVariants}
            className={letter === " " ? "" : "inline-block"}
          >
            {letter}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default Contact;
