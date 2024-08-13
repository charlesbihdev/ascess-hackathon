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
      <div className="text-black font-bold m-4">
        <h2 className="mb-3">Trending</h2>
        <div className="flex justify-around">
          <div className="bg-[url('/images/story/story102.jpg')] bg-cover bg-center flex flex-col justify-end  h-36 bg-slate-400 w-2/5 rounded-2xl overflow-hidden ">
            <div className="flex bg-white mx-auto gap-1 p-1 m-1 rounded-xl font-normal text-sm ">
              <span className="bg-slate-200 rounded-full w-5 "></span>
              <p>Charles</p>
            </div>
          </div>
          <div className="bg-[url('/images/story/storyy101.jpeg')] bg-cover bg-center flex flex-col justify-end  h-36 bg-slate-400 w-2/5 rounded-2xl overflow-hidden">
            <div className="flex bg-white mx-auto gap-1 p-1 m-1 rounded-xl font-normal text-sm ">
              <span className="bg-slate-200 rounded-full w-5 "></span>
              <p>Aceses</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
