"use client";
import React, { JSX, useEffect, useState } from "react";
import Logo from "../globals/logo";
import Link from "next/link";
import { classes } from "@/utils/classes";
import { usePathname } from "next/navigation";
import Icon from "../globals/app-icon";
import ThemeToggle from "../ui/buttons/toggle-theme-button";

const Header = (props: any): JSX.Element => {
  
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const toggleMenu = () => setShowMobileMenu((prevValue) => !prevValue);

  const pathName = usePathname();

  useEffect(() => {
    localStorage.setItem("theme", "system");
  }, []);

  return (
    <header className="w-full min-h-18 sm:h-18 bg-(--primary)">
      <nav className="w-full h-[100%] relative flex flex-col p-4 sm:px-20 sm:flex-row items-start sm:items-center justify-center sm:justify-between">
        <Link
          href="/"
          className="w-16 h-16 sm:w-20 sm:h-20 flex items-center"
          onClick={showMobileMenu ? toggleMenu : () => {}}
        >
          <Logo fillColor="#FFFFFF" width="100%" height="100%" />
        </Link>
        <ul
          className={classes(
            "hidden w-full sm:w-auto sm:flex sm:flex-row items-center justify-center gap-2 sm:gap-6 p-4 sm:p-0 ease-in-out duration-300",
            { "flex flex-col": showMobileMenu },
          )}
        >
          <li
            className={classes(
              "w-full sm:w-auto text-gray-300 relative p-2 inline-block hover:text-gray-50 focus:text-gray-50 text-md font-semibold ease duration-200",
              { "text-gray-50 text-shadow-lg": pathName === "/" },
            )}
          >
            <Link
              href="/"
              className="w-full py-2 sm:py-0 block sm:flex"
              onClick={toggleMenu}
            >
              All Meetups
            </Link>
          </li>
          <li
            className={classes(
              "w-full sm:w-auto text-gray-300 p-2 inline-block hover:text-gray-50 focus:text-gray-50 text-md font-semibold ease duration-200",
              { "text-gray-50 text-shadow-lg": pathName.startsWith("/meetups/new") },
            )}
          >
            <Link
              href="/meetups/new-meetup"
              className="w-full py-2 sm:py-0 block sm:flex"
              onClick={toggleMenu}
            >
              Add New Meetup
            </Link>
          </li>
          <li className="w-full sm:w-auto text-gray-300 p-2 inline-block hover:text-gray-50 focus:text-gray-50 text-md font-semibold ease duration-200">
            <ThemeToggle />
          </li>
        </ul>
        <button
          className="inline-block sm:hidden absolute end-6 top-10 cursor-pointer"
          onClick={toggleMenu}
        >
          <Icon name="menu" className="text-gray-100" strokeWidth={3} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
