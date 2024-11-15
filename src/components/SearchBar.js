import React from "react";

function SearchBar({ searchKeyword, setSearchKeyword }) {
  return (
    <input
      type="text"
      value={searchKeyword}
      onChange={(e) => setSearchKeyword(e.target.value)}
      placeholder="Cari catatan..."
    />
  );
}

export default SearchBar;
