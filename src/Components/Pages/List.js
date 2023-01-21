import React from 'react';
import styled from 'styled-components';
import { Box, Typography, Tooltip, IconButton } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Audio from './Audio.js';

const ResultWord = styled.div`
  display: flex;
  gap: 1em;
  padding: 1em;
  margin-bottom: 3em;
  margin-top: 1.5em;
`
const List = ({words, handleAddFavourites}) => {
    
  return (
    <div>
    { words.length > 0 ? (
        <Box>
          <ResultWord>
            <Typography>
              <h1 data-testid="word-h1">{words[0].word}</h1>  
            </Typography>
            <Typography>
              <h2>Phonetics: {words[0].phonetics[0].text}</h2>
            </Typography>
            <Tooltip>
              <IconButton sx={{ width: 100, height: 50, fontSize: "70px"}}>
                <Audio words = {words}/> 
              </IconButton>
            </Tooltip>
            <Tooltip>
              <IconButton  sx={{ width: 100, height: 50}}>
                <StarIcon onClick={() => handleAddFavourites(words)} data-testid="addtofavourites" style={{ fill: '#875f59'}}
                sx={{ width: 100,  fontSize: "70px"}}
                />  
              </IconButton>
            </Tooltip>
          </ResultWord>
          <Typography>
            <h2>{ words[0].meanings[0].definitions[0].definition}</h2>
          </Typography> 
        </Box>
           ) : (
        <div>
        </div>
     )}
      </div>
  )
}

export default List