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
    <nav className="container fixed left-0 right-0 z-20 max-w-4xl rounded-full p-4 lg:mx-auto">
      {/* Desktop view */}
      <DesktopMenu handleLinkClick={handleLinkClick} />
      {/* Mobile view */}
      <MobileMenu
        handleLinkClick={handleLinkClick}
        isOpen={isOpen}
        toggleNavBar={toggleNavBar}
      />
    </nav>
  );
});

type DesktopMenuProps = {
  handleLinkClick: (selected: string) => void;
};

const DesktopMenu: React.FC<DesktopMenuProps> = memo(({ handleLinkClick }) => {
  return (
    <div className="container m-auto hidden rounded-xl border border-stone-700 shadow shadow-stone-800 backdrop-blur-md md:flex md:flex-col">
      <ul className="flex w-full items-center justify-evenly gap-2 text-white">
        <NavlinkHeader />
        {NAVIGATION_LINKS.map((link) => (
          <NavLink key={link} link={link} onClick={handleLinkClick} />
        ))}
      </ul>
    </div>
  );
});

type MobileMenuProps = {
  handleLinkClick: (selected: string) => void;
  isOpen: boolean;
  toggleNavBar: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = memo(
  ({ handleLinkClick, isOpen, toggleNavBar }) => {
    return (
      <div className="z-20 flex flex-col items-center rounded-xl border border-stone-700 p-2 shadow shadow-stone-800 backdrop-blur-md md:hidden">
        <div className="flex w-full justify-between">
          <NavlinkHeader />
          <button className="text-xl text-white" onClick={toggleNavBar}>
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
        {isOpen && (
          <ul className="w-fit">
            {NAVIGATION_LINKS.map((link) => (
              <NavLink key={link} link={link} onClick={handleLinkClick} />
            ))}
          </ul>
        )}
      </div>
    );
  },
);

const NavlinkHeader: React.FC = memo(() => {
  return (
    <h1 className="p-2 text-xl font-bold text-white">
      Leon Trestman <span className="text-rose-300">.</span>
    </h1>
  );
});

type NavLinkProps = {
  link: string;
  onClick: (selected: string) => void;
};

const NavLink: React.FC<NavLinkProps> = memo(({ link, onClick }) => {
  return (
    <li className="rounded-full p-2 text-center hover:bg-fuchsia-500">
      <button onClick={() => onClick(link)} className="capitalize text-white">
        {link}
      </button>
    </li>
  );
});

export default NavBar;
