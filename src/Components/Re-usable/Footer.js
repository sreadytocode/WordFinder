import React from "react";
import styled from "styled-components";
import {Box, Typography, Stack} from "@mui/material";

const BottomFooter = styled.div`
  background-color: #875f59;
  color: #E4E9EC;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  bottom: 0;
  padding: 1rem;
  position: absolute;
  height: 5em;
`;

const Footer = () => {
  return (
    <BottomFooter>
      <Box bgcolor="#875f59" mt="30px">
        <Stack>
          <Typography variant="h4">
            <p>Word Finder Copyright &copy; Sara Qureshi. 2023</p>
          </Typography>
        </Stack>
      </Box>
    </BottomFooter>
  );
};

export default Footer;