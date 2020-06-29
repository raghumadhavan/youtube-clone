import React, { useState, useContext } from "react";
import { Paper, TextField } from "@material-ui/core";
import { Consumer } from "../context/Provider";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchTerm } = useContext(Consumer);
  const handleSubmit = e => {
    e.preventDefault();
    setSearchTerm(searchInput);
  };

  const handleChange = event => {
    setSearchInput(event.target.value);
  };

  return (
    <Paper elevation={3} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search..."
          onChange={handleChange}
          value={searchInput}
          size="medium"
          style={{ borderRadius: "150px" }}
        />
      </form>
    </Paper>
  );
}

export default SearchBar;
