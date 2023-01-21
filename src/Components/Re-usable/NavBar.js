import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Box, Typography, Tooltip, IconButton} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import HomeIcon from '@mui/icons-material/Home';

const NavBarContainer = styled.div`
  text-align: center;
  padding-bottom: 1em;
  display: flex;
  /* justify-content: space-evenly; */
  justify-content: center;
  gap: 7em;
  text-decoration: none;
`
const NavBar = () => {
  return (
    <NavBarContainer>
      <Tooltip>
        <IconButton>
          <Link to="/"><HomeIcon style={{ fill: '#E4E9EC'}}
                  sx={{ width: 60,  fontSize: "50px"}}/></Link>
        </IconButton>
      </Tooltip>
      <Tooltip>
        <IconButton>
          <Link to="/favourites"><StarIcon style={{ fill: '#E4E9EC'}}
                  sx={{ width: 60,  fontSize: "50px"}}/></Link>
        </IconButton>
      </Tooltip>
    </NavBarContainer>
  )
}

export default NavBar