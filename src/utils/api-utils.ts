const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export default class ApiUtils {
  static headers = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      accept: "application/json",
    },
  };

  static getSearchUrl = (query: string): string =>
    `https://api.themoviedb.org/3/search/tv?query=${encodeURIComponent(query)}`;

  static getSeriesDetailsUrl = (id: string): string =>
    `https://api.themoviedb.org/3/tv/${id}`;

  static getPosterPathUrl = (path: string): string =>
    `https://image.tmdb.org/t/p/w92/${path}`;
}
