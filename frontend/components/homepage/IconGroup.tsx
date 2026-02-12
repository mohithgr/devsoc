// 'use client';
// import { useState } from "react";
// import { MdSearch, MdGridView, MdMap, MdDarkMode } from "react-icons/md";

// export default function IconGroup() {
//   const [active, setActive] = useState(null);

//   const icons = [
//     { id: "search", icon: <MdSearch /> },
//     { id: "grid", icon: <MdGridView /> },
//     { id: "map", icon: <MdMap /> },
//     { id: "dark", icon: <MdDarkMode /> },
//   ];

//   return (
//     <div className="flex gap-3">
//       {icons.map((item) => (
//         <div
//           key={item.id}
//           onClick={() => setActive(item.id)}
//           className={`group p-2 rounded-md cursor-pointer transition border border-amber-500
//             ${
//               active === item.id
//                 ? "bg-orange-500"
//                 : "bg-transparent hover:bg-orange-500"
//             }`}
//         >
//           <div
//             className={`text-2xl transition
//               ${
//                 active === item.id
//                   ? "text-white"
//                   : "text-orange-500 group-hover:text-white"
//               }`}
//           >
//             {item.icon}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

'use client';
import { useState, useRef, useEffect } from "react";
import { MdSearch, MdGridView, MdMap, MdDarkMode } from "react-icons/md";

export default function IconGroup() {
  const [active, setActive] = useState(null);
  const wrapperRef = useRef(null);

  const icons = [
    { id: "search", icon: <MdSearch /> },
    { id: "grid", icon: <MdGridView /> },
    { id: "map", icon: <MdMap /> },
    { id: "dark", icon: <MdDarkMode /> },
  ];

  // 🔥 Outside click handler
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActive(null); // deselect
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="flex gap-3">
      {icons.map((item) => (
        <div
          key={item.id}
          onClick={() => setActive(item.id)}
          className={`group p-2 rounded-md cursor-pointer transition border border-amber-500
            ${
              active === item.id
                ? "bg-orange-500"
                : "bg-transparent hover:bg-orange-500"
            }`}
        >
          <div
            className={`text-2xl transition
              ${
                active === item.id
                  ? "text-white"
                  : "text-orange-500 group-hover:text-white"
              }`}
          >
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
