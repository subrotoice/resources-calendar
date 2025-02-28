"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface MenuItemsProps {
  item: {
    title: string;
    icon: string;
    link: string;
    subMenu?: { title: string; icon: string; link: string }[]; // Optional array of submenu items
  };
}

const MenuItems = ({ item }: MenuItemsProps) => {
  const [isOpen, setIsOpen] = useState(false); // State with type boolean

  return (
    <ul>
      <li>
        <Link
          className="cursor-pointer items-center"
          onClick={() => item.subMenu && setIsOpen(!isOpen)}
          href={item.subMenu ? "#" : item.link}
        >
          <div className="flex cursor-pointer border-b items-center py-2 text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0 px-2">
            <span className="inline-flex justify-center items-center mr-2 h-6 flex-none text-green-800">
              <svg
                viewBox="0 0 24 24"
                width={18}
                height={18}
                className="inline-block"
              >
                <path
                  fill="currentColor"
                  d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"
                />
              </svg>
            </span>
            <span className="grow text-ellipsis line-clamp-1 pr-12">
              {item.title}
            </span>
            {item.subMenu && (
              <span className="text-sm font-thin pr-3">
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            )}
          </div>
        </Link>
        {isOpen && item.subMenu && (
          <ul className="bg-gray-100/75 block dark:bg-slate-800/50">
            {item.subMenu.map((subItem, index) => (
              <div key={index} className="sidebar-subitem">
                <li>
                  <Link
                    href={subItem.link}
                    className="cursor-pointer items-center"
                  >
                    <div className="flex cursor-pointer border-b items-center py-2 px-4  text-gray-500 hover:text-black dark:text-white text-green-800 hover:bg-gray-200 dark:text-slate-300 dark:hover:text-white mt-0">
                      <span className="inline-flex justify-center items-center w-10 h-6 flex-none text-green-800">
                        <svg
                          viewBox="0 0 24 24"
                          width={18}
                          height={18}
                          className="inline-block"
                        >
                          <path
                            fill="currentColor"
                            d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"
                          />
                        </svg>
                      </span>
                      <span className="grow text-ellipsis line-clamp-1 pr-12">
                        {subItem.title}
                      </span>
                    </div>
                  </Link>
                </li>
              </div>
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default MenuItems;
