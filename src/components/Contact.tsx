import React from "react";
import { CONTACT_DATA, ContactData } from "../data/Data";
import { motion } from "framer-motion";
import Reveal from "./UI/Reveal";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const elementVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="full-section">
      <div className="container m-auto max-w-4xl">
        <ContactHeader />
        <ContactList contactDataList={CONTACT_DATA} />
      </div>
    </section>
  );
};

const ContactHeader: React.FC = () => (
  <h1 className="mb-12 flex items-center gap-8 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl">
    <div className="flex-1 border-t border-rose-300/50"></div>
    <Reveal>
      <span className="flex-0">
        Contact me
        <span className="text-rose-300">.</span>
      </span>
    </Reveal>
    <div className="flex-1 border-t border-rose-300/50"></div>
  </h1>
);

type ContactListProps = {
  contactDataList: ContactData[];
};
const ContactList: React.FC<ContactListProps> = ({ contactDataList }) => {
  return (
    <motion.div
      className="flex max-w-4xl flex-wrap justify-center gap-12 md:gap-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {contactDataList.map((contact: ContactData) => (
        <ContactElement key={contact.name} {...contact} />
      ))}
    </motion.div>
  );
};

const ContactElement: React.FC<ContactData> = ({ name, link, icon }) => {
  return (
    <motion.a
      id={name}
      href={link}
      className="w-full max-w-32 rounded-3xl border border-stone-800 bg-stone-800/25 p-2 shadow shadow-stone-800/50 backdrop-blur-md sm:max-w-44"
      variants={elementVariants}
    >
      {icon}
    </motion.a>
  );
};
// type animateTextProps = {
//   text: string;
// };
//
// const AnimateText: React.FC<animateTextProps> = ({ text }) => {
//   const letters = text.split("");
//
//   return (
//     <div className="flex flex-col gap-2 text-center text-white">
//       <h1 className="text-center text-6xl italic text-white sm:text-9xl">
//         {letters.map((letter, index) => (
//           <motion.span
//             key={index}
//             variants={containerVariants}
//             className={letter === " " ? "" : "inline-block"}
//           >
//             {letter}
//           </motion.span>
//         ))}
//       </h1>
//     </div>
//   );
// };

export default Contact;
