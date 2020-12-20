import React, { useCallback, useEffect, useState } from "react";

import Wikipedia from "../api/Wikipedia";

import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

const wikipedia = new Wikipedia();

const SEARCH_DELAY_MS = 1000;

const SearchPannel = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [searchResults, setSearchResults] = useState([]);

  const onSearchFormChange = useCallback(
    (term) => {
      setSearchTerm(term);
    },
    [setSearchTerm]
  );

  // DEBOUNCING PATTERN: separate the de-bouncing logic from the actual side-effect logic.
  useEffect(() => {
    const searchTimer = setTimeout(() => setDebouncedSearchTerm(searchTerm), SEARCH_DELAY_MS);
    return () => clearTimeout(searchTimer);
  }, [searchTerm]);

  useEffect(() => {
    (async () => {
      const results = await wikipedia.search(debouncedSearchTerm);
      setSearchResults(results);
    })();
  }, [debouncedSearchTerm]);


  return (
    <div className="ui segment">
      <SearchForm onChange={onSearchFormChange} />
      <SearchResults items={searchResults} />
    </div>
  );
};

export default SearchPannel;
