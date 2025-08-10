import { useState, type JSX, type MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../components/sharedComponents/Logo";

type NavItem = {
  name: string;
  path: string;
};

const navLinks: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Properties", path: "/properties" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    toggleMenu();
  };

  const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-White bg-Grey-08 border laptop:py-3.5 md:py-3 md:px-5 laptop:px-6 rounded-lg border-Grey-15"
      : " text-White laptop:py-3.5 md:py-3 border border-Grey-10";

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-Grey-10 opacity-60 z-40"
          onClick={handleOverlayClick}
        />
      )}

      <nav className="fixed top-0 left-0 w-full laptop:h-[99px] md:h-[77px] z-50 flex justify-between items-center laptop:px-pc md:px-laptop px-mobile laptop:py-0 md:py-0 py-5  bg-Grey-10 shadow">
        {/* Logo */}
        <Logo />

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex gap-6 laptop:text-lg items-center absolute left-1/2 transform -translate-x-1/2">
          {navLinks.slice(0, 4).map((link) => (
            <NavLink key={link.path} to={link.path} className={navLinkStyles}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Contact Link (Desktop) */}
        <div className="hidden md:flex">
          <NavLink
            to="/contact"
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "text-White bg-Purple-60 laptop:py-4 laptop:px-6 md:py-3.5 md:px-5  rounded-lg border border-Grey-10 laptop:text-lg"
                : "laptop:text-lg text-White laptop:py-4 laptop:px-6 md:py-3.5 md:px-5 rounded-lg border border-Grey-15"
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="md:hidden flex justify-center items-center w-7 rounded-full cursor-pointer transition-all duration-300"
          onClick={toggleMenu}
        >
          <div className="w-[21px] h-[14px] flex flex-col justify-between items-center">
            <span
              className={`block w-full h-[2px] rounded-full transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[6px] bg-White" : "bg-White"
              }`}
            />
            <span
              className={`block w-full h-[2px] rounded-full transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "bg-White"
              }`}
            />
            <span
              className={`block h-[2px] rounded-full transition-all duration-300 ${
                isMenuOpen
                  ? "rotate-[-45deg] -translate-y-[6px] w-full bg-White"
                  : "w-[54%] self-end bg-White"
              }`}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-Grey-10 z-40 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-[68.58px] flex flex-col items-start">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `w-full p-5 text-White ${
                  isActive ? "border-l-2 border-Purple-75 font-semibold" : ""
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
