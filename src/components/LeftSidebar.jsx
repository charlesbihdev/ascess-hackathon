"use client";

import { useState } from "react";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdOutlineEventAvailable } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

const LeftSidebar = ({ className, showLeftSidebar, setShowLeftSidebar }) => {
  const pathname = "/";
  const [isOpen, setIsOpen] = useState(true);
  return (
    <aside
      className={`-mt-1 z-40 transition-transform ${
        showLeftSidebar ? "translate-x-0" : "-translate-x-full"
      } !bg-white md:translate-x-0  ${className}`}
    >
      <div className="-me-2 mt-3 flex items-center sm:hidden">
        <button
          onClick={() => setShowLeftSidebar((previousState) => !previousState)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className={!setShowLeftSidebar ? "inline-flex" : "hidden"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={setShowLeftSidebar ? "inline-flex" : "hidden"}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="h-full py-5 px-3 bg-white">
        <ul className="space-y-2 mb-5">
          <li>
            <Link
              href="/feeds"
              className="font-bold p-2 rounded-lg text-black hover:bg-gray-800 hover:text-white transition-colors flex items-center"
            >
              <MdOutlineDashboard size={20} className="mr-2" />
              Feeds
            </Link>
          </li>
          <li>
            <Link
              href="/reels"
              className="font-bold p-2 rounded-lg text-black hover:bg-gray-800 hover:text-white transition-colors flex items-center"
            >
              <MdOutlineEventAvailable size={20} className="mr-2" />
              Reels
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="font-bold  p-2 rounded-lg text-black hover:bg-gray-800 hover:text-white transition-colors flex items-center"
            >
              <RiCalendarEventLine size={20} className="mr-2" />
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="font-bold p-2 rounded-lg text-black hover:bg-gray-800 hover:text-white transition-colors flex items-center"
            >
              <PiUserListBold size={20} className="mr-2" />
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default LeftSidebar;
