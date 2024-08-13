import MusicCards from "@/components/MusicCard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar avatar="/images/avatar/avatar.jpg" />
      <main className="pt-[4.1rem] min-h-screen">
        <Sidebar
          className=" fixed overflow-scroll w-[16rem] overflow-y-auto h-screen max-h-screen pb-8 border"
          // pathname={pathname}
          // showSidebar={showSidebar}
        />
        <article className="flex flex-col justify-between md:ml-[16rem] min-h-[94vh] md:min-h-[95vh] lg:min-h-[88vh]">
          <div className="bg-white overflow-hidden shadow-sm">
            <MusicCards />
          </div>
        </article>
      </main>
    </div>
  );
};

export default page;
