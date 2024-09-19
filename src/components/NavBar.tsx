import { useState } from "react";
import { NAVIGATION_LINKS } from "../data/Data";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (selected: string) => {
    const element = document.getElementById(selected);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 z-20 m-2 max-w-full rounded-full p-2">
      {/* Desktop view */}
      <div className="container m-auto hidden items-center rounded-xl border border-stone-700 shadow shadow-stone-800 backdrop-blur-md md:flex md:flex-col">
        <ul className="flex w-full justify-evenly gap-2 text-white">
          <h1 className="p-2 text-xl font-bold text-white">Leon Trestman</h1>
          {NAVIGATION_LINKS.map((link) => (
            <li
              key={link}
              className="flex rounded-full p-2 hover:bg-fuchsia-500"
            >
              <button
                onClick={() => handleLinkClick(link)}
                className="text-white"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile view */}

      <div className="z-20 flex flex-col items-center rounded-xl border border-stone-700 p-2 shadow shadow-stone-800 backdrop-blur-md md:hidden">
        <div className="flex w-full justify-between">
          <h1 className="text-xl font-bold text-white">Leon Trestman</h1>
          <button className="text-xl text-white" onClick={toggleNavBar}>
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        {isOpen &&
          NAVIGATION_LINKS.map((link) => (
            <ul>
              <li
                key={link}
                className="flex rounded-full p-2 hover:bg-fuchsia-500"
              >
                <button
                  onClick={() => handleLinkClick(link)}
                  className="text-white"
                >
                  {link}
                </button>
              </li>
            </ul>
          ))}
      </div>
    </nav>
  );
};

export default NavBar;
