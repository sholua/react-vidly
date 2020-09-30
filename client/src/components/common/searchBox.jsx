import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      name="query"
      type="text"
      placeholder="Search..."
      value={value}
      className="form-control my-3"
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
