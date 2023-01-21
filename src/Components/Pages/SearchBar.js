import React, {useState, useEffect} from 'react'
import { TextField, Button } from "@mui/material";
import styled from 'styled-components';
// npm install @mui/material @emotion/react @emotion/styled

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #C1B0A6;
  height: 6rem;
`;

const SearchBar = ({setWords}) => {
  const [search, setSearch] = React.useState("");

  const searchHandler = async () => {
    if (search) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
        .then(res => res.json())
        .then(searchData => {
          const searchedWords = searchData.filter(
            (word) =>
              word.word.toLowerCase()
                        .includes(search)
          );
          setSearch("");
          setWords(searchedWords);
        });
    }
  };

  return (
    <SearchBarContainer>
      <TextField
        sx={{
          input: {
            fontWeight: "700",
            border: "none",
            borderRadius: "5px",
          },
          width: { lg: "500px", xs: "400px", xl: "1100px" },
          backgroundColor: "#fff",
          borderRadius: "4px",
        }}
        height="76px"
        value={search}
        data-testid="search"
        inputProps={{ "data-testid": "search-input" }}
        id="search"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search For Words"
        type="textbox"
      />
      <Button
        sx={{
          bgcolor: "#875f59",
          "&hover": { backgroundColor: "black" },
          color: "#fff",
          textTransform: "none",
          width: { lg: "100px", xs: "80px", xl: "100px" },
          fontSize: { lg: "20px", xs: "14px" },
          height: "56px",
          position: "relative",
          right: 1,
          marginLeft: 2,
        }}
        data-testid="searchclick"
        onClick={searchHandler}
      >
        Search
      </Button>
    </SearchBarContainer>
  )
}

export default SearchBar