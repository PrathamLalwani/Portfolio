import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-scroll";
const NavBar: React.FC = () => {
  const NavItems = ["Home", "Projects", "Experience", "Contact"];
  const [showNavItems, setShowNavItems] = useState(false);
  const toggleShowNavItems = () => {
    setShowNavItems((prev) => !prev);
  };
  const [darkMode, setDarkMode] = useState(true);

  const onDarkModeHandler = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "");
  }, [darkMode]);

  useEffect(() => {
    if (window.innerWidth > 768) setShowNavItems(false);
  }, []);

  // on click of the menu icon, show the nav items
  const onMenuClickHandler = () => {
    if (window.innerWidth < 768) {
      toggleShowNavItems();
    }
  };

  return (
    <nav className=" sticky top-0 z-[1] flex h-20  w-full items-center justify-between bg-background p-1 px-7 shadow-md shadow-background md:p-5 md:px-12">
      <HiMenuAlt4
        onClick={onMenuClickHandler}
        className="mr-2 inline-block min-h-[24px] min-w-[24px] flex-grow-0 sm:hidden"
      />
      <ul
        className={`absolute ${
          showNavItems
            ? "left-0 top-0 flex items-center bg-background/80 p-10 text-2xl"
            : "hidden"
        }  z-10 mt-20  h-[calc(100vh-5rem)] w-full flex-col justify-around transition-all sm:relative sm:m-0 sm:flex sm:h-full sm:flex-row sm:justify-start`}
      >
        {NavItems.map((item) => (
          <Link
            offset={-500}
            duration={100}
            smooth={true}
            spy={true}
            to={`${item}`}
            activeClass="link-active"
            className="relative mr-5 flex w-fit items-center justify-center"
            key={item}
          >
            <li className="  font-bold md:text-lg">
              <h1 className="link" onClick={onMenuClickHandler}>
                {item}
              </h1>
            </li>
          </Link>
        ))}
      </ul>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={onDarkModeHandler}
            className={`cursor-pointer text-2xl `}
          />
        </li>
        <li>
          <div
            className={`ml-8 rounded-xl bg-gradient-to-br from-primary-500 to-accent-300 px-4 py-2 text-text `}
          >
            <a href="src/assets/Pratham_Lalwani_Resume.pdf" target="_blank">
              Resume
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
