import { useState, memo, useCallback } from "react";
import { NAVIGATION_LINKS } from "../data/Data";

const NavBar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback((selected: string) => {
    const element = document.getElementById(selected);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }, []);

  return (
    <nav className="fixed left-0 right-0 z-20 m-2 max-w-full rounded-full p-2">
      {/* Desktop view */}
      <div className="container m-auto hidden items-center rounded-xl border border-stone-700 shadow shadow-stone-800 backdrop-blur-md md:flex md:flex-col">
        <ul className="flex w-full justify-evenly gap-2 text-white">
          <h1 className="p-2 text-xl font-bold text-white">Leon Trestman</h1>
          {NAVIGATION_LINKS.map((link) => (
            <NavLink key={link} link={link} onClick={handleLinkClick} />
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
        {isOpen && (
          <ul className="w-full">
            {NAVIGATION_LINKS.map((link) => (
              <NavLink key={link} link={link} onClick={handleLinkClick} />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
});

type NavLinkProps = {
  link: string;
  onClick: (selected: string) => void;
};

const NavLink: React.FC<NavLinkProps> = memo(({ link, onClick }) => {
  return (
    <li className="flex rounded-full p-2 hover:bg-fuchsia-500">
      <button onClick={() => onClick(link)} className="capitalize text-white">
        {link}
      </button>
    </li>
  );
});

export default NavBar;
