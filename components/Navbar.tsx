import NavbarItem from "./NavbarItem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import DropDownMenu from "./DropDownMenu";
import { useCallback, useEffect, useState } from "react";
import AccountDropDown from "./AccountDropDown";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setShowMenu((currentVal) => !currentVal);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((currentVal) => !currentVal);
  }, []);

  return (
    <nav className="w-full fixed z-10">
      <div
        className={`
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            ${showBackground ? "bg-zinc-900/90" : ""}
        `}
      >
        <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />
        <div
          className="
            flex-row
            ml-8
            gap-7
            hidden
            lg:flex

        "
        >
          <NavbarItem label="Home" />
          <NavbarItem label="Series" />
          <NavbarItem label="Movies" />
          <NavbarItem label="New & Popular" />
          <NavbarItem label="My List" />
          <NavbarItem label="Browse By Languages" />
        </div>
        <div
          className="
            lg:hidden
            flex
            flex-row
            items-center
            gap-2
            ml-8
            cursor-pointer
            relative
        "
          onClick={toggleMenu}
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMenu ? "rotate-180" : "rotate-0"
            } `}
          />
          <DropDownMenu visible={showMenu} />
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-white cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-200 hover:text-white cursor-pointer transition">
            <BsBell />
          </div>

          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/red-profile.png" alt="profile" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              } `}
            />
            <AccountDropDown visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
