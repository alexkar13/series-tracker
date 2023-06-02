import { FunctionComponent } from "react";
import ApiUtils from "../utils/api-utils";

interface WatchlistItemProps {
  item: any;
}

const WatchlistItem: FunctionComponent<WatchlistItemProps> = ({ item }) => {
  console.log(item);
  return (
    <li className="watchlist-item-card">
      <h2>
        {item.name} ({item.first_air_date.slice(0, 4)})
      </h2>
      <div style={{ display: "flex" }}>
        <img
          style={{ borderRadius: "8px" }}
          alt={`Poster image of ${item.name}.`}
          src={ApiUtils.getPosterPathUrl(item.poster_path)}
        />
        <ul style={{ listStyle: "none", lineHeight: 2 }}>
          <li>
            Status: <span className="chip">{item.status}</span>
          </li>
          <li>
            Networks:{" "}
            {item.networks.map((n: any) => (
              <span className="chip" key={n.name}>
                {n.name}
              </span>
            ))}
          </li>
          <li>
            Last episode:{" "}
            <span className="chip">
              S{item.last_episode_to_air.season_number}E
              {item.last_episode_to_air.episode_number}
            </span>{" "}
            <span className="chip">{item.last_episode_to_air.air_date}</span>
          </li>
          {item.status.toLowerCase() !== "ended" && (
            <li>
              Next episode:{" "}
              {item.next_episode_to_air ? (
                <>
                  <span className="chip">
                    {item.next_episode_to_air.season_number}E$
                    {item.next_episode_to_air.episode_number}
                  </span>
                  <span className="chip">
                    {item.next_episode_to_air.air_date}
                  </span>
                </>
              ) : (
                "Unknown"
              )}
            </li>
          )}
        </ul>
      </div>
    </li>
  );
};

export default WatchlistItem;
