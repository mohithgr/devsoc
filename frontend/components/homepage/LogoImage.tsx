// import Image from "next/image";

// function LogoImage() {
//   return (
//     <div className="flex items-center gap-3">
//       <div className="relative w-10 h-10">
//         <Image
//           src="/images/buildings/freeroomsLogo.png"
//           alt="Free Rooms Logo"
//           priority
//           fill
//           className="object-cover"
//         />
//       </div>

//       <h1 className="text-4xl text-orange-500 font-bold antialiased tracking-wide">
//         Freerooms
//       </h1>
//     </div>
//   );
// }

// export default LogoImage;


'use client';
import { useState } from "react";
import Image from "next/image";

function LogoImage() {
  const [isOpen, setIsOpen] = useState(true); // default open

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
