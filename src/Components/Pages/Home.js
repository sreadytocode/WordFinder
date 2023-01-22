import React, {useState} from 'react';
import SearchBar from "../Pages/SearchBar.js";
import List from '../Pages/List.js';

const Home = ({favouriteWords, setFavouriteWords}) => {
  const [words, setWords] = useState([]);

  const handleAddFavourites = (chosenWord) => {
    const newFavouriteWords = [...favouriteWords];
    newFavouriteWords.push(chosenWord)

    const removeDuplicateWords = [...new Set(newFavouriteWords)];
    setFavouriteWords(removeDuplicateWords)

  }

  return (
    <div data-testid="home-1">
      <div>
        <SearchBar setWords={setWords}/>
      </div>
      <div>
        <List words={words} handleAddFavourites={handleAddFavourites}/>
      </div>
    </div>
  )
}

export default Home