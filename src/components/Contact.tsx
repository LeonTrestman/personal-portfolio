import { CONTACT_DATA, ContactData } from "../data/Data";

const Contact = () => {
  return (
    <section id="Contact">
      {CONTACT_DATA.map((contact) => (
        <ContactElement {...contact} />
      ))}
    </section>
  );
};

const ContactElement = ({ name, link, icon }: ContactData) => {
  return (
    <div>
      <div>{name}</div>
      <div>{link}</div>
      <div>{icon}</div>
    </div>
  );
};

export default Contact;
