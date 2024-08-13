import VideoCard from "@/components/VideoCard";
import React from "react";

const page = () => {
  // Example post object with likes added
  const examplePost = {
    _id: "123",
    caption: "Active Directory video tutorial",
    postedBy: {
      _id: "user123",
      userName: "Charles Bih",
      image: "/images/story/story102.jpg",
    },
    video: {
      asset: {
        url: "/video/video1.mp4",
      },
    },
    likes: [
      { userId: "user456", userName: "Jane Doe" },
      { userId: "user789", userName: "John Smith" },
      { userId: "user101", userName: "Alice Johnson" },
    ],
  };

  return (
    <div>
      <h1>Video Gallery</h1>
      <VideoCard post={examplePost} isShowingOnHome={true} />
    </div>
  );
};

export default page;
