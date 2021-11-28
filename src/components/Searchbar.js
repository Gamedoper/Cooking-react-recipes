import { useHistory } from "react-router-dom";
import { useState } from "react";
//styyles

import "./Searchbar.css";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ?q= is the query parameter

    history.push(`/search?q=${search}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          id="search"
          required
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}
