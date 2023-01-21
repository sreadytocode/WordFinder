import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "../Components/Pages/Home.js";
import Header from "../Components/Re-usable/Header.js";
import Footer from "../Components/Re-usable/Footer";
import Favourites from '../Components/Pages/Favourites.js';
import {Box} from "@mui/material";

const WordContainer = () => {
  const [ favouriteWords, setFavouriteWords ] = useState(() => {
    //getting stored value
    const saved = localStorage.getItem('favourites');
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  
  return (
    <Box>
        <BrowserRouter>
            <Header text="Word Finder"/>
            <Routes>
                <Route exact path='/' element={<Home favouriteWords={favouriteWords} setFavouriteWords={setFavouriteWords}/>}/> 
                <Route path='/favourites' element={<Favourites favouriteWords={favouriteWords} setFavouriteWords={setFavouriteWords}/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </Box>
  )
}

export default WordContainer