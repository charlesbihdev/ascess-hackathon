"use client";

import { useState } from "react";
import Link from "next/link";
import EventCard from "./EventCard";

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
        <h2 className="mb-3">Trending Missing Items</h2>

        <div className="flex justify-around">
          <div className="bg-[url('/images/story/story102.jpg')] bg-cover bg-center flex flex-col justify-end  h-36 bg-slate-400 w-2/5 rounded-2xl overflow-hidden ">
            <div className="flex bg-white mx-auto gap-1 p-1 m-1 rounded-xl font-normal text-sm ">
              <span className="bg-[url('/images/avatar/profile2.jpg')] bg-cover bg-center bg-slate-200 rounded-full w-5 "></span>
              <p>Charles</p>
            </div>
          </div>
          <div className="bg-[url('/images/story/storyy101.jpeg')] bg-cover bg-center flex flex-col justify-end  h-36 bg-slate-400 w-2/5 rounded-2xl overflow-hidden">
            <div className="flex bg-white mx-auto gap-1 p-1 m-1 rounded-xl font-normal text-sm ">
              <span className="bg-[url('/images/avatar/profile1.jpeg')] bg-cover bg-center bg-slate-200 rounded-full w-5 "></span>
              <p>Aceses</p>
            </div>
          </div>
        </div>
        
        <h2 className="my-3">Events</h2>
        <div className="flex flex-col">
          {/* Example 3: Research Paper Presentation */}
          <EventCard
            date="12"
            month="Aug"
            time="2:00 PM"
            eventTitle="ACESES Hackathon"
            address="CL1"
          />
          {/* Example 1: Annual Tech Symposium */}
          <EventCard
            date="15"
            month="Aug"
            time="10:00 AM"
            eventTitle="Tech Symposium 2024"
            address="Mini Auditorium"
          />

          {/* Example 2: Freshers' Orientation */}
          <EventCard
            date="5"
            month="Sept"
            time="9:00 AM"
            eventTitle="Freshers' Orientation 2024"
            address="Main auditorium"
          />
          <EventCard
            date="18"
            month="Nov"
            time="3:00 PM"
            eventTitle="Robotics Club"
            address="LH3"
          />
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
