import React from "react";

const EventCard = ({
  date,
  month,
  time,
  organizer,
  eventTitle,
  address,
  status,
}) => {
  return (
    <div className="w-full h-14  rounded-lg border flex flex-row shadow-md  mb-5">
      <div className="bg-red-500 rounded-lg w-1/4 py-2 flex items-center justify-center shadow-inner">
        <div className="text-center ">
          <div className="text-white font-bold text-lg">{date}</div>
          <div className="text-white font-normal text-sm">{month}</div>
        </div>
      </div>
      <div className="w-full  px-3 bg-white pt-1  flex-col justify-evenly font-extralight text-xs">
        <p>{time}</p>
        <p>{eventTitle}</p>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default EventCard;
