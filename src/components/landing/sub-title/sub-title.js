import React from "react"
import styled from "styled-components"

import emojis from "common/emojis"

const Wrapper = styled.h2`
  align-self: center;

  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;

  > span {
    margin: 0 10px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 1rem;
  }
`

const SubTitle = () => (
  <Wrapper>
    <emojis.ConstructionSign />
    under construction
    <emojis.ConstructionSign />
  </Wrapper>
)

export default SubTitle
