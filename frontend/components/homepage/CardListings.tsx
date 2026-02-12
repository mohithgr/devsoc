"use client";
import Image from "next/image";
import data from "../../data.json";

function CardListings({ search, sortOption  }) {

  const filteredBuildings = data.filter((building) =>
    building.name.toLowerCase().includes(search.toLowerCase())
  );

   // Apply sorting
  if (sortOption === "az") {
    filteredBuildings.sort((a, b) => a.name.localeCompare(b.name))
  }

  if (sortOption === "za") {
    filteredBuildings.sort((a, b) => b.name.localeCompare(a.name))
  }

  if (sortOption === "rooms-high") {
    filteredBuildings.sort((a, b) => b.rooms_available - a.rooms_available)
  }

  if (sortOption === "rooms-low") {
    filteredBuildings.sort((a, b) => a.rooms_available - b.rooms_available)
  }

  return (
    <>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
        {filteredBuildings.map((building, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md hover:shadow-xl transition overflow-hidden cursor-pointer"
          >
            <div className="relative w-full h-72">
              <Image
                src={`/images/buildings/${building.building_picture}`}
                alt={building.name}
                fill
                className="object-cover"
              />

              <h2 className="absolute min-h-10 bottom-2 left-2 right-2 py-3 px-4 rounded-md text-white bg-orange-500/90 backdrop-blur-sm font-semibold xs:text-xs sm:text-sm md:text-md line-clamp-2 leading-snug">
                {building.name}
              </h2>

              <div className="absolute top-2 right-2 flex items-center gap-2 bg-white py-2 px-3 rounded-xl">
                <div className="rounded-full bg-green-500 w-2 h-2" />
                <p className="text-black font-medium text-sm">
                  {building.rooms_available} rooms available
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBuildings.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No buildings found.
        </p>
      )}
    </>
  );
}

export default CardListings;
