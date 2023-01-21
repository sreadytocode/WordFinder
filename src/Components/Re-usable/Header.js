import React from 'react';
import NavBar from "../Re-usable/NavBar.js";
import styled from 'styled-components';

const Title = styled.h1`
    display: flex;
  height: 10vh;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #E4E9EC;
`
const HeaderContainer = styled.div`
  background-color: #875f59;
`

const Header = ({text}) => {
  return (
    <HeaderContainer>
      <div>
          <Title>{text}</Title>
      </div>
      <div>
          <NavBar/>
      </div>
    </HeaderContainer>
  )
}

export default Header