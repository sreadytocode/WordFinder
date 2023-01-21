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

  // Got stuck on this as it showed all definitions then realised word is a result of 2 objects in an array 
  // const definitions = words.map((word) => {
  //   if (word.length === 0){
  //     return (
  //     <div>
  //       <h2>Definition: {word.meanings[0].definitions[0].definition}</h2>
  //       {console.log(word.meanings[0].definitions[0].definition)}
  //     </div>
  //   )
  //   }
  // })

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