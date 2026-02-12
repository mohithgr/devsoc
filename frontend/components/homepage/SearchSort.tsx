"use client"
import { useState, useRef, useEffect } from "react"
import { MdFilterAlt, MdFilterList, MdSearch } from 'react-icons/md'

function SearchSort({ search, setSearch, setSortOption }) {

  const [openSort, setOpenSort] = useState(false)
  const sortRef = useRef(null)

  const handleSort = (option) => {
    setSortOption(option)
    setOpenSort(false)
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setOpenSort(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className='mt-4 relative'>

      <div className='hidden sm:flex justify-between items-center'>

        {/* Filters */}
        <div className='group flex items-center gap-2 border border-orange-500 rounded-md px-8 py-2 cursor-pointer hover:bg-orange-500 transition-all duration-200'>
          <MdFilterAlt className='text-2xl text-orange-500 group-hover:text-white transition' />
          <p className='text-orange-500 font-bold group-hover:text-white transition'>
            Filters
          </p>
        </div>

        {/* Search */}
        <div className='flex border border-gray-300 rounded-md px-4 py-2 gap-2 items-center md:w-1/2 lg:w-1/3 cursor-text'>
          <MdSearch className='text-2xl text-gray-500' />
          <input
            type="search"
            placeholder="Search for a building..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='outline-none w-full text-gray-700'
          />
        </div>

        {/* Sort */}
        <div className="relative" ref={sortRef}>
          <div
            onClick={() => setOpenSort(!openSort)}
            className={`group flex items-center gap-2 border border-orange-500 rounded-md px-8 py-2 cursor-pointer transition-all duration-200
    ${openSort ? "bg-orange-500" : "bg-transparent hover:bg-orange-500"}
  `}
          >
            <MdFilterList
              className={`text-2xl transition
      ${openSort ? "text-white" : "text-orange-500 group-hover:text-white"}
    `}
            />
            <p
              className={`font-bold transition
      ${openSort ? "text-white" : "text-orange-500 group-hover:text-white"}
    `}
            >
              Sort
            </p>
          </div>

          {openSort && (
            <div className="absolute right-0 mt-1 w-60 bg-white shadow-lg rounded-md border border-orange-300 z-50">
              <button onClick={() => handleSort("az")} className="block w-full text-left px-4 py-2 hover:bg-orange-100">
                Alphabetical (A–Z)
              </button>
              <button onClick={() => handleSort("za")} className="block w-full text-left px-4 py-2 hover:bg-orange-100">
                Reverse Alphabetical (Z–A)
              </button>
              <button onClick={() => handleSort("rooms-high")} className="block w-full text-left px-4 py-2 hover:bg-orange-100">
                Rooms: High → Low
              </button>
              <button onClick={() => handleSort("rooms-low")} className="block w-full text-left px-4 py-2 hover:bg-orange-100">
                Rooms: Low → High
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

export default SearchSort
