import { createContext, useContext } from "react";

export type SearchContextType = {
  search: string;
  setSearch: (c: string) => void;
};

export const SearchContext = createContext<SearchContextType>({
  search: "INI KONTEX",
  setSearch: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

export default SearchContext;
