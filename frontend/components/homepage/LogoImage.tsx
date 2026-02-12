'use client';
import { useState } from "react";
import Image from "next/image";

function LogoImage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="flex gap-2 cursor-pointer select-none"
    >
      <div className="relative w-10 h-10">
        <Image
          src={
            isOpen
              ? "/images/buildings/freeroomsLogo.png"
              : "/images/buildings/freeroomsDoorClosed.png"
          }
          alt="Free Rooms Logo"
          priority
          fill
          className="object-cover transition"
        />
      </div>

      <h1 className="text-3xl text-orange-500 font-bold tracking-wide">
        Freerooms
      </h1>
    </div>
  );
}

export default LogoImage;
