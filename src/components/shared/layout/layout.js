import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

import Main from "./main"

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  color: #333333;

  background-color: #fafafa;
`

export default ({ element }) => (
  <Wrapper>
    <Helmet>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji*/}
      <title>ZAP⚡DEV</title>
    </Helmet>
    <Main>{element}</Main>
  </Wrapper>
)
