"use client"
import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "./icons/MenuIcon";
import routes from "@/lib/route";
import Link from "next/link";

interface DropdownItem {
    label: string;
    href?: string;
    onClick?: () => void;
}



interface DropdownProps {
    triggerIcon?: React.ReactNode;
    menuItems?: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (e: any) => {
        if (e.onClick) {
            e.onClick();
        }
        setIsOpen(false); // Close dropdown after item click
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          // Ensure the clicked element is outside the dropdown
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
          ) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside); // Use mousedown for better accuracy
    
        // Cleanup function to remove listener on unmount
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);


  return (
    <div className="relative inline-block"  ref={dropdownRef}>
      <div
        className="flex cursor-pointer items-center justify-center
       rounded-lg  border border-gray-700 p-2 opacity-80 dark:bg-stone-800 sm:hidden "
        onClick={toggleDropdown}
      >
        <MenuIcon />
      </div>
      {isOpen && (
                <div className="absolute z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-zinc-800" onClick={toggleDropdown}>
                    {routes?.map((item) => (
                        <Link
                            key={item.title} 
                            href={item.href}
                            className="block px-4 py-2 text-left  text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-zinc-700"
                            onClick={(e) => handleLinkClick(e)}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            )}
    </div>
  );
};

export default Dropdown;
