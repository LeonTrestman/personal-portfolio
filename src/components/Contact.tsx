import { CONTACT_DATA, ContactData } from "../data/Data";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="flex flex-col items-center justify-evenly p-8"
    >
      <h1 className="">Contact</h1>
      <div className="container flex max-w-4xl flex-wrap items-center justify-evenly gap-8">
        {CONTACT_DATA.map((contact) => (
          <ContactElement {...contact} />
        ))}
      </div>
    </section>
  );
};

// TODO: explore motion for animations
const ContactElement = ({ name, link, icon }: ContactData) => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      id={name}
      href={link}
      className="w-full max-w-44 rounded-3xl border border-stone-800 bg-stone-800/25 p-2 shadow shadow-stone-800/50 backdrop-blur-md sm:max-w-48"
    >
      {icon}
    </motion.a>
  );
};

export default Contact;
