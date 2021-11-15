import React from 'react'
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring";

const Welcome = () => {
    return (
      <Wrapper>
          <Headline>Hello!</Headline>
          <SubHeader>I'm Dylan Gomer, a web developer.</SubHeader>
      </Wrapper>
    )
}

export default Welcome;

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Shippori+Antique+B1&display=swap');
  
  font-family: 'Shippori Antique B1', sans-serif;
  width: 100vw;
  height: 100vh;
  background: #93B7BE;
`;

const Headline = styled.h1`
    position: fixed;
    width: 100%;
    text-align: center;
    font-size: 12vw;
    padding-top: 20%;
    color: black;
`;

const SubHeader = styled.h1`
    position: fixed;
    width: 100%;
    text-align: center;
    padding-top: 32%;
    font-size: 2vw;
    color: black;
`;