import React from "react"
import styled from "styled-components"

import List, { Items } from "./list"

const Wrapper = styled.header`
  align-self: stretch;

  display: flex;
  flex-direction: row;
`

const Filler = styled.div`
  flex: 1;
`

export default () => (
  <Wrapper>
    <Filler />
    <List>
      <Items.GitHub />
      <Items.Codepen />
      <Items.LinkedIn />
      <Items.Instagram />
      <Items.Twitter />
    </List>
  </Wrapper>
)
