"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import Theme from "./Theme";
import { cx } from "@/lib/utils";
import Dropdown from "./DropMenu";
import routes from "@/lib/route";



const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 pt-4  z-20 flex h-12 w-full max-w-xl items-center justify-between  bg-gradient-to-b
     from-white via-white text-center dark:from-bgdark dark:via-bgdark  max-sm:px-4"
    >
      <div className="  flex items-center justify-center gap-4 text-sm  max-sm:hidden">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.title}
            className={cx(
              pathname === route.href &&
                "bg-gray-200  transition-all  duration-150 ease-in-out text-gray-600 dark:bg-neutral-700 hover:dark:bg-neutral-700  dark:text-gray-300 backdrop-blur-lg",
              "py-1 px-2 rounded-lg  dark:text-zinc-400 hover:bg-gray-200 hover:dark:bg-zinc-800 text-gray-700"
            )}
          >
            {route.title}
          </Link>
        ))}
      </div>
      <Dropdown />
      <Theme />
    </nav>
  );
};

export default Navbar;
