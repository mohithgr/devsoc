'use client';

import { useState } from "react";
import Container from "../../components/Container";
import IconGroup from "../../components/homepage/IconGroup";
import SearchSort from "../../components/homepage/SearchSort";
import CardListings from "../../components/homepage/CardListings";
import { MdMenu, MdClose } from "react-icons/md";
import LogoImage from "../../components/homepage/LogoImage";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");

  return (
    <Container>
      <div className="relative">
        <div className="flex justify-between items-center border-b border-gray-100 py-2">
          <LogoImage />
          <div className="hidden xs:block">
            <IconGroup />
          </div>
          <div className="xs:hidden">
            {menuOpen ? (
              <MdClose
                className="text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <MdMenu
                className="text-3xl cursor-pointer transition-transform duration-300 hover:scale-110"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>

        <div
          className={`xs:hidden overflow-hidden transition-all duration-500 ease-in-out
          ${menuOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <div className="rounded-xl p-4 shadow-xl bg-white flex justify-center items-center">
            <IconGroup />
          </div>
        </div>
      </div>

      <SearchSort
        search={search}
        setSearch={setSearch}
        setSortOption={setSortOption}
      />

      <CardListings
        search={search}
        sortOption={sortOption}
      />
      
    </Container>
  );
}
