"use client";

import MusicCards from "@/components/MusicCard";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import LeftSidebar from "@/components/LeftSidebar";
import React from "react";
import Post from "@/components/Post";
import PostWithImage from "./PostWithImage";

const page = () => {
  return (
    <>
      {/* <Post /> */}
      <div className="flex justify-end items-center space-x-2 mb-4">
        <li>
          <button
            onClick={() => alert("Report Lost Items clicked")}
            className="font-bold p-1 rounded-lg text-black border border-red-500 hover:bg-red-500 hover:text-white transition-colors flex items-center"
          >
            Lost items
          </button>
        </li>
        <li>
          <button
            onClick={() => alert("Report Found Items clicked")}
            className="font-bold p-1 rounded-lg text-black border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors flex items-center"
          >
            Found items
          </button>
        </li>
      </div>

      <PostWithImage />
    </>
  );
};

export default page;
