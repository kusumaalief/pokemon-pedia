"use client";

import { useEffect, useState, useContext } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import axios from "axios";
import PokemonCard from "./components/PokemonCard";

import SearchContext from "./utils/SearchContext";

export default function Home() {
  const [pokemonsData, setPokemonsData] = useState<string[]>([]);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

  const [search, setSearch] = useState<string>("");

  const generatePokemons = async (results: []) => {
    setPokemonsData([]);
    results.map(async ({ url }) => {
      setIsLoading(true);
      const res = await axios.get(url);
      // console.log(res.data);
      setPokemonsData((prev) => {
        prev = [...prev, res.data];
        return prev;
      });
    });
    setIsLoading(false);
  };

  const handlePage = async (url: string) => {
    setUrl(url);
    initPokemon();
  };

  const initPokemon = async () => {
    const res = await axios.get(url);
    const data = await res.data;

    console.log(data);
    setNext(data.next);
    setPrev(data.previous);
    generatePokemons(data.results);
    // console.log(pokemonsData);
  };

  useEffect(() => {
    initPokemon();
  }, [url]);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <div className="bg-white mx-10 p-8 ">
          <Search />
          Pokémon List
          <div className="grid grid-cols-4">
            {pokemonsData !== null
              ? pokemonsData.map((data: any) => (
                  <div>
                    <PokemonCard data={data} />
                  </div>
                ))
              : null}
          </div>
          <div>
            {isLoading === false ? (
              <div className="flex justify-around my-4">
                <button
                  className="p-4 text-xl capitalize bg-rose-300 rounded-lg hover:bg-rose-500 transition-all duration-150 ease-in-out hover:text-white"
                  disabled={prev === null ? true : false}
                  onClick={(e) => handlePage(prev)}
                >
                  prev
                </button>
                <button
                  className="p-4 text-xl capitalize bg-rose-300 rounded-lg hover:bg-rose-500 transition-all duration-150 ease-in-out hover:text-white"
                  disabled={next === null ? true : false}
                  onClick={(e) => handlePage(next)}
                >
                  next
                </button>
              </div>
            ) : (
              <h1>Loading . . . .</h1>
            )}
          </div>
        </div>
      </main>
    </SearchContext.Provider>
  );
}
