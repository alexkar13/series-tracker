import React, { useState } from "react";
import LoadingIndicator from "./LoadingIndicator";
import SearchResult from "./SearchResult";
import ApiUtils from "../utils/api-utils";

function Search({ handleAddSearch }: { handleAddSearch: Function }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchSearchResults = async (url: string) => {
    setIsLoading(true);

    try {
      const response = await fetch(url, ApiUtils.headers);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="search-container">
      <div className="searchbar-results-container">
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={async (e) => {
            setSearchTerm(e.target.value);

            if (searchTerm.length > 3) {
              const url = ApiUtils.getSearchUrl(searchTerm);

              const results = await fetchSearchResults(url);
              setSearchResults(results.results);
            }
          }}
          placeholder="Series to add..."
        />

        {searchResults && (
          <div className="search-dropdown-container">
            {isLoading ? (
              <LoadingIndicator />
            ) : (
              <ul className="search-results-list">
                {searchResults.map((r: any) => (
                  <SearchResult
                    id={r.id}
                    key={r.id}
                    name={r.name}
                    year={r.first_air_date.slice(0, 4)}
                    handleAddSearch={() => {
                      handleAddSearch(r.id);
                      setSearchResults(null);
                      setSearchTerm("");
                    }}
                  />
                ))}
                {searchResults.length === 0 && (
                  <div style={{ textAlign: "center" }}>No result found.</div>
                )}
              </ul>
            )}
          </div>
        )}
      </div>
      <button
        className="clear-button"
        style={{ marginLeft: "16px" }}
        onClick={() => {
          setSearchResults(null);
          setSearchTerm("");
        }}
      >
        Clear
      </button>
      {error && <div>Error occurred while fetching data</div>}
    </div>
  );
}

export default Search;
