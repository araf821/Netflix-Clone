import NavbarItem from "./NavbarItem";
import { BsChevronDown } from "react-icons/bs";
import DropDownMenu from "./DropDownMenu";
import { useCallback, useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setShowMenu((currentVal => !currentVal));
  }, []);

  return (
    <nav className="w-full fixed z-10">
      <div
        className="
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items-center
            transition
            duration-500
            bg-zinc-900/90
        "
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
          <BsChevronDown className="text-white" />
          <DropDownMenu visible={showMenu} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
