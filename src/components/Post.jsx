import React from "react";

const Post = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <div
        className="w-full mx-auto rounded-lg bg-white shadow p-5 text-gray-800"
        style={{ maxWidth: "400px" }}
      >
        <div className="w-full flex mb-4">
          <div className="overflow-hidden rounded-full w-12 h-12">
            <img
              src="https://mighty.tools/mockmind-api/content/human/44.jpg"
              alt="Profile"
            />
          </div>
          <div className="flex-grow pl-3">
            <h6 className="font-bold text-md">Joe Blow</h6>
            <p className="text-xs text-gray-600">@joe.blow</p>
          </div>
          <div className="w-12 text-right">
            <i className="mdi mdi-twitter text-blue-400 text-3xl"></i>
          </div>
        </div>
        <div className="w-full mb-4">
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
            voluptatibus temporibus odio provident. Laboriosam accusamus
            necessitatibus tenetur praesentium ullam voluptates nulla
            reprehenderit?
          </p>
        </div>
        <div className="w-full">
          <p className="text-xs text-gray-500 text-right">Oct 15th 8:33pm</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
