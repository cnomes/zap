import React from "react"
import styled from "styled-components"

const Wrapper = styled.h2`
  align-self: center;

  text-transform: uppercase;
  text-align: center;
  font-size: 2em;

  > span {
    margin: 0 10px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 1em;
  }
`

const ConstructionEmoji = () => (
  <span role="img" aria-label="Construction Sign">
    🚧
  </span>
)

const SubTitle = () => (
  <Wrapper>
    <ConstructionEmoji />
    under construction
    <ConstructionEmoji />
  </Wrapper>
)

export default SubTitle
