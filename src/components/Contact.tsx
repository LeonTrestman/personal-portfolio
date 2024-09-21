import { useRef } from "react";
import { CONTACT_DATA, ContactData } from "../data/Data";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  return (
    <section id="Contact" className="full-section p-8">
      <div className="m-auto flex h-full flex-col items-center justify-center gap-12">
        <h1 className="text-center text-6xl italic text-white sm:text-9xl">
          Contact <br className="inline sm:hidden" /> me:
        </h1>
        <div className="container flex max-w-4xl flex-wrap items-center justify-center gap-8">
          {CONTACT_DATA.map((contact) => (
            <ContactElement key={contact.name} {...contact} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactElement = ({ name, link, icon }: ContactData) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <motion.a
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.5 }}
      transition={{ duration: 0.5 }}
      id={name}
      href={link}
      className="w-full max-w-32 rounded-3xl border border-stone-800 bg-stone-800/25 p-2 shadow shadow-stone-800/50 backdrop-blur-md sm:max-w-48"
    >
      {icon}
    </motion.a>
  );
};

export default Contact;
