"use client";

import { useState } from "react";
import Link from "next/link";

import { MdOutlineDashboard } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";

import { PiUserListBold } from "react-icons/pi";
import { TbUsers } from "react-icons/tb";
import { LiaPersonBoothSolid } from "react-icons/lia";

import { RiCalendarEventLine } from "react-icons/ri";
import { PiCaretDownBold } from "react-icons/pi";
import { PiCaretUpBold } from "react-icons/pi";

import { MdOutlineEventAvailable } from "react-icons/md";

const RightSidebar = ({ className, showRightSidebar }) => {
  const pathname = "/";
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={` z-0 transition-transform ${
        showRightSidebar ? "translate-x-0" : "translate-x-full"
      } !bg-white xl:translate-x-0 dark:bg-gray-800 ${className}`}
    >
      <div className="h-full py-5 px-3 bg-white dark:bg-gray-800">
        <ul className="space-y-2 mb-5">
          <li>
            <Link
              href="/admin/products"
              className={`flex items-center ml-3 p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                pathname == "/admin/products" ? "bg-gray-100" : ""
              }`}
            >
              <RiAdminLine className="text-xl text-gray-500" />
              <span className="ml-3">Music</span>
            </Link>
          </li>

          <li>
            <Link
              href="/admin/products"
              className={`flex items-center ml-3 p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                pathname == "/admin/products" ? "bg-gray-100" : ""
              }`}
            >
              <RiAdminLine className="text-xl text-gray-500" />
              <span className="ml-3">Reels</span>
            </Link>
          </li>

          <li>
            <Link
              href="/admin/products"
              className={`flex items-center ml-3 p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
                pathname == "/admin/products" ? "bg-gray-100" : ""
              }`}
            >
              <RiAdminLine className="text-xl text-gray-500" />
              <span className="ml-3">Gaming</span>
            </Link>
          </li>
        </ul>

        <hr />

        <ul className="mt-5">
          <p className="font-extrabold text-base">EVENTS</p>

          <li>
            <button
              type="button"
              className="flex items-center ml-3 p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-sales"
              data-collapse-toggle="dropdown-sales"
              onClick={() => setIsOpen(!isOpen)}
            >
              <RiCalendarEventLine className="text-xl text-gray-500" />
              <span className="flex-1 ml-3 text-sm text-left whitespace-nowrap">
                Choose Event
              </span>
              {!isOpen ? (
                <PiCaretDownBold className="mr-6" />
              ) : (
                <PiCaretUpBold className="mr-6" />
              )}
            </button>

            <ul className={`${isOpen ? "block" : "hidden"} py-2 space-y-2`}>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <MdOutlineEventAvailable className="text-xl text-gray-500" />
                  <span className="ml-3 text-sm ">Event 1</span>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 pl-11 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <MdOutlineEventAvailable className="text-xl text-gray-500" />
                  <span className="ml-3 text-sm font-base">Event 2</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;
