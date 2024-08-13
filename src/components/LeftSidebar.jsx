"use client";

import { useState } from "react";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdOutlineEventAvailable } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

const LeftSidebar = ({ className }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleToggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } ${className}`}
    >
      <div className="flex flex-col items-center p-4 border-b">
        <img
          src="/images/avatar/avatar.jpg"
          alt="User Profile"
          width={100}
          height={100}
          className="rounded-full mb-2"
        />
        <h2 className="text-xl font-bold text-black">Forson</h2>
      </div>
      <nav className="mt-5">
        <ul className="space-y-4 px-4">
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
