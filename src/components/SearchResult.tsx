export default function SearchResult({
  id,
  name,
  year,
  handleAddSearch,
}: {
  id: string;
  name: string;
  year: number;
  handleAddSearch: Function;
}) {
  return (
    <li className="search-result-item">
      <span>
        {name} ({year})
      </span>
      <button
        className="search-result-add-btn"
        onClick={(id) => {
          handleAddSearch(id);
        }}
      >
        Add
      </button>
    </li>
  );
}
