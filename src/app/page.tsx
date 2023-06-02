"use client";

import Search from "@/components/Search";
import Watchlist from "@/components/Watchlist";
import ApiUtils from "../utils/api-utils";
import { useState } from "react";
import { TvShowDetails } from "../utils/tmdb-interfaces";

export default function Home() {
  const [series, setSeries] = useState<Partial<TvShowDetails>[]>([]);

  async function fetchSeries(id: string): Promise<TvShowDetails> {
    try {
      const response = await fetch(
        ApiUtils.getSeriesDetailsUrl(id),
        ApiUtils.headers
      );

      if (!response.ok) {
        throw new Error(
          `Could not get response when fetching series with id ${id}. Response status is ${response.status}.`
        );
      }

      const details = await response.json();
      return details;
    } catch (e) {
      throw e;
    }
  }

  const handleAddSearchResult = async (id: string) => {
    try {
      //fetch series with given id
      const details = await fetchSeries(id);

      // add it to state
      setSeries((prevSeries) => [...prevSeries, details]);
    } catch (e) {}
  };

  return (
    <div className="container">
      <h1>My series watchlist</h1>
      <Search handleAddSearch={handleAddSearchResult} />
      <Watchlist series={series} />
    </div>
  );
}
