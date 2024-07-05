import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants/index";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex items-center justify-center bg-gray">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <div className="flex flex-1  justify-center max-sm:hidden">
          {navLists.map((navItem, index) => (
            <div
              key={index}
              className="cursor-pointer px-5 text-sm text-gray hover:text-white transition-all"
            >
              {navItem}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img src={searchImg} alt="search" with={18} height={18} />
          <img src={bagImg} alt="bag" with={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
