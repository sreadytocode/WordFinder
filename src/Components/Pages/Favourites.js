import React, { useEffect } from 'react';
import { Card, CardContent, Typography, Tooltip, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Title from '../Re-usable/Title.js';

const Favourites = ({favouriteWords, setFavouriteWords}) => {
  
  useEffect(() => {
      window.localStorage.setItem('favourites', JSON.stringify(favouriteWords))
  }, [favouriteWords])

  const removeWord = (wordToRemove) => {
    const updatedFavourites = [...favouriteWords];
    const wordIndex = updatedFavourites.indexOf(wordToRemove);
    updatedFavourites.splice(wordIndex, 1);
    setFavouriteWords(updatedFavourites)
  }
  const favouriteList = favouriteWords.map((words, index) => {
    
    return (
        <Card key={index} sx={{ minWidth: 300, m: 2 }} >
          <CardContent>
            <Typography variant='h4' data-testid="h4">
              {words[0].word}   
            </Typography>
            <Tooltip>
              <IconButton sx={{ width: 55}}>
                <DeleteIcon onClick={() => removeWord(words)} style={{ fill: 'red'}}
                sx={{ fontSize: "40px"}}/>
              </IconButton>
            </Tooltip>
            <Typography variant='h5' component="div">
              Definition: {words[0].meanings[0].definitions[0].definition}
            </Typography>
          </CardContent>
        </Card>
    )
  })

  return (
    <div>
      <Title text="Favourite Words"/>
        {favouriteList}
    </div>
  )
}

export default Favourites