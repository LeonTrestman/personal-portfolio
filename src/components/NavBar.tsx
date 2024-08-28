import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (selected: string) => {
    const element = document.getElementById(selected);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-white">MyWebsite</div>
        <button className="text-xl text-white md:hidden" onClick={toggleNavBar}>
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      <ul
        className={`md:flex md:items-center md:space-x-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="mt-2 md:mt-0">
          <button
            onClick={() => handleLinkClick("home")}
            className="text-white"
          >
            Home
          </button>
        </li>
        <li className="mt-2 md:mt-0">
          <button
            onClick={() => handleLinkClick("about")}
            className="text-white"
          >
            About
          </button>
        </li>
        <li className="mt-2 md:mt-0">
          <button
            onClick={() => handleLinkClick("Person")}
            className="text-white"
          >
            Person
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
