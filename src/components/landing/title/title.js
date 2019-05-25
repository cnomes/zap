import React from "react"
import styled from "styled-components"

import Right from "./right"
import Left from "./left"
import Bolt from "./bolt"

const Wrapper = styled.h1`
  display: flex;
  margin: 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 10em;
  height: 200px;
  @media only screen and (max-width: 700px) {
    font-size: 5em;
    height: 100px;
  }
`

const Title = () => (
  <Wrapper>
    <Left>zap</Left>
    <Bolt />
    <Right>dev</Right>
  </Wrapper>
)

export default Title
