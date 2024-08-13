"use client";

import MusicCards from "@/components/MusicCard";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";
import LeftSidebar from "@/components/LeftSidebar";
import React from "react";
import Post from "@/components/Post";
import PostWithImage from "./PostWithImage";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* <Post /> */}
      <ul className="flex justify-end items-center space-x-2 mb-4 list-none">
        <Link href="/report">
          <button className="font-bold p-1 rounded-lg text-black border border-red-500 hover:bg-red-500 hover:text-white transition-colors flex items-center">
            Lost items
          </button>
        </Link>
        <Link href="/report">
          <button className="font-bold p-1 rounded-lg text-black border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors flex items-center">
            Found items
          </button>
        </Link>
      </ul>

      <PostWithImage />
    </>
  );
};

export default page;
