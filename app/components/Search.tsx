import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchContext } from "../utils/SearchContext";

type Props = {};

const Search = (props: Props) => {
  const { search, setSearch } = useSearchContext();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <div>
        <h3>Name or Number {search}</h3>
        <div className="grid grid-cols-2 items-center">
          <div>
            <form className="flex">
              <input
                className="border-gray-500 px-2 w-[420px]  text-lg border-2 rounded-lg bg-white outline-none"
                type="text"
                name="searchPokemon"
                onChange={(e) => handleSearch(e)}
              />
              <button
                className="bg-orange-400 ml-8 p-4 rounded-lg"
                type="submit"
                name="submitSearch"
              >
                <FaSearch className="text-white text-2xl" />
              </button>
            </form>
          </div>
          <div className="bg-green-500 text-white w-[360px] md-[520px] mx-auto rounded-lg p-6 text-xl">
            Search for your favorite Pokémon by name or using its national
            Pokédex number.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
