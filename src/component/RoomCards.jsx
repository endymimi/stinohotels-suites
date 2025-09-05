
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence } from "framer-motion";
import {
  FaBed,
  FaWifi,
  FaSnowflake,
  FaShower,
  FaToiletPaper,
  FaBreadSlice,
} from "react-icons/fa";

const RoomCards = () => {
  
   const rooms = [
{
name: "Classic Room",
price: "₦ 40,000 / NIGHT",
image: "/images/classic-room.jpg",
},
{
name: "Deluxe Room",
price: "₦ 60,000 / NIGHT",
image: "/images/deluxe-room.jpg",
},
{
name: "Executive Room",
price: "₦ 80,000 / NIGHT",
image: "/images/executive-room1.jpg",
},
{
name: "Ambassadorial Suite",
price: "₦ 100,000 / NIGHT",
image: "/images/ambassadorial-suite1.jpg",
},
{
name: "Executive Room",
price: "₦ 80,000 / NIGHT",
image: "/images/executive-room2.jpg",
},
{
name: "Ambassadorial Suite",
price: "₦ 100,000 / NIGHT",
image: "/images/ambassadorial-suite2.jpg",
},
];

const features = [
{ icon: <FaBed />, label: "Twin Bed" },
{ icon: <FaWifi />, label: "Wifi Connection" },
{ icon: <FaSnowflake />, label: "Mini Fridge" },
{ icon: <FaBreadSlice />, label: "Free Breakfast" },
{ icon: <FaShower />, label: "Hot and cold shower 24/7" },
{ icon: <FaToiletPaper />, label: "Toiletries" },
];

 const [openIndex, setOpenIndex] = useState(null);
  
 const toggleFeatures = (index) => {
setOpenIndex(openIndex === index ? null : index);
};
    return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
{rooms.map((room, index) => (
<Card
key={index}
className="overflow-hidden shadow-lg rounded-2xl cursor-pointer"
onClick={() => toggleFeatures(index)}
>
<img
src={room.image}
alt={room.name}
className="w-full h-64 object-cover"
/>
<CardContent className="p-4 bg-black text-white">
<h3 className="text-lg font-semibold">{room.name}</h3>
<p className="text-sm">{room.price}</p>
</CardContent>


{/* Features Slide Down */}
<AnimatePresence>
{openIndex === index && (
<motion.div
initial={{ height: 0, opacity: 0 }}
animate={{ height: "auto", opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
transition={{ duration: 0.3 }}
className="p-4 bg-[#fefaf6] text-brown-800 rounded-b-2xl"
>
<div className="grid grid-cols-2 gap-4 mb-4">
{features.map((f, i) => (
<div key={i} className="flex items-center space-x-2">
<span className="text-lg">{f.icon}</span>
<span className="text-sm">{f.label}</span>
</div>
))}
</div>
<button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
Book Now
</button>
</motion.div>
)}
</AnimatePresence>
</Card>
))}
</div>
    </>
    )
};

export default RoomCards;
