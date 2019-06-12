import React from "react"
import styled from "styled-components"
import { Helmet } from "react-helmet"

import PeekABoo from "common/peek-a-boo"

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #333333;

  background-color: #fafafa;
`

const Layout = ({ element }) => (
  <Wrapper>
    <PeekABoo />
    <Helmet>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji*/}
      <title>ZAP⚡DEV</title>
    </Helmet>
    {element}
  </Wrapper>
)

export default Layout
