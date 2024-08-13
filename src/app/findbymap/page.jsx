// pages/index.js

import Map from "@/components/Map";
import items from "../../data/items.js"; // Import the items

export default function page() {
  return (
    <div>
      <h1 className="text-3xl text-center mb-6">Campus Lost and Found</h1>
      <Map items={items} />
    </div>
  );
}
