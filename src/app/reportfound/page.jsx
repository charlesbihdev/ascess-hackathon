"use client";
import { useState } from "react";

const page = () => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [locationCoords, setLocationCoords] = useState({
    lat: null,
    lng: null,
  });

  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleLocationChange = (e) => setLocation(e.target.value);

  const handleLocationSubmit = () => {
    // Implement logic to convert location name to coordinates
    // For now, just set dummy coordinates
    setLocationCoords({ lat: 5.2981948, lng: -2.0005115 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Message:", message);
    console.log("Image:", image);
    console.log("Location:", location);
    console.log("Location Coordinates:", locationCoords);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold text-blue-500 mb-4 text-center">
        Report Found Items
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 font-medium text-gray-900"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
            placeholder="Enter your message"
            value={message}
            onChange={handleMessageChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="image"
            className="block mb-2 font-medium text-gray-900"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
            onChange={handleImageChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block mb-2 font-medium text-gray-900"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
            placeholder="Enter location"
            value={location}
            onChange={handleLocationChange}
            required
          />
        </div>

        <div className="mb-4">
          {locationCoords.lat && locationCoords.lng && (
            <div>
              <h4 className="text-xl font-semibold">Map Preview</h4>
              {/* <Map center={[locationCoords.lat, locationCoords.lng]} /> */}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-5 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
