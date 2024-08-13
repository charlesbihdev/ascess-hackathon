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
      <PostWithImage />
    </>
  );
};

export default page;
