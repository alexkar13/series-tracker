//Kobra Kai, Ozark, Hawai Five-0

import WatchlistItem from "./WatchlistItem";

function Watchlist({ series }: { series: any[] }) {
  return (
    <>
      <ul style={{ padding: 0 }}>
        {series.map((s: any) => (
          <WatchlistItem key={s.id} item={s} />
        ))}
      </ul>
    </>
  );
}

export default Watchlist;
