"use client";

import { useState } from "react";
import Link from "next/link";
import { MdOutlineDashboard } from "react-icons/md";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdOutlineEventAvailable } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { FiBookOpen } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";

const LeftSidebar = ({ className, showLeftSidebar, setShowLeftSidebar }) => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

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

      <div className="flex flex-col items-center mt-4">
        <img
          src="/images/avatar/avatar.jpg"
          alt="User Profile"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h2 className="text-xl font-bold text-black">Donkor Nana Acamoah</h2>
            
        <p className="text-gray-500 text-sm -mt-6">
          nadonkor3121@st.umat.edu.gh
        </p>
          
      </div>
      <div className="h-full pb-5 px-3 bg-white">
        <ul className="space-y-2 mb-5">
          <li>
            <Link
              href="/"
              className={`font-bold p-2 rounded-lg text-black hover:bg-gray-800 hover:text-white transition-colors flex items-center 
                ${pathname == "/" ? "bg-gray-400 !text-white" : ""} 
                `}
            >
              <MdOutlineDashboard size={20} className="mr-2" />
              Feeds
            </Link>
          </li>
          <li>
            <Link
              href="/findbymap"
              className={`font-bold mb-14 p-2 rounded-lg text-black hover:bg-gray-800 hover:text-white transition-colors flex items-center

                ${pathname == "/findbymap" ? "bg-gray-400 !text-white" : ""} 

              `}
            >
              <FaMapMarkerAlt size={20} className="mr-2" />
              Find by map
            </Link>
          </li>
          <li>
            <Link href="/reportmissing">
              <button className="font-bold p-2 rounded-lg text-black bg-red-500 hover:bg-red-500 hover:text-white transition-colors flex items-center w-full">
                Report Lost Items
              </button>
            </Link>
          </li>
          <li>
            <Link href="/reportfound">
              <button className="font-bold p-2 rounded-lg text-black bg-blue-500 hover:bg-blue-500 hover:text-white transition-colors flex items-center w-full">
                Report Found Items
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default LeftSidebar;
