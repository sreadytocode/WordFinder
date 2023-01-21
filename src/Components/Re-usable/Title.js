import React from 'react';
import styled from 'styled-components';

const PageTitle = styled.h1`
  display: flex;
  height: 15vh;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`

const Title = ({text}) => {
  return (
    <PageTitle>{text}</PageTitle>
  )
}

export default Title