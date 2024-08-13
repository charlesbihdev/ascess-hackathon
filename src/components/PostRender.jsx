import PostWithImage from "@/components/PostWithImage";
import React from "react";

const posts = [
  {
    caption:
      "A black laptop was found at the UMAT Mini Auditorium. The device has a few stickers on the lid and was left unattended on a seat.",
    status: "Found",
    username: "Nana Acamoah",
    location: "Main Auditorium",
    imageSrc:
      "https://cdn.thewirecutter.com/wp-content/media/2023/10/smartphone-2048px-4861.jpg",
    timestamp: "Oct 15th 8:33pm",
  },
  {
    caption:
      "A red backpack was found near the Library. It looks new and has a water bottle holder on the side.",
    status: "Lost",
    username: "Kwame Mensah",
    location: "Library Entrance",
    imageSrc:
      "https://cdn.thewirecutter.com/wp-content/media/2021/09/walletbackpain-2048px-184362048.jpg",
    timestamp: "Oct 16th 9:00am",
  },
  {
    caption:
      "A lost phone was reported in the cafeteria. It is an iPhone with a cracked screen.",
    status: "Lost",
    username: "Ama Boateng",
    location: "Cafeteria",
    imageSrc:
      "https://cdn.thewirecutter.com/wp-content/media/2023/10/smartphone-2048px-4861.jpg",
    timestamp: "Oct 17th 1:45pm",
  },
  {
    caption:
      "A blue wallet was found in the parking lot. It contains some cash and cards.",
    status: "Found",
    username: "Kofi Adu",
    location: "Parking Lot",
    imageSrc:
      "https://cdn.thewirecutter.com/wp-content/media/2021/09/walletbackpain-2048px-184362048.jpg",
    timestamp: "Oct 18th 3:22pm",
  },
  {
    caption:
      "A set of keys was found in the dormitory hallway. They are on a keychain with a small flashlight.",
    status: "Lost",
    username: "Esi Osei",
    location: "Dormitory Hallway",
    imageSrc:
      "https://cdn.thewirecutter.com/wp-content/media/2023/10/smartphone-2048px-4861.jpg",
    timestamp: "Oct 19th 5:10pm",
  },
  {
    caption:
      "A missing tablet was last seen in the computer lab. It has a blue case and a sticker with a name.",
    status: "Lost",
    username: "Kwabena Asante",
    location: "Computer Lab",
    imageSrc:
      "https://cdn.thewirecutter.com/wp-content/media/2021/09/walletbackpain-2048px-184362048.jpg",
    timestamp: "Oct 20th 7:30am",
  },
  {
    caption:
      "A pair of glasses was found near the sports field. They are in a black case.",
    status: "Found",
    username: "Akosua Serwaa",
    location: "Sports Field",
    imageSrc: "https://picsum.photos/id/1022/600/400",
    timestamp: "Oct 21st 2:00pm",
  },
  {
    caption:
      "A book was left behind in the library. It’s a hardcover novel with a blue cover.",
    status: "Found",
    username: "Yaw Boakye",
    location: "Library",
    imageSrc:
      "https://cdn.thewirecutter.com/wp-content/media/2023/10/smartphone-2048px-4861.jpg",
    timestamp: "Oct 22nd 10:30am",
  },
  {
    caption:
      "A lost ID card was found near the administration office. It has a photo and name on it.",
    status: "Lost",
    username: "Martha Agyeman",
    location: "Administration Office",
    imageSrc:
      "https://cdn.thewirecutter.com/wp-content/media/2021/09/walletbackpain-2048px-184362048.jpg",
    timestamp: "Oct 23rd 4:15pm",
  },
];

const PostList = () => {
  return (
    <div>
      {posts.map((post, index) => (
        <PostWithImage
          key={index}
          caption={post.caption}
          status={post.status}
          username={post.username}
          location={post.location}
          imageSrc={post.imageSrc}
          timestamp={post.timestamp}
        />
      ))}
    </div>
  );
};

export default PostList;
